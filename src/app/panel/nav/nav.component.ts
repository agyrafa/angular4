import { MxBidMessage, MxBidValidate } from './../services/mx-bid.service';
import { LeilaoService } from './../services/leilao.service';
import { NavResumeEntity } from './../services/nav-resume.entity';
import { NavService } from './../services/nav.service';
import { Component, OnInit } from '@angular/core';
import { SocketIoConfig , SocketIoModule, Socket } from 'ng-socket-io';
import { Observable } from 'rxjs/Observable'
import { Config } from '../../app.module';
import 'rxjs/add/operator/map';

@Component({
  selector: 'panel-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public resume: any;
  protected id:number = 249;
  protected token: string;

  public res;


  constructor( private service: NavService, private bid: MxBidMessage ) { }

  ngOnInit() {

    this.initializeNav();
    
  }



  private initializeNav(){
      let self = this;
      this.service.getResume( this.id ).then( rs => {
        this.res = rs;
      } );
  }

}
