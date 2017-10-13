import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  
    private sub: any;

     constructor( private router: Router, private slimLoader: SlimLoadingBarService,) {
        // We listen the position's changes
        
        // Listen the navigation events to start or complete the slim bar loading
        this.sub = this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.slimLoader.height = '3px';
                this.slimLoader.color = '#FFA600';
                this.slimLoader.start();

            } else if ( event instanceof NavigationEnd ||
                        event instanceof NavigationCancel ||
                        event instanceof NavigationError) {
                this.slimLoader.complete();
            }
        }, (error: any) => {
            this.slimLoader.complete();
        });
     }    


  ngOnDestroy(): any {
     this.sub.unsubscribe();
  }
}
