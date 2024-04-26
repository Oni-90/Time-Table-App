import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Annee } from '../Models/annee';
@Injectable({
  providedIn: 'root'
})
export class AnneeService {
  private apiUrl = 'http://localhost:8080/annee';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Annee[]> {
    const url= `${this.apiUrl}/getAll`;
    return this.http.get<Annee[]>(url);
  }

  add(annee: Annee): Observable<Annee> {
    const url= `${this.apiUrl}/add`;
    return this.http.post<Annee>(url,annee);
  }

  update(id:number,annee: Annee): Observable<Annee> {
    const url = `${this.apiUrl}/update/${id}`;
    return this.http.put<Annee>(url, annee);
  }

  delete(id: number): Observable<void> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.http.delete<void>(url);
  }

  getAnnee(id: number): Observable<Annee> {
    const url = `${this.apiUrl}/getAnnne/${id}`;
    return this.http.get<Annee>(url);
  }
}