import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/Models/cours';
import { CoursService } from 'src/app/Services/cours.service';
import { Enseignants } from 'src/app/Models/enseignants';
import { Classe } from 'src/app/Models/classe';
import { Matiere } from 'src/app/Models/matiere';
import { Annee } from 'src/app/Models/annee';
import { ClasseService } from 'src/app/Services/classe.service';
import { EnseignantService } from 'src/app/Services/enseignants.service';
import { MatiereService } from 'src/app/Services/matiere.service';
import { AnneeService } from 'src/app/Services/annee.service';




@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  page: string = 'liste';
  cours: Cours[] = [];
  enseignants: Enseignants[] = [];
  classes: Classe[] = [];
  matieres: Matiere[] = [];
  annees: Annee[] = [];
  nouveauCours: Cours = new Cours();
  coursSelectionne: Cours | null = null;

  constructor(private coursService: CoursService, private classeService:ClasseService, private enseignantsService:EnseignantService, private matiereService:MatiereService,private anneeService: AnneeService) { }

  ngOnInit() {
    this.getAll();
    this.getEnseignants();
    this.getClasse();
    this.getMatiere();
    this.getAnnee();
    this.getAllClasses();
    this.getAllEnseigants();
    this.getAllMatiere();
  }



  getAll() {
    this.coursService.getAll().subscribe(
      (response: Cours[]) => {
        this.cours = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }


  getAllClasses() {
    this.classeService.getAll().subscribe(
      (response: Classe[]) => {
        this.classes = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getAllEnseigants() {
    this.enseignantsService.getAll().subscribe(
      (response: Enseignants[]) => {
        this.enseignants = response;
      },
      (error) => {
        console.log(error);
      }
    );
    }



  getAllMatiere() {
    this.matiereService.getAll().subscribe(
      (response: Matiere[]) => {
        this.matieres = response;
      },
      (error) => {
        console.log(error);
      }
    );
    }



  getAllAnnee() {
    this.anneeService.getAll().subscribe(
      (response: Annee[]) => {
        this.annees = response;
        console.log(this.annees);
      },
      (error) => {
        console.log(error);
      }
    );
    }

  

  getEnseignants() {
    this.coursService.getEnseignants().subscribe(
      (response: Enseignants[]) => {
        this.enseignants = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getClasse() {
    this.coursService.getClasse().subscribe(
      (response: Classe[]) => {
        this.classes = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getMatiere() {
    this.coursService.getMatiere().subscribe(
      (response: Matiere[]) => {
        this.matieres = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getAnnee() {
    this.coursService.getAnnee().subscribe(
      (response: Annee[]) => {
        this.annees = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  pageAjout() {
    this.page = 'ajout';
  }

  add() {
    console.log(this.nouveauCours);
   
    this.coursService.add(this.nouveauCours).subscribe(
      (response: Cours) => {
        this.cours.push(response);
        this.nouveauCours = new Cours();
      },
      (error) => {
        console.log(error);
      }
    );
    this.page = 'liste';
  }

  pageModif(cours: Cours) {
    this.coursSelectionne = cours;
    this.page = 'modifier';
  }

  selectCours(cours: Cours) {
    this.coursSelectionne = cours;
  }

  update() {
    if (this.coursSelectionne) {
      this.coursService.update(this.coursSelectionne.id, this.coursSelectionne).subscribe(
        (response: Cours) => {
          const index = this.cours.findIndex(cours => cours.id === response.id);
          if (index !== -1) {
            this.cours[index] = response;
          }
          this.coursSelectionne = null;
        },
        (error) => {
          console.log(error);
        }
      );
    }
    this.page = 'liste';
  }

  pageSup() {
    this.page = 'suppression';
  }

  delete(id: number) {
    this.coursService.delete(id).subscribe(
      () => {
        this.cours = this.cours.filter(cours => cours.id !== id);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getCours(id: number) {
    this.coursService.getCours(id).subscribe(
      (response: Cours) => {
        this.coursSelectionne = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  annuler() {
    this.page = 'liste';
  }
}
