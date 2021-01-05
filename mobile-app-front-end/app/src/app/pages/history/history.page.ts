import { PopFilterComponent } from './../../components/pop-filter/pop-filter.component';
import * as moment from 'moment';
import { RouterModule } from '@angular/router';
import { ModalController, IonList, AlertController, ToastController, Config, PopoverController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HistoryService } from '../../service/history.service';
import { UserData } from './../../providers/user-data';
import { History, Minima, CompleteTransaction, Value } from 'minima';
import { map } from 'rxjs/operators';

interface TimeValue extends Value {
  time: string;
  day: string;
  month: string;
}
interface CompleteTransactionTime extends CompleteTransaction {
  values: TimeValue[];
}

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss']
})
export class HistoryPage implements OnInit {
  @ViewChild('historyList', { static: true }) historyList: IonList;
  ios: boolean;
  selectedSlide: any;
  categories = 0;
  segment = 'all';
  month: string;
  day: string;
  time: string;
  prompt = 'Fetching your history...';
  transactions: CompleteTransactionTime[] = [];
  saved: History[] = [];

  constructor(
    private historyService: HistoryService,
    public modalController: ModalController,
    public user: UserData,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public popoverController: PopoverController,
    public config: Config,
     public router: RouterModule
    ) { }
 
   ngOnInit() {
     this.pullInHistorySummary();
     this.ios = this.config.get('mode') === 'ios';
   }
 
   ionViewDidLeave() {
     this.user.storage.set('saved_transactions', this.user.saved).then((val: any) => {
 
     });
   }
 
   async saveItem(slidingItem: HTMLIonItemSlidingElement, txn: any) {
     if (this.user.hasSaved(txn.txpow.txpowid)) {
       // Prompt to remove as saved
       this.removeItem(slidingItem, txn.txpow.txpowid, 'This has already been saved');
       // saved = 'false' now
       txn.saved = 'false';
     } else {
       // Add to Saved
       this.user.addToSaved(txn.txpow.txpowid);
       // Add true attribute to this txn
       txn.saved = 'true';
 
       // close the open item
       slidingItem.close();
 
       // Create a Toast
       const toast = await this.toastCtrl.create({
         header: `Transaction with ID:${txn.txpow.txpowid.substring(0, 15) + '...'} was successfully saved.`,
         duration: 3000,
         buttons: [{
           text: 'Close',
           role: 'cancel'
         }]
       });
       await toast.present();
     }
   }
 
   async removeItem(slidingItem: HTMLIonItemSlidingElement, txn: any, title: string) {
     const alert = await this.alertCtrl.create({
       header: title,
       message: 'Would you like to remove this transaction from your saved transactions?',
       buttons: [
         {
           text: 'Cancel',
           handler: () => {
             // Cancel button clicked, do not remove the transaction
             // Close the sliding item and hide the option buttons
             slidingItem.close();
           }
         },
         {
           text: 'Remove',
           handler: () => {
             // they want to remove this transaction from their saved transactions
             this.user.removeFromSaved(txn.txpow.txpowid);
 
             // close the sliding item and hide the option buttons
             slidingItem.close();
 
           }
         }
       ]
     });
     // now present the alert on top of all other content
     await alert.present();
   }
 
   async presentFilterSettings(ev: Event) {
     const popover = await this.popoverController.create({
       component: PopFilterComponent,
       event: ev,
       translucent: true,
       animated: true
     });
     return await popover.present();
   }
 
   updateHistory() {
     if (this.historyList) {
       this.historyList.closeSlidingItems();
     }
     if (this.segment === 'saved') {
       this.filterHistory();
     } else if (this.segment === 'all') {
       this.pullInHistorySummary();
     }
 
   }
 
   filterHistory() {
     this.transactions = this.transactions.filter((txn: any) => {
       return txn.saved === 'true';
     });
   }
 
   async pullInHistorySummary() {
     // await response of history function
     await new Promise((resolve, reject) => {
       Minima.cmd('history', (res: History) => {
         // update observable
         this.historyService.updatedHistory.next(res);
         resolve(this.historyService.updatedHistory);
       });
     }).then((res: any) => {
       // rxjs operator PIPE the input observable value
       res.pipe(map((resp: History) => {
         this.transactions = [];
         resp.response.history.forEach((element: any) => {
           const name = element.values[0].name;
 
           element.values[0].time = moment(element.txpow.header.timesecs * 1000).format("H:mm");
           element.values[0].day = moment(element.txpow.header.timesecs * 1000).format("DD");
           element.values[0].month = moment(element.txpow.header.timesecs * 1000).format("MMMM");
 
           if (name.substring(0, 1) === '{') {
             element.values[0].name = JSON.parse(name);
           }
           this.transactions.push(element);
         });
         return this.transactions.reverse();
       })).subscribe((result: any) => {
         if (result.length === 0) {
           this.prompt = 'No transactions found in your history.';
         }
       });
     });
 
 }
 
 }
 