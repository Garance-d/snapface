import {Component, OnInit} from '@angular/core';
import {Observable, tap} from 'rxjs';
import {FaceSnap} from '../models/face-snap';
import {
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgIf,
  NgStyle,
  PercentPipe,
  TitleCasePipe
} from '@angular/common';
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
    NgIf,
    AsyncPipe,
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})

// OnInit permet d'initialiser ces proprieter en implémentant l'interface de notre component

export class SingleFaceSnapComponent implements OnInit {

  // @Input permet que ma propriéter puisse être injecter depuis l'extérieur d'un component

  faceSnaps$!: Observable<FaceSnap>;
  buttonText!: string;

  //Création d'attribut de classe en associant le nom de l'attribut avec son type
  // Ont utilise ! (bang) pour initialiser chaque proprieter

  // snapButtonText!: string;
  // userHasSnapped!: boolean;
  myLargeNumber: number = 1234567.89;
  myLargePourcentageNumber: number = 0.8953;
  myPrice: number = 12.89;

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.preparedInterface();
    // this.getFaceSnap();
    this.buttonText = 'Snap'
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnaps$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }


  // Le nom de la méthode qui commence par On signale que cette méthode répond à un événement
  onSnap(faceSnapId: number): void {
    if (this.buttonText === 'Snap') {
      this.faceSnaps$ = this.faceSnapsService.getFaceSnapById(faceSnapId,'snap').pipe(
        tap(() => this.buttonText = 'UnSnap')
      )
    } else {
      this.faceSnaps$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(() =>
          this.buttonText = 'Snap'
        ));
    }
  }
}
