import { Annee } from "./annee";
import { Classe } from "./classe";
import { Enseignants } from "./enseignants";
import { Matiere } from "./matiere";

export class Cours {
    id !: number;
    matiere: Matiere;
    enseignant: Enseignants;
    classe: Classe;
    annee: Annee;
  
    constructor() {
      this.matiere = new Matiere();
      this.enseignant = new Enseignants();
      this.classe = new Classe();
      this.annee = new Annee();
    }
    
    
  }
