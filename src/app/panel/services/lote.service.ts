import { MXConfigSystem } from './../panel.module';
import { LoteInformationEntity } from './lote-information.entity';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'; 

@Injectable()
export class LoteService {
  data: any;  

  protected API_URL:string;

  constructor(private http: Http) {
       let base =  MXConfigSystem.apiURL();
       this.API_URL = `${base}v1/panel/lote/`;  
  }



   getInformation( id: number ): Promise<LoteInformationEntity>{
       const url = `${this.API_URL}info/${id}`;
       return this.http.get( url ).toPromise().then( rs => rs.json().data as LoteInformationEntity );
   }


   getImages( id: number ) {
       const url = `${this.API_URL}image/${id}`;
       return this.http.get( url ).toPromise();
   }

   getBids( id: number ) {
       const url = `${this.API_URL}bid/${id}`;
       return this.http.get( url ).toPromise();
   }

  

}
