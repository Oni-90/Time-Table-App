import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Matiere } from '../Models/matiere';
import { UrlHandlingStrategy } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class MatiereService {
  private apiUrl = 'http://localhost:8080/matiere';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Matiere[]> {
    const url= `${this.apiUrl}/getAll`;
    return this.http.get<Matiere[]>(url);
  }

  add(matiere: Matiere): Observable<Matiere> {
    const url= `${this.apiUrl}/add`;
    return this.http.post<Matiere>(url, matiere);
  }

  update(id:number,matiere: Matiere): Observable<Matiere> {
    const url = `${this.apiUrl}/update/${id}`;
    return this.http.put<Matiere>(url, matiere);
  }

  delete(id: number): Observable<void> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.http.delete<void>(url);
  }

  getMatiere(id: number): Observable<Matiere> {
    const url = `${this.apiUrl}/getMatiere/${id}`;
    return this.http.get<Matiere>(url);
  }
}