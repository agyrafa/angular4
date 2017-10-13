import { MxBidMessage, MxBidValidate } from './../services/mx-bid.service';
import { SingleCardService } from './../services/single-card.service';
import { CardEntity } from './../card/card.entity';
import { CardService } from './../services/card.service';
import { Component, OnInit, Input, animate } from '@angular/core';
import { SocketIoConfig , SocketIoModule, Socket } from 'ng-socket-io';
import { Observable } from 'rxjs/Observable';
import { Config } from '../../app.module';
import { CurrencyPipe } from '@angular/common';
import 'rxjs/add/operator/map';

import { JwtHelper, AuthHttp, AuthConfig } from 'angular2-jwt';


import { Router } from '@angular/router';

@Component({
  selector: 'panel-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss'],
  providers: [CurrencyPipe]
})
export class SingleCardComponent implements OnInit {

  @Input() card : CardEntity;
  public resume: any;
  protected token: string;

  public cardSelected;
  public firstCard;
  public isClickedOnce = true;
  protected id:number = 222;

  public res;
  public info;
  public animated = false;

  public jwtHelper: JwtHelper = new JwtHelper();
  public user;

  constructor( private service: CardService, 
    private SingleCardService: SingleCardService, 
    private bid: MxBidMessage, 
    private router: Router,
    private socket: Socket) { }

  ngOnInit() {
    this.service.dataEvent.subscribe(data => {
      this.cardSelected = data;
    });
    this.service.animateEvent.subscribe(event => {
      this.animated = event.animate;
    });

    /* get url token */
    var url = this.router.url;
    var tk = url.split('?')[1].substring(6);
    
    this.user = this.jwtHelper.decodeToken(tk);

    this.initializeSingleCard();
  }

  private disabledBid(obj){
    this.isClickedOnce = !this.isClickedOnce;
  }

  private initializeSingleCard(){
    let self = this;
    this.SingleCardService.getCards(this.id).then( rs => {
      this.firstCard = rs[0];
      this.cardSelected = this.firstCard;
    } );;
  }

  public confirmBid(card){
    this.socket.emit('bid:create', {
      message: 'lance',
      card: card
    });
  }

  // multiplicação nSocketo lance automático
  public updateBid(row, multiply) {
      // if (this.checkAutomatic(row) || ctrl.profile.id == 0 || !this.checkHability(row)) return;
      // if (ctrl.multiplyBid >= 10) {
      //     growl.warning('Atenção o limite maximo de lances é <strong>(10)</strong>.', { ttl: 5000, disableCountDown: true });
      //     return;
      // }
      // ctrl.multiplyBid += multiply;
      var currentBidLote = Math.floor(parseFloat(row.price)) + (Math.floor(parseFloat(row.inc)) * multiply);
      currentBidLote = currentBidLote * 1000;
      // ctrl.isNotReset = false;
      // ctrl.currentBid = currentBidLote;
      // ctrl.cardSelected.isAutomatic = true;
  }

}
