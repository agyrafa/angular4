import { Socket } from 'ng-socket-io';
import { Subscription } from 'rxjs/Rx';
import { MxBidMessage, MxBidValidate } from './../services/mx-bid.service';
import { BidComponent } from './../dialog/lote/bid/bid.component';
import { LoteService } from './../services/lote.service';
import { CardService } from './../services/card.service';
import { InformationComponent } from './../dialog/lote/information/information.component';
import { MdDialog } from '@angular/material';
import { CardBoxImageComponent } from './../card-box-image/card-box-image.component';
import { CardEntity } from './card.entity';
import { Component, OnInit, Input } from '@angular/core';
import { Lightbox } from 'angular2-lightbox';
//import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'panel-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  
})
export class CardComponent implements OnInit {
  
  @Input() card : CardEntity;
  private sub: Subscription;
  public isNewBid: any;

  private counter: number = 0;
  private counterInterval;
  public cardSelected;
  
  public fadeIn;
  public animatedCard = false;

  constructor( 
  private boximage: CardBoxImageComponent, 
  public  dialog: MdDialog,
  private service: LoteService,
  private cardService: CardService,
  private lightbox: Lightbox,
  private mxbid: MxBidMessage,
  private socket: Socket) { }

  ngOnInit() {
    

    this.socket.on('bid:create', rs => {
      let data = JSON.parse(JSON.stringify(rs));

      if(this.card.id == data.card.id){
          this.animateCard(this.card);
          // delete data.timestamp;
          // delete data.description;
          // let $timeout = false;
          // data.is_pulse = false ;
          // data.is_pulse = true ;
          // Object.assign(this.card, data);
          // this.counter = 40;
          // let  self = this;
          // clearInterval( this.counterInterval );
          // this.controllerTimeout();
       }
    });
    this.fadeIn = true;
    const self = this;
    setTimeout(function(){
      self.fadeIn = false;
    }, 1000);
    
  }

  private animateCard(card){
    console.log(card);
    this.animatedCard = true;
    const self = this;
    setTimeout(function(){
      self.animatedCard = false;
    }, 2000);
  }
  
   private controllerTimeout(){
     let self = this;     
     this.counterInterval = setInterval(function(){
       self.card.bided = !self.card.bided;
       if ( self.counter <= 0){
              clearInterval( self.counterInterval );
              self.card.bided = false;
       } 
       self.counter--;
     }, 400);


   }
  

  

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

    setCard(cardSelected){
      const self = this;
      this.cardService.dataEvent.emit(cardSelected);
      this.cardService.animateEvent.emit({animate : false});
      this.cardService.animateEvent.emit({animate : true});
      setTimeout(function(){
        self.cardService.animateEvent.emit({animate : false});
      }, 1100);
    }

 

  getBids(card){
        this.service.getBids( card.id ).then((rs)=>{
                let d = this.dialog.open(BidComponent, { 
        width:'70%',
        height:'auto',
        data:{bids: rs.json().data }});
                
        });
  }

  getPictures(card){
        this.service.getImages( card.id ).then((rs)=>{
                this.lightbox.open(rs.json().data, 0);
        });

  }

  getInfo(card){
      
      let d = this.dialog.open(InformationComponent, { 
        
        data:{id:card.id}
      });
        
  }


  closeModal(){
    console.log('close');
  }

}
