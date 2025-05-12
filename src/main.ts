import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {registerLocaleData} from '@angular/common';
import * as fr from '@angular/common/locales/fr';

// enregister localement la langue fr en défault et donc tout se qui vas être formatage en langue fr
registerLocaleData(fr.default)

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
