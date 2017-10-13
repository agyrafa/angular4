import { MXConfigSystem } from './../panel.module';
import { SingleCardEntity } from './single-card.entity';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from '../../app.module'
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'; 

@Injectable()
export class SingleCardService {
  data: any;  

  protected API_URL;

  constructor(private http: Http) {
       let base =  MXConfigSystem.apiURL();
       this.API_URL = `${base}v1/leilao/`;
  }



   getCards( id: number ): Promise<SingleCardEntity>{
       const url = `${this.API_URL}ping/${id}`;
       return this.http.get( url ).toPromise().then( rs => rs.json().data as SingleCardEntity );
   }
  

}
