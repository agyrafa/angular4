import { NgModule } from '@angular/core';
import { Routes ,RouterModule } from '@angular/router';


export const APP_ROUTES = [
    { 
      path:':id?token=:token', 
      loadChildren:'app/panel/panel.module#PanelModule'
    }
];


@NgModule({

  imports:[
      RouterModule.forRoot( APP_ROUTES ,{ useHash: false})
  ],
  exports:[
      RouterModule
  ]
})


export class AppRouterModule {}
