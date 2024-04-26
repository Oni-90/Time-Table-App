import { tick } from "@angular/core/testing";

export class Enseignants {
    id !:number;
    nom:String;
    prenom:String;
    telephone:String;
    email:String;
    matricule:String;
    
    constructor() {
    
        this.nom = "";
        this.prenom = "";
        this.telephone = "";
        this.matricule = "";
        this.email = "";
      }
}
