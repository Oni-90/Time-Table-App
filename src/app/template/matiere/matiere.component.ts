import { Component,OnInit } from '@angular/core';
import { Matiere } from 'src/app/Models/matiere';
import { MatiereService } from 'src/app/Services/matiere.service';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent {

  page: String = 'liste';
  matieres: Matiere[] = []; 
  nouvelleMatiere: Matiere = new Matiere(); 
  matiereSelectionnee: Matiere | null = null; 
  constructor(private matiereService: MatiereService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.matiereService.getAll().subscribe(
      (response: Matiere[]) => {
        this.matieres = response;
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
    this.matiereService.add(this.nouvelleMatiere).subscribe(
      (response: Matiere) => {
        this.matieres.push(response);
        this.nouvelleMatiere = new Matiere(); 
      },
      (error) => {
        console.log(error);
      }
    );
    this.page = 'liste';
  }

  pageModif(matiere: Matiere) {
    this.matiereSelectionnee = matiere;
    this.page = 'modifier';
  }

  selectMatiere(matiere: Matiere) {
    this.matiereSelectionnee = matiere;
  }

  update(id:number,matiere:Matiere) {
    if (this.matiereSelectionnee) {
      this.matiereService.update(id,matiere).subscribe(
        (response: Matiere) => {
          // Mise à jour de la matiere dans la liste
          const index = this.matieres.findIndex(matiere => matiere.id === response.id);
          if (index !== -1) {
            this.matieres[index] = response;
          }
          this.matiereSelectionnee = null; 
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
    this.matiereService.delete(id).subscribe(
      () => {
        this.matieres = this.matieres.filter(matiere => matiere.id !== id);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getMatiere(id: number) {
    this.matiereService.getMatiere(id).subscribe(
      (response: Matiere) => {
        this.matiereSelectionnee = response;
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
