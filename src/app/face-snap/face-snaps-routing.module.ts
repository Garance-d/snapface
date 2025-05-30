import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from '../app.component';
import {AuthGuard} from '../core/guards/auth.guard';
import {FaceSnapListComponent} from './components/face-snap-list/face-snap-list.component';
import {NewFaceSnapComponent} from './components/new-face-snap/new-face-snap.component';
import {SingleFaceSnapComponent} from './components/single-face-snap/single-face-snap.component';

const routes: Routes = [

  // En fait, le routing essaie de traiter "create" comme un id de FaceSnap !
  // Pourquoi ? Eh bien parce que la route :id est avant la route create dans le tableau de Routes. Du coup, le routeur voit une route de la forme facesnaps/quelque-chose et présume que "create" correspond à un id
  // Dans la configuration d'une route, canActivate prend un tableau, même s'il n'y a qu'un seul guard.
  {path: 'create', component: NewFaceSnapComponent, canActivate: [AuthGuard]},
  {path: ':id', component: SingleFaceSnapComponent, canActivate: [AuthGuard]},
  {path: '', component: FaceSnapListComponent, canActivate: [AuthGuard]},
]

@NgModule ({
  imports: [
    RouterModule.forChild(routes),
    AppComponent
  ],
  declarations: [],
  exports: [AppComponent, RouterModule],

})

export class FaceSnapRoutingModule { }
