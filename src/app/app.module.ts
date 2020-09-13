import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortComponent } from './port/port.component';
import { ShopComponent } from './shop/shop.component';
import { ShipComponent } from './ship/ship.component';
import { CrewMemberComponent } from './crew-member/crew-member.component';
import { JobBoardComponent } from './job-board/job-board.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrewBoardComponent } from './crew-board/crew-board.component';
import { SellComponent } from './sell/sell.component';
import { TravelMenuComponent } from './travel-menu/travel-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PortComponent,
    ShopComponent,
    ShipComponent,
    CrewMemberComponent,
	JobBoardComponent,
	CrewBoardComponent,
	SellComponent,
	TravelMenuComponent,
	
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	ReactiveFormsModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
