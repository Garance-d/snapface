import {Routes} from '@angular/router';
import {FaceSnapListComponent} from './face-snap-list/face-snap-list.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {NewFaceSnapComponent} from './new-face-snap/new-face-snap.component';
import {SingleFaceSnapComponent} from './single-face-snap/single-face-snap.component';

export const routes: Routes = [
  {path: 'facesnaps/:id', component: SingleFaceSnapComponent},
  {path: 'facesnaps', component: FaceSnapListComponent},
  {path: '', component: LandingPageComponent},
  {path: 'create', component: NewFaceSnapComponent}];
