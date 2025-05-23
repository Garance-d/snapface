import {Injectable} from "@angular/core";
import {map, Observable, switchMap} from 'rxjs';
import {FaceSnap} from '../models/face-snap';
import {SnapType} from '../models/snap-type.type';
import {HttpClient} from '@angular/common/http';

@Injectable({
  // Enregistre se service à la racine de l'application
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private http: HttpClient) {
  }

  // se sont les facesnap qui vienne du serveur ceux qui sotn en commentaire sont de la version dure


  // private faceSnaps: FaceSnap[] = [
  //
  //   new FaceSnap(
  //     'Archibal',
  //     'Mon meilleur ami',
  //     'https://images.pexels.com/photos/31592126/pexels-photo-31592126/free-photo-of-ecureuil-roux-sur-un-tronc-d-arbre-dans-une-foret-brumeuse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     new Date(),
  //     10
  //   ),
  //
  //   new FaceSnap(
  //     'Magasin de fleur',
  //     'Le magasin où je me suis acheter des fleurs',
  //     'https://images.pexels.com/photos/31672030/pexels-photo-31672030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     new Date(),
  //     12
  //   ).withLocation('à Londre'),
  //
  //   new FaceSnap(
  //     'Ma peinture',
  //     'Ma peinture que j\'ai faite en me baladans',
  //     'https://images.pexels.com/photos/28805811/pexels-photo-28805811/free-photo-of-peinture-panoramique-en-plein-air-a-kobyla-gora.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     new Date(),
  //     150
  //   ),
  //
  // ];

  getAllFaceSnaps(): Observable<FaceSnap[]> {

    // ont retourne un tebaleau de FaceSnap
    return this.http.get<FaceSnap[]>('http://localhost:8080/face-snaps').pipe();
  }

  getFaceSnapById(faceSnapId: string): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:8080/face-snaps/${faceSnapId}`);

  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
    return this.getFaceSnapById(faceSnapId).pipe(
      map(faceSnap => ({
        ...faceSnap,

        // mettre en paranthèse sinon ont finara avec 1 ou -1
        snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
      })),
      switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`http://localhost:8080/face-snaps/${faceSnapId}`, updatedFaceSnap))
    )
  }

  addFaceSnap(formValue: {
    title: string,
    description: string,
    imageUrl: string,
    location?: string
  }): Observable<FaceSnap> {

    return this.getAllFaceSnaps().pipe(
      map(facesnaps => [...facesnaps].sort((a, b) => a.id - b.id)),
      map(sortedFaceSnaps => sortedFaceSnaps[sortedFaceSnaps.length - 1]),
      map(previousFacesnap => ({
        ...formValue,
        snaps: 0,
        createdAt: new Date(),
        id: previousFacesnap.id + 1,
      })),
      switchMap(newFacesnap => this.http.post<FaceSnap>(`http://localhost:8080/face-snaps/`, newFacesnap))
    )
  }
}

