import {NgModule} from '@angular/core';
import {FaceSnapListComponent} from './components/face-snap-list/face-snap-list.component';
import {NewFaceSnapComponent} from './components/new-face-snap/new-face-snap.component';
import {SingleFaceSnapComponent} from './components/single-face-snap/single-face-snap.component';
import {FaceSnapComponent} from './face-snap.component';

@NgModule ({
  imports: [CommonModule,
  ReactiveFormsModule,
  FaceSnapsRoutingModule],
  declarations: [
    FaceSnapComponent,
    FaceSnapListComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent,
  ],
  exports: [FaceSnapComponent,
    FaceSnapListComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent,]
})

export class FaceSnapsModule { }
