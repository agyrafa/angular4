import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';



import { AppComponent } from './app.component';
import { AppRouterModule } from './router/app.router.module';
import { NumberFormatPipe } from './pipes/number-format.pipe';
import { ImageBackgroundDirective } from './shared/image-background.directive';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { MxPreventDefaultDirective } from './shared/mx-prevent-default.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from 'environments/environment';

export class Config {
  static api = environment.ws + '/' + environment.api;
};


const config: SocketIoConfig = { url: environment.ws, options: {

    transports:['websocket','polling', 'flashsocket']
} };



@NgModule({
  declarations: [
   AppComponent,
  ],
  imports: [
    // BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRouterModule,
    SlimLoadingBarModule.forRoot(),
    
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  exports:[SlimLoadingBarModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
