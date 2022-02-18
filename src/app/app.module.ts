import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs'
import { MatCardModule } from '@angular/material/card'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ListLiveComponent } from './views/home/list-live/list-live.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListLiveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
