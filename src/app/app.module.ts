import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './shared/component/comp1/comp1.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    TestComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
