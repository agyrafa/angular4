import { MxBidMessage, MxBidValidate } from './../services/mx-bid.service';
import { LeilaoService } from './../services/leilao.service';
import { CardEntity } from './../card/card.entity';
import { Component, OnInit } from '@angular/core';
import { SocketIoConfig , SocketIoModule, Socket } from 'ng-socket-io';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

@Component({
  selector: 'panel-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  public cards: any;
  protected id:number = 249;
  protected token: string;

  private prevBids = {};
  private isWS = false;

  public hasStated = false;


  constructor( private service: LeilaoService, private socket: Socket, private bid: MxBidMessage ) { }

  ngOnInit() {

    this.initializeGrid();
  }



  private initializeGrid(){
        let self = this;
        this.cards = this.service.findAllLote( this.id );
  }

}
