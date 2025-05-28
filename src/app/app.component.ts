import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {filter, interval, map, Observable, tap} from 'rxjs';
import {HeaderComponent} from './core/components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  // La norme est d'ajouter un $ à la fin du nom de toute variable qui contient un Observable.
  intervals$!: Observable<string>;

  ngOnInit() {
    this.intervals$ = interval(1000).pipe(
      filter(value => value % 3 === 0),

      // map() permet de transformer les émissions d'un Observable
      // L'opérateur modulo % divise un nombre par un autre et retourne le reste. Si un nombre entier modulo 2 est égal à 0, le nombre est pair ; sinon, il est impair.
      map(value => value % 2 === 0 ?
        `Je suis ${value} et je suis pair` :
        `Je suis ${value} et je suis impair`),

      // un effet secondaire est une fonction qui fait quelque chose avec les émissions d'un Observable sans les modifier. Pour ajouter un effet secondaire à un Observable, on utilise l'opérateur tap().
      // logger sera appeler par cette fonction
      tap(text => this.logger(text))
    );
  }
  logger(text: string) {
    console.log(`Log: ${text}`);
  }
}
