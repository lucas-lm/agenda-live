import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs'
import { MatCardModule } from '@angular/material/card'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ListLiveComponent } from './views/home/list-live/list-live.component';
import { LocalDateTimePipe } from './shared/pipe/local-date-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListLiveComponent,
    LocalDateTimePipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [
    Title,
    LocalDateTimePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
