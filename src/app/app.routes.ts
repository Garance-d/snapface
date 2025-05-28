import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';

export const routes: Routes = [
  //lazy loading
  // Cette syntaxe fait en sorte qu'Angular génère un fichier JS séparé pour FaceSnapsModule, et l'application ne la charge que si l'utilisateur visite une route facesnaps/
  {path: 'facesnaps', loadChildren: () => import('./face-snap/face-snaps.module').then(m =>m.FaceSnapsModule)},

  {path: '', component: LandingPageComponent},
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {}
