import { Directive, HostListener  } from '@angular/core';
// import $ from 'jquery';
@Directive({
  selector: '[mxPreventDefault]'
})
export class MxPreventDefaultDirective {

  @HostListener("click", ["$event"])


  public onClick(event: any): void
    {  

      // console.log('click...');
        // event.stopPropagation();
        event.preventDefault();
        
    }

}
