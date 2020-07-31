import { Tokens } from '../models/tokens.model';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable, ChangeDetectorRef } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';
import { map, concatMap, merge } from 'rxjs/operators';
import { timer } from 'rxjs/Observable/timer';

declare var Minima: any;
@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  public polledBalance$: Observable<any>;
  manualRefresh = new Subject();
  private host = '';
  private loader: any = null;

  constructor(private http: HttpClient, private ref: ChangeDetectorRef) {
    this.host = environment.defaultNode;
    this.host = this.getHost();
   }
   
  /** API CALLS */
  giveMe50(): Observable<{ status: boolean, minifunc: string, response: any}> {
    let apiUrl = this.host + 'gimme50';
    
    return this.http.get<{ status: boolean, minifunc: string, response: any}>(apiUrl);
  }

  getBalance(): Observable<Tokens[]> {
    return this.request('balance');
  }

  private getHost() {
    if (localStorage.getItem('minima_host') == null) {
      localStorage.setItem('minima_host', this.host);
      return this.host;
    } else {
      return localStorage.getItem('minima_host');
    }
  }

  private request(route: any) {
    //let apiUrl = this.host + route; // this.host+'route' = "127.0.0.1:8999/'balance'"
    //let balance$ = this.http.get(apiUrl);

    // create custom observable to talk with minima.js
    const balanceObservable = Observable.create(observer => {

      observer.next(Minima.balance);

      //console.log(Minima.balance);

    });

    let balance$ = balanceObservable;
    
    return this.polledBalance$ = timer(0, 2000).pipe(
      
      merge(this.manualRefresh),
      concatMap(_ => balance$),
      map((res: Tokens[]) => res)

    );
  }

  // take in tokenArr and the element you'd like to add to front of array
  update = (a : Tokens[], e) => { var i = a.findIndex(o => o.tokenid === e);
    i > 0 ? a.splice(0,0,a.splice(i,1)[0]) 
          : i && a.splice(0,0,e);
    (a.length > 5) && a.length--
    return a;  
  };

}
