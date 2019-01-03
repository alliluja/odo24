import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { httpInterceptorProviders } from './http-interceptors';
// модули
import { AppRoutingModule } from './app.routing';
import { ServiceModule } from './services/service.module';
import { HomeModule } from './home/home.module';

// сервисы
import { ProfileService } from './_services/profile.service';
import { MomentDateAdapter} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import {
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
} from '@angular/material';

export const DATE_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { SelectedAvtoModule } from './shared/selected-avto/selected-avto.module';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SelectedAvtoModule,
    ServiceModule,
    HomeModule,
  ],
  providers: [
    ProfileService,
    AuthGuard,
    httpInterceptorProviders,
    {provide: LOCALE_ID, useValue: 'ru-RU'},
    {provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
  ],
  exports : [
    SelectedAvtoModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
