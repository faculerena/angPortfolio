import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BarComponent } from './component/bar/bar.component';
import { BariconComponent } from './component/baricon/baricon.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParbodyComponent } from './component/parbody/parbody.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BarComponent,
    BariconComponent,
    ParbodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
