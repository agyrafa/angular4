import { DialogBaseComponent } from './../dialog-base/dialog-base.component';
import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-card-box-image',
  templateUrl: './card-box-image.component.html',
  styleUrls: ['./card-box-image.component.scss']
})
export class CardBoxImageComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }
   

   show(){
      let dialog = this.dialog.open( DialogBaseComponent );

      dialog.afterClosed().subscribe( (rs) => {

      });
   }



}
