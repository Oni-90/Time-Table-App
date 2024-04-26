import { Component , OnInit} from '@angular/core';
import { Enseignants } from 'src/app/Models/enseignants';
import { EnseignantService } from 'src/app/Services/enseignants.service';

@Component({
  selector: 'app-enseigants',
  templateUrl: './enseigants.component.html',
  styleUrls: ['./enseigants.component.css']
})
export class EnseigantsComponent {
  page: String = 'liste';
  enseignants: Enseignants[] = [];
  nouvelEnseignant: Enseignants = new Enseignants();
  enseignantSelectionne: Enseignants | null = null;

  constructor(private enseignantService: EnseignantService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.enseignantService.getAll().subscribe(
      (response: Enseignants[]) => {
        this.enseignants = response;
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
    this.enseignantService.add(this.nouvelEnseignant).subscribe(
      (response: Enseignants) => {
        this.enseignants.push(response);
        this.nouvelEnseignant = new Enseignants();

      },
      (error) => {
        console.log(error);
      }
    );
    this.page = 'liste';
  }

  pageModif(enseignant: Enseignants) {
    this.enseignantSelectionne = enseignant;
    this.page = 'modifier';
  }

  selectEnseignant(enseignant: Enseignants) {
    this.enseignantSelectionne = enseignant;
  }

  update(id:number,enseigants:Enseignants) {
    if (this.enseignantSelectionne) {
      this.enseignantService.update(id,enseigants).subscribe(
        (response: Enseignants) => {
          // Mise à jour de l'enseignant dans la liste
          const index = this.enseignants.findIndex(enseignant => enseignant.id === response.id);
          if (index !== -1) {
            this.enseignants[index] = response;
          }
          this.enseignantSelectionne = null;
        },
        (error) => {
          console.log(error);
        }
      );
    }
    this.page = 'liste';
  }

  pageSup() {
    this.page = 'suppression'

  }

  delete(id: number) {
    this.enseignantService.delete(id).subscribe(
      () => {
        this.enseignants = this.enseignants.filter(enseignant => enseignant.id );
      },
      (error) => {
        console.log(error);
      }
    );
    this.page='liste';
  }

  getEnseignant(id: number) {
    this.enseignantService.getEnseignants(id).subscribe(
      (response: Enseignants) => {
        this.enseignantSelectionne = response;
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
