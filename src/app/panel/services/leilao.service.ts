import { Http } from '@angular/http';
import { MXConfigSystem } from './../panel.module';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class LeilaoService {
  private api;
  constructor( private http: Http) {
    let base =  MXConfigSystem.apiURL();
    this.api = `${base}v1/leilao/`;  
   }
   findAllLote(id: number){
          const url = `${this.api}ping/${id}`;
       return this.http.get( url ).map( o => o.json().data);
   }

}
