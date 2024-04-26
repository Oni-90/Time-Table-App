import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cours } from '../Models/cours';


@Injectable({
  providedIn: 'root'
})
export class CoursService {
  private apiUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) { }

  getEnseignants(): Observable<any> {
    return this.http.get(`${this.apiUrl}/prof/getAll`);
  }

  getClasse(): Observable<any> {
    return this.http.get(`${this.apiUrl}/salle/getAll`);
  }

  getMatiere(): Observable<any> {
    return this.http.get(`${this.apiUrl}/matiere/getAll`);
  }

  getAnnee(): Observable<any> {
    return this.http.get(`${this.apiUrl}/annee/getAll`);
  }

  getAll(): Observable<Cours[]> {
    const url = `${this.apiUrl}/cours/getAll`; 
    return this.http.get<Cours[]>(url);
  }

  add(cours: Cours): Observable<any> {
    const url=`${this.apiUrl}/cours/add`;
    return this.http.post<Cours>(url, cours);
  }

  update(id:number,cours:Cours): Observable<Cours>{
    const url=`${this.apiUrl}/cours/update/${id}`;
    return this.http.put<Cours>(url,cours);
  }

  delete(id:number): Observable<void>{
    const url=`${this.apiUrl}cours/delete/${id}`;
    return this.http.delete<void>(url)
  }

  getCours(id:number): Observable<Cours>{
    const url=`${this.apiUrl}cours/getCours/${id}`;
    return this.http.get<Cours>(url);
  }
}