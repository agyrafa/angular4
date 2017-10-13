import { MdDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-base',
  templateUrl: './dialog-base.component.html',
  styleUrls: ['./dialog-base.component.scss']
})
export class DialogBaseComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<DialogBaseComponent>) { }

  ngOnInit() {
  }

}
