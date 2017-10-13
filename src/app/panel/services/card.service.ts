import { MXConfigSystem } from './../panel.module';
import { CardEntity } from '../card/card.entity';
import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from '../../app.module'
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'; 
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CardService {
  private data: any;  
  //private subject = new Subject<any>();
  protected API_URL;
  
  dataEvent: EventEmitter<any> =  new EventEmitter();
  animateEvent: EventEmitter<any> = new EventEmitter();


  constructor(private http: Http) {}

  
    
}
