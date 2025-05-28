import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LandingPageComponent} from './landing-page.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LandingPageComponent,
    FormsModule,
  ],
  exports: [LandingPageComponent,]
})
export class LandingPageModule { }
