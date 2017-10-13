import { MXConfigSystem } from './../panel.module';
import { NavResumeEntity } from './nav-resume.entity';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from '../../app.module'
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'; 

@Injectable()
export class NavService {
  data: any;  

  protected API_URL;

  constructor(private http: Http) {
       let base =  MXConfigSystem.apiURL();
       this.API_URL = `${base}leilao/resume`;  
  }



   getResume( id: number ): Promise<NavResumeEntity>{
       const url = `${this.API_URL}/${id}`;
       return this.http.get( url ).toPromise().then( rs => rs.json().data as NavResumeEntity );
   }
  

}
