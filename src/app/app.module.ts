import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, AboutComponent],
  imports: [BrowserModule, AppRoutingModule, AnimateOnScrollModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
