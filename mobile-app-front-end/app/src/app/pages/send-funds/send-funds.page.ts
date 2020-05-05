import { Tokens } from '../../models/tokens.model';
import { BalanceService } from '../../service/balance.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { AlertController, Platform, NavParams } from '@ionic/angular';
import { MinimaApiService } from '../../service/minima-api.service';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import jsQR from "jsqr";

@Component({
  selector: 'app-send-funds',
  templateUrl: './send-funds.page.html',
  styleUrls: ['./send-funds.page.scss'],
  providers: [ BalanceService ],
})
export class SendFundsPage implements OnInit {

  compareWith: any;
  itemSelected: any;
  isCameraOpen: boolean = false;
  minimaToken: any;
  data: any = {};

  balanceSubscription: Subscription;
 

  // Token Array Type
  tokenArr: Tokens[] = [];
  MINIMA_TOKEN_ID = '0x00'; 

  private lastJSON: string = '';
  private scanSub:any=null;
  
  constructor(private qrScanner: QRScanner, private clipboard: Clipboard, 
    public alertController: AlertController, private zone: NgZone, 
    private api: MinimaApiService,
    private balanceService: BalanceService,
    private platform: Platform,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.isCameraOpen = false;
  }

  ionViewWillEnter(){
    this.pullInTokens();
    this.getTokenSelected();
    this.isCameraOpen = false;
  }

  ionViewWillLeave() {
    // unsubscribe
    this.balanceSubscription.unsubscribe();
    this.stopCamera();
  }

  // get token selected or set Minima as default
  getTokenSelected() {    
    // check url snapshot
    const empty = undefined;
    const param = this.route.snapshot.params['id'];
    // check param
    if(param === empty || param === this.MINIMA_TOKEN_ID){
    
      this.itemSelected = this.tokenArr[0];
      this.data.tokenid = "0x00";
    
    } else if(param !== empty && param !== this.MINIMA_TOKEN_ID ){
    this.tokenArr.forEach(element => {
      if(param === element.id){
        this.itemSelected = element;
        this.data.tokenid = element.id;
      }
    })
  }
  }

  // listen to selection change
  onItemSelection($event) {
    this.tokenArr.forEach(element => {
      if(this.itemSelected === element.id){
        this.itemSelected = element;

        // update tokenid
        this.updateTokenId(element.id);
      }
    })
  }
  // fn to update tokenid
  updateTokenId(id) {
    this.data.tokenid = id;
  }

  /** ScanQR: Native || Desktop */
  scanQR() { 

    if(this.platform.is('ios') || this.platform.is('android')){
      this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          
          // Which class adding should I use?
          this.identifyPlatformToScan_Add();

          this.qrScanner.show();
          this.isCameraOpen = true;

          this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
            this.zone.run(()=>{
              this.data.address = text;
              this.stopCamera();

              this.identifyPlatformToScan_Remove();

              this.isCameraOpen = false;
              })

          }, (err) => {
            console.log('Scanned failed', err);
          })

        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
          this.presentAlert('Please check camera permission','Error');
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
          this.presentAlert('Please check camera permission','Error');
        }
      })
      .catch((e: any) => console.log('Error is', e));

    } else {
      // browser compatible qr scan
      this.presentAlert("Using Minidesk", "Minidesktop");

      //jsQR()


    }
  }

  stopCamera() {
    if(this.scanSub!==null){
      this.qrScanner.hide();
      this.scanSub.unsubscribe();
    }
    this.scanSub = null;
    this.identifyPlatformToScan_Remove();
    this.isCameraOpen = false;
    this.qrScanner.destroy();
  }

  
  /** ALERTS */
  async presentAlert(msg:string,header:string) {
    const alert = await this.alertController.create({
      header: header,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  // API CALLS
  pullInTokens() {
    this.balanceSubscription =this.balanceService.getBalance().pipe(map(responseData => {
      const tokenArr: Tokens[] = [];
      for(const key in responseData.response.balance){
        if(responseData.response.balance.hasOwnProperty(key)){
          let element = responseData.response.balance[key];
          // round up confirmed && unconfirmed
          
          let tempConfirmed = (Math.round(element.confirmed * 100)/100);
          let tempUnconfirmed = (Math.round(element.unconfirmed * 100)/100);

          if(this.MINIMA_TOKEN_ID === element.tokenid){
            this.minimaToken = element.tokenid;
          }
          tokenArr.push({
              id: element.tokenid,
              token: element.token,
              total: element.total,
              confirmed: tempConfirmed,
              unconfirmed: tempUnconfirmed,
              mempool: element.mempool,
              sendable: element.sendable
          });

          // add Minima always to the top
          if(element.tokenid === this.MINIMA_TOKEN_ID){
            tokenArr.pop(); // pop it
            this.balanceService.update(
            tokenArr,
            {
              id: element.tokenid,
              token: element.token,
              total: element.total,
              confirmed: tempConfirmed,
              unconfirmed: tempUnconfirmed,
              mempool: element.mempool,
              sendable: element.sendable
            });
          }

          }
        }

        return tokenArr;
        
      })
    )
    .subscribe(responseData => {
      
      //check if changed
      if(this.lastJSON !== JSON.stringify(responseData)){
        this.tokenArr = [...responseData];
        this.lastJSON = JSON.stringify(responseData);

        // add tokens
        this.getTokenSelected();
      } 

    });
  }

  sendFunds(){
    if(this.data.address&&this.data.address!==''&&this.data.amount&&this.data.amount>0&&
    this.data.tokenid&&this.data.tokenid!==''){
      this.api.sendFunds(this.data).then((res:any)=>{
        if(res.status == true) {
          this.presentAlert('Sent successfully!', 'Info');
        } else {
          this.presentAlert(res.error, 'Insufficient funds.');
        }
      })
    } else {
      this.presentAlert('Please check the input fields', 'Error');
    }
  }

  
  /** MISC FUNCS */
  identifyPlatformToScan_Add(){
    document.addEventListener("DOMContentLoaded", function(event) { 
      //Do work
      if(this.platform.is('ios')){
        setTimeout( () => {
          window.document.querySelectorAll('ion-content')
            .forEach(element => {
              const element1 = element.shadowRoot.querySelector('style');
              element1.innerHTML = element1.innerHTML
            .replace('--background:var(--ion-background-color,#fff);', '--background: transparent');
          });
        }, 300);
      } else if(this.platform.is('android')) {
        // window.document.querySelector('ion-content').classList.add('transparentBody');
        setTimeout( () => {
        window.document.querySelectorAll('ion-content')
            .forEach(element => {
              const element1 = element.shadowRoot.querySelector('style');
              element1.innerHTML = element1.innerHTML
            .replace('--background:var(--ion-background-color,#fff);', '--background: transparent');
          });
        }, 300);
      }
    });
  }
  identifyPlatformToScan_Remove(){
    document.addEventListener("DOMContentLoaded", function(event) {
    if(this.platform.is('ios')){
      
      setTimeout( () => {
        window.document.querySelectorAll('ion-content')
          .forEach(element => {
            const element1 = element.shadowRoot.querySelector('style');
            element1.innerHTML = element1.innerHTML
          .replace('--background: transparent', '--background:var(--ion-background-color,#fff);');
        });
      }, 300);
    } else if(this.platform.is('android')) {
      // window.document.querySelector('ion-content').classList.remove('transparentBody');
      setTimeout( () => {
        window.document.querySelectorAll('ion-content')
          .forEach(element => {
            const element1 = element.shadowRoot.querySelector('style');
            element1.innerHTML = element1.innerHTML
          .replace('--background: transparent', '--background:var(--ion-background-color,#fff);');
        });
      }, 300);
    }

    });
  }
  // Display/hide mobile buttons with this..
  checkPlatform() {
    if(this.platform.is('desktop')) {
      return false;
    } else {
      return true;
    }
  }

  pasteFromClipboard() {
    if(this.platform.is('desktop') || this.platform.is('pwa')) {

      this.pasteFromPWA();

    } else {
      this.clipboard.paste().then(
        (resolve: string) => {
          this.data.address = resolve;
        },
        (reject: string) => {
          console.log('Error: ' + reject);
        }
      );
    }
  
  }

  pasteFromPWA() {
    document.addEventListener('paste', (e: ClipboardEvent) => {
      this.data.address = e.clipboardData.getData('text');
      
      e.preventDefault();
      document.removeEventListener('paste', null);
    });
    document.execCommand('paste');
  }

}


