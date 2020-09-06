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

@NgModule({
  declarations: [
    AppComponent,
    PortComponent,
    ShopComponent,
    ShipComponent,
    CrewMemberComponent,
	JobBoardComponent,
	
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
