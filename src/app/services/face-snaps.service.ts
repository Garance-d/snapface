import {Injectable} from "@angular/core";
import {FaceSnap} from '../models/face-snap';
import {SnapType} from '../models/snap-type.type';

@Injectable({
  // Enregistre se service à la racine de l'application
  providedIn: 'root'
})
export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [

    new FaceSnap(
      'Archibal',
      'Mon meilleur ami',
      'https://images.pexels.com/photos/31592126/pexels-photo-31592126/free-photo-of-ecureuil-roux-sur-un-tronc-d-arbre-dans-une-foret-brumeuse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      new Date(),
      10
    ),

    new FaceSnap(
      'Magasin de fleur',
      'Le magasin où je me suis acheter des fleurs',
      'https://images.pexels.com/photos/31672030/pexels-photo-31672030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      new Date(),
      12
    ).withLocation('à Londre'),

    new FaceSnap(
      'Ma peinture',
      'Ma peinture que j\'ai faite en me baladans',
      'https://images.pexels.com/photos/28805811/pexels-photo-28805811/free-photo-of-peinture-panoramique-en-plein-air-a-kobyla-gora.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      new Date(),
      150
    ),

  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  getFaceSnapById(faceSnapId: string): FaceSnap {
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    return foundFaceSnap;
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    faceSnap.snap(snapType);
  }

  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
    const faceSnap: FaceSnap = {
      ...formValue,
      snaps: 0,
      createdDate: new Date(),

      // on vas chercher le dernier snap et ont ajoute +1 à l'id
      id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
    };
    this.faceSnaps.push(faceSnap);
  }
}

