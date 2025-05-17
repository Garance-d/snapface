import {TitleCasePipe} from '@angular/common';
import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {FaceSnap} from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  // NgStyle pour importer du scss style dynamique dans l'attribut directement dans le html ts
  // NgClass pour importer du scss dans les class dynamique directement dans le html ts
  // Les pipe format l'affichage d'une donnée sans la modifier elle même
  // Upper/Lower/TileCasePipe pour changer les première lettre sans changer la donnée
  // Le mot clé de DecimalPipe à utiliser et le number par decimal
  imports: [
    TitleCasePipe,
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})

// OnInit permet d'initialiser ces proprieter en implémentant l'interface de notre component

export class FaceSnapComponent {

  // @Input permet que ma propriéter puisse être injecter depuis l'extérieur d'un component
  @Input() faceSnap!: FaceSnap;

  //Création d'attribut de classe en associant le nom de l'attribut avec son type
  // Ont utilise ! (bang) pour initialiser chaque proprieter


  constructor(private router: Router) {
  }

  // la syntaxe template literal (avec les backticks `) pour rendre plus lisible la chaîne de caractères passée à la méthode. Pour plus d'informations sur cette syntaxe ultra utile, voici les docs MDN sur les template literals.
  onViewFaceSnap() {
    this.router.navigateByUrl(`/facesnaps/${this.faceSnap.id}`);
  }
}
