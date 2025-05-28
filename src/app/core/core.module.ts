import {CommonModule} from '@angular/common';
import {provideHttpClient} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {httpInterceptorProviders} from './interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [
    httpInterceptorProviders,
    provideHttpClient(),
  ],

  exports: [
    HeaderComponent,
    ]
})
export class CoreModule { }
