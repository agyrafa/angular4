import { LoteService } from './../../../services/lote.service';
import { MdDialogRef } from '@angular/material';
import { Component, OnInit, Inject, HostBinding, Input, ElementRef } from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  /**
   * @memberof InformationComponent
   */
  public data;



  constructor(public dialogRef: MdDialogRef<InformationComponent>, 
  public service: LoteService , 
  @Inject(MD_DIALOG_DATA) private mdata
  ) {    
   }

 
  ngOnInit() {
    this.service.getInformation( this.mdata.id ).then( rs => { 
      this.data = rs;
    } );
  }


  close(){
      this.dialogRef.close(this);
  }

}
