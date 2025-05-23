import {AsyncPipe, DatePipe, NgIf, UpperCasePipe} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {map, Observable, tap} from 'rxjs';
import {FaceSnap} from '../models/face-snap';
import {FaceSnapsService} from '../services/face-snaps.service';

@Component({
  selector: 'app-new-face-snap',
  imports: [
    ReactiveFormsModule,
    UpperCasePipe,
    DatePipe,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './new-face-snap.component.html',
  styleUrl: './new-face-snap.component.scss'
})
export class NewFaceSnapComponent implements OnInit {

  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;
  urlRegex!: RegExp;

  constructor(private formBuilder: FormBuilder,
              private faceSnapsService: FaceSnapsService,
              private router: Router) { }

  ngOnInit() {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location: [null],
    },
      {
        // S'affiche en s'actualisant
        updateOn: 'blur',
      });
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdAt: new Date(),
        id: 0,
        snaps: 0,
      }))
    );
  }

  onSubmitForm() {
    this.faceSnapsService.addFaceSnap(this.snapForm.value).pipe(
      tap(()=>this.router.navigateByUrl('/facesnap')),
    ).subscribe();
  }
}
