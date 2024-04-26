import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template.component';
import { ClasseComponent } from './classe/classe.component';
import { MatiereComponent } from './matiere/matiere.component';
import { AnneeComponent } from './annee/annee.component';
import { EnseigantsComponent } from './enseigants/enseigants.component';
import { CoursComponent } from './cours/cours.component';

const routes: Routes = [{ path: '', component: TemplateComponent ,
children:[
  {path:'classe', component:ClasseComponent},
  {path:'matiere', component:MatiereComponent},
  {path:'annee', component:AnneeComponent},
  {path:'prof', component:EnseigantsComponent},
  {path:'cours', component:CoursComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
