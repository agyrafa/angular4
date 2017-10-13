import { PanelComponent } from '../panel.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const childreRouters = [
    {path:'', component:PanelComponent}
]

@NgModule({
    
    imports:[
        RouterModule.forChild(childreRouters)
    ],
    exports:[ RouterModule ]

})

export class PanelRouterModule{}