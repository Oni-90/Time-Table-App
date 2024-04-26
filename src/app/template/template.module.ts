import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';
import { CoursComponent } from './cours/cours.component';
import { AnneeComponent } from './annee/annee.component';
import { MatiereComponent } from './matiere/matiere.component';
import { ClasseComponent } from './classe/classe.component';
import { EnseigantsComponent } from './enseigants/enseigants.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TemplateComponent,
    CoursComponent,
    AnneeComponent,
    MatiereComponent,
    ClasseComponent,
    EnseigantsComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
  
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    ButtonModule,
    FormsModule,
    HttpClientModule
    
  ]
})
export class TemplateModule { }
