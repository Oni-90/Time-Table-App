import { Component,OnInit} from '@angular/core';
import { Annee } from 'src/app/Models/annee';
import { Classe } from 'src/app/Models/classe';
import { ClasseService } from 'src/app/Services/classe.service';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {
  page: String ='liste';
  classes: Classe[]=[];
  nouvelleClasse: Classe = new Classe();
  classeSelectionnee: Classe | null = null;

  constructor(private classeService: ClasseService) {   }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.classeService.getAll().subscribe(
      (response: Classe[]) => {
        this.classes = response;
      },
      (error) => {
        console.log(error);
      }
      
    );
  }

  pageAjout(){
    this.page='ajout';
  }

  add() {
    this.classeService.add(this.nouvelleClasse).subscribe(
      (response: Classe) => {
        this.classes.push(response);
        this.nouvelleClasse = new Classe(); 
        
      },
      (error) => {
        console.log(error);
      }
    );
    this.page='liste';
  }

  pageModif(classe: Classe){
    this.classeSelectionnee= classe;
    this.page='modifier';
  }

  selectClasse(classe: Classe) {
    this.classeSelectionnee = classe;
  }

  update(id:number,classe:Classe) {
    if (this.classeSelectionnee) {
      this.classeService.update(id,classe).subscribe(
        (response: Classe) => {
          const index = this.classes.findIndex(classe => classe.id === response.id);
          if (index !== -1) {
            this.classes[index] = response;
          }
          this.classeSelectionnee = null; 
        },
        (error) => {
          console.log(error);
        }
      );
    }
    this.page='liste';
  }

  pageSup(){
    this.page='suppression'

  }

  delete(id: number) {
    this.classeService.delete(id).subscribe(
      () => {
        this.classes = this.classes.filter(classe => classe.id !== id);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getClasse(id: number) {
    this.classeService.getClasse(id).subscribe(
      (response: Classe) => {
        this.classeSelectionnee = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  annuler(){
    this.page='liste';
  }
  
}
