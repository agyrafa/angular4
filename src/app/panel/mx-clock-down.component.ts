import { Component, ElementRef, OnInit, OnDestroy, HostBinding, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
    selector: 'mx-clock-down',
    template: `
  <span>
    {{message}}
  </span>
`
})
export class MxClockDown implements OnInit, OnDestroy {

    private future: Date;
    private futureString: string;
    private diff: number;
    private $counter: Observable<number>;
    private subscription: Subscription;
    private message: string;

    @Input('timestamp') timestamp;
    @Input() showHours;
    @Input() labelForHours;
    @Input() enableClockBeforeDays: number = 1;

    constructor(elm: ElementRef) {
       // this.futureString =  this.timestamp; // elm.nativeElement.getAttribute('timestamp');
    }

    dhms(t) {
        var days, hours, minutes, seconds;
        days = Math.floor(t / 86400);
        t -= days * 86400;
        hours = Math.floor(t / 3600) % 24;
        t -= hours * 3600;
        minutes = Math.floor(t / 60) % 60;
        t -= minutes * 60;
        seconds = t % 60;

        return [
            // ('0' + days).slice(-2),
            ('0' + hours).slice(-2),
            ('0' + minutes).slice(-2),
            ('0' + seconds).slice(-2)
        ].join(':');
    }

     ngOnChanges(changes) {
         if( changes.timestamp && this.checkHours(changes.timestamp) ) {


             this.future  = new Date( changes.timestamp.currentValue );
                this.$counter = Observable.interval(1000).map((x) => {
                    this.diff = Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
                    this.diff = this.diff <= 0 ? 0 : this.diff;
                    return x;
                });

            return this.subscription = this.$counter.subscribe((x) => this.message = this.dhms(this.diff));

        }
        return this.message = this.labelForHours;
     }

     private checkHours = function(time): boolean{
         var date_finish = new Date(time.currentValue);
         var today = new Date();
         var timeDiff = Math.abs(date_finish.getTime() - today.getTime());
         var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
         if(diffDays <= this.enableClockBeforeDays  && this.showHours ) {
            return true;
         }
         return false;
     }

    ngOnInit() {
        
        
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}


















