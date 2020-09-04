import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortComponent } from './port/port.component';
import { ShopComponent } from './shop/shop.component';
import { ShipComponent } from './ship/ship.component';
import { CrewMemberComponent } from './crew-member/crew-member.component';

@NgModule({
  declarations: [
    AppComponent,
    PortComponent,
    ShopComponent,
    ShipComponent,
    CrewMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
