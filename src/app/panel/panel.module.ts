import { MxBidMessage } from './services/mx-bid.service';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdDialog } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { SocketIoConfig , SocketIoModule } from 'ng-socket-io';


import { LoteService } from './services/lote.service';
import { LeilaoService } from './services/leilao.service';
import { NavService } from './services/nav.service';
import { SingleCardService } from './services/single-card.service';
import { CardService } from './services/card.service';
import { GridComponent } from './grid/grid.component';
import { NavComponent } from './nav/nav.component';
import { SingleCardComponent } from './single-card/single-card.component';
import { CardComponent } from './card/card.component';
import { NumberFormatPipe } from './../pipes/number-format.pipe';
import { ImageBackgroundDirective } from './../shared/image-background.directive';
import { MxPreventDefaultDirective } from './../shared/mx-prevent-default.directive';
import { PanelComponent } from './panel.component';
import { PanelRouterModule } from './router/panel.router.module';
import { MxClockDown } from './mx-clock-down.component';
import { CardBoxImageComponent } from './card-box-image/card-box-image.component';
import { DialogBaseComponent } from './dialog-base/dialog-base.component';
import { InformationComponent } from './dialog/lote/information/information.component';
import { LightboxModule } from 'angular2-lightbox';
import { BidComponent, BidItem } from './dialog/lote/bid/bid.component';

import { environment } from 'environments/environment';

export class MXConfigSystem{
     
     private static API_URL:string = environment.ws;
     private static VERSION:string = 'v1';
     /**
      * 
      * 
      * @static
      * @returns 
      * 
      * @memberof MXConfigSystem
      */
     static apiURL(){
       // let api = `${MXConfigSystem.API_URL}/api/${MXConfigSystem.VERSION}/`;
       let api = `${MXConfigSystem.API_URL}/api/`;
       return api;
     }
     
     /**
      * 
      * 
      * @static
      * @returns 
      * 
      * @memberof MXConfigSystem
      */
     static wsURL() {
           return  `${MXConfigSystem.API_URL}`;
     }      

}


const config: SocketIoConfig = { url: MXConfigSystem.wsURL() , options: {transports:['websocket','polling', 'flashsocket']} };

@NgModule({
  imports: [
    CommonModule,
    PanelRouterModule,
    SlimLoadingBarModule.forRoot(),
    MaterialModule,
    HttpModule,
    LightboxModule
   
  ],
  declarations: [
    PanelComponent,
    GridComponent,
    NavComponent,
    SingleCardComponent,
    CardComponent,
    ImageBackgroundDirective,
    NumberFormatPipe,    
    CardBoxImageComponent,    
    DialogBaseComponent,  
    InformationComponent, 
    MxPreventDefaultDirective,
    BidComponent,
    BidItem,
    MxClockDown,
        
  ],
  providers:[
    MdDialog,
    CardBoxImageComponent,
    LoteService,
    LeilaoService,
    MxBidMessage,
    NavService,
    SingleCardComponent,
    CardService,
    SingleCardService
    ],
  entryComponents:[DialogBaseComponent, InformationComponent, BidComponent]
})
export class PanelModule { 

          

}


