import { Component, OnInit, Inject, HostBinding, Input, ElementRef } from '@angular/core';

import { MD_DIALOG_DATA } from '@angular/material';
import { MdDialogRef } from '@angular/material';


@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.scss']
})
export class BidComponent implements OnInit {

  public bids:any;
  constructor(public dialogRef: MdDialogRef<BidComponent>,   
  
  @Inject(MD_DIALOG_DATA) private data) { }

  ngOnInit() {
       this.bids = this.data.bids;     
  }
  
  close(){
      this.dialogRef.close(this);
  }
}



@Component({
  selector: 'bid-item',
  template:`
            <table class="bid-table">
            <thead>
                <tr>
                    <th>Login</th>
                    <th>Data</th>
                    <th>Maior Lance</th>
                    <th>Comissão</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody *ngIf="data.length > 0">
                <tr  *ngFor="let item of data">
                    <td>{{item?.user}}</td>
                    <td>{{item?.date}}</td>
                    <td>{{item?.price}}</td>
                    <td>{{item?.tax}}</td>
                    <td>{{item?.total}}</td>
                </tr>
            </tbody>
        </table>`,
        styles:[`
        .bid-table {
            width: 100%;
            border-collapse: collapse;
          
        }       
        tbody {
            tr:nth-child(odd) {
                background: #ddd;
            }
         }
       
        td, th
        {
            border-bottom: 1px solid #ddd;
            padding: 0.2rem;
            text-align: left;
            font-size:95%;
        }
         th{
         text-transform:uppercase;
         font-size:85%;
       } 
            
        `]
  
})

export class BidItem{
    
    @Input() data: any;

}
