import {SnapType} from './snap-type.type';

export class FaceSnap {

  // Le ? dit qu'il est possible qu'il n'y est est pas de valeure pour chaque instance,
  location?: string;
  id: string;

  // Cette version est la même que celle si puisque se seront des propriétés qui seront initilisées par les arguments mis dans le constructeur
  /*
  title: string;
  constructor(title: string) {
  this.title = title;
  */

  constructor(public title: string,
              public description: string,
              public imageUrl: string,
              public createdAt: Date,
              public snaps: number,
  ) {

    //le Web Crypto API pour générer un identifiant universellement unique (UUID).
    // Un UUID est une chaîne de caractères suffisamment long pour (pratiquement) garantir son unicité universelle
    this.id = crypto.randomUUID().substring(0, 8);

  }

  addSnap(): void {
    this.snaps++;
  }

  removeSnap(): void {
    this.snaps--;
  }

  snap(snapType: SnapType){
    if(snapType ==='snap'){
      this.addSnap();
    } else if(snapType ==='unsnap'){
      this.removeSnap();
    }
  }

  setLocation(location: string): void {
    this.location = location;
  }

  withLocation(location: string): FaceSnap {
    this.setLocation(location);
    return this;
  }

}
