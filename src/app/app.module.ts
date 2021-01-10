import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoyoutComponent } from './loyout/loyout.component';
import { FooterComponent } from './loyout/footer/footer.component';
import { HeaderComponent } from './loyout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoyoutComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
