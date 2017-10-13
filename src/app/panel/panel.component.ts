import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  constructor(private http: Http, private slimLoading: SlimLoadingBarService) {


               

   }

  ngOnInit() {
  }

}
