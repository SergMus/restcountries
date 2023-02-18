import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BackButtonComponent } from './UI/buttons/back-button/back-button.component';
import { ArrowIconComponent } from './UI/buttons/icons/arrow-icon/arrow-icon.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { ButtonComponent } from './UI/buttons/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BackButtonComponent,
    ArrowIconComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    ButtonComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
})
export class AppModule {}
