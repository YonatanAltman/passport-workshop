import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { NgOptimizedImage } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, LoginFormComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
