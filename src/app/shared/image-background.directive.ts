import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[imageBackground]'
})
export class ImageBackgroundDirective {

  @Input('src') imageBackground: string = null;

  constructor( private el: ElementRef, private _render: Renderer ) {}

   ngOnInit(){
     this.handler();
   }  

    handler(){
        if(this.imageBackground !== null)  
              this.el.nativeElement.style.backgroundImage =  'url("' +  this.imageBackground + '")';
        }             

}
