import {NgModule} from '@angular/core';
import {AppComponent} from '../app.component';
import {FaceSnapListComponent} from './components/face-snap-list/face-snap-list.component';
import {NewFaceSnapComponent} from './components/new-face-snap/new-face-snap.component';
import {SingleFaceSnapComponent} from './components/single-face-snap/single-face-snap.component';

const routes: Route = [

  // En fait, le routing essaie de traiter "create" comme un id de FaceSnap !
  // Pourquoi ? Eh bien parce que la route :id est avant la route create dans le tableau de Routes. Du coup, le routeur voit une route de la forme facesnaps/quelque-chose et présume que "create" correspond à un id
  {path: 'create', component: NewFaceSnapComponent},
  {path: ':id', component: SingleFaceSnapComponent},
  {path: '', component: FaceSnapListComponent},
]

@NgModule ({
  imports: [],
  declarations: [AppComponent],
  exports: [AppComponent],

})

export class AppModule { }
