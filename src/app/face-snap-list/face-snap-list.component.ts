 import {AsyncPipe, NgForOf} from '@angular/common';
 import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subject, takeUntil, tap} from 'rxjs';
import {FaceSnapComponent} from '../face-snap/face-snap.component';
import {FaceSnap} from '../models/face-snap';
import {FaceSnapsService} from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  imports: [
    FaceSnapComponent,
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit, OnDestroy {

  faceSnaps$!: Observable<FaceSnap[]>;
  private destroy$!: Subject<boolean>;

  constructor(private faceSnapsService: FaceSnapsService) {
  }

  ngOnInit(): void {

    this.destroy$ = new Subject<boolean>();

    // Création d'une variable d'un tableau de type FaceSnap []
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();

    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(console.log),
    ).subscribe();
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
