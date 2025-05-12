import {Component, OnInit} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {CurrencyPipe, DatePipe, DecimalPipe, NgClass, NgStyle, PercentPipe, TitleCasePipe} from '@angular/common';
import {FaceSnapsService} from '../services/face-snaps.service';
import {ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  // NgStyle pour importer du scss style dynamique dans l'attribut directement dans le html ts
  // NgClass pour importer du scss dans les class dynamique directement dans le html ts
  // Les pipe format l'affichage d'une donnée sans la modifier elle même
  // Upper/Lower/TileCasePipe pour changer les première lettre sans changer la donnée
  // Le mot clé de DecimalPipe à utiliser et le number par decimal
  imports: [
    NgClass,
    NgStyle,
    TitleCasePipe,
    DatePipe,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe,
    RouterLink,
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})

// OnInit permet d'initialiser ces proprieter en implémentant l'interface de notre component

export class SingleFaceSnapComponent implements OnInit {

  // @Input permet que ma propriéter puisse être injecter depuis l'extérieur d'un component
  faceSnap!: FaceSnap;

  //Création d'attribut de classe en associant le nom de l'attribut avec son type
  // Ont utilise ! (bang) pour initialiser chaque proprieter

  snapButtonText!: string;
  userHasSnapped!: boolean;
  myLargeNumber: number = 1234567.89;
  myLargePourcentageNumber: number = 0.8953;
  myPrice: number = 12.89;

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.preparedInterface();
    this.getFaceSnap();
  }



  // Le nom de la méthode qui commence par On signale que cette méthode répond à un événement
  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();

    }
    else {
      this.snap();
    }
  }

  snap(): void {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapButtonText ="Snaps !";
    this.userHasSnapped = true;
  }

  unSnap(): void {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.snapButtonText ="UnSnaps !";
    this.userHasSnapped = false;
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  private preparedInterface() {
    this.snapButtonText = "Oh snaps !";
    this.userHasSnapped = false;
  }

  protected readonly FaceSnap = FaceSnap;
}
