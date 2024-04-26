import { Component, OnInit } from '@angular/core';
import { Annee } from 'src/app/Models/annee';
import { AnneeService } from 'src/app/Services/annee.service';

@Component({
  selector: 'app-annee',
  templateUrl: './annee.component.html',
  styleUrls: ['./annee.component.css']
})
export class AnneeComponent implements OnInit {
  page: String ='liste';
  annees: Annee[]=[];
  nouvelleAnnee: Annee= new Annee(); 
  anneeSelectionnee: Annee | null =null;
  
  constructor(private anneeService: AnneeService){  }

  ngOnInit(): void {
      this.getAll();
  }

  getAll(){
    this.anneeService.getAll().subscribe(
      (response: Annee[])=>{
        this.annees = response;
      },
      (error) =>{
        console.log(error);
      }
    );
  }

  pageAjout(){
    this.page='ajout';
  }

  add() {
   
    this.anneeService.add(this.nouvelleAnnee).subscribe(
      (response:Annee) => {
        this.annees.push(response);
        this.nouvelleAnnee = new Annee();
      
      },
    (error) => {
      console.log(error);
    }
    );
    this.page='liste';
  }

  pageModif(annee:Annee){
    this.anneeSelectionnee= annee;
    this.page='modifier';
  }
selectAnnee(annee:Annee){
  this.anneeSelectionnee = annee;

}

update(id: number, annee: Annee) {
  if (this.anneeSelectionnee) {
    this.anneeService.update(id, annee).subscribe(
      (response: Annee) => {
          // Mise à jour de l'annee dans la liste
        const index = this.annees.findIndex(annee => annee.id === response.id);
        if (index !== -1) {
          this.annees[index] = response;
        }
        this.anneeSelectionnee = null;
      },
      error => {
        console.log(error);
      }
    );
  }
  this.page = 'liste';
}


pageSup(){
  this.page='suppression';
}
  
 

delete(id:number){
  this.anneeService.delete(id).subscribe(
    () =>{
      this.annees = this.annees.filter(annee => annee.id !==id);
    },
    (error) =>{
      console.log(error);
    }
  );
  this.page='liste';
}

annuler(){
  this.page='liste';
}

}
