import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classe } from '../Models/classe';
@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  private apiUrl = 'http://localhost:8080/salle';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Classe[]> {
    const url = `${this.apiUrl}/getAll`; 
    return this.http.get<Classe[]>(url);
  }

  add(classe: Classe): Observable<Classe> {
    const url = `${this.apiUrl}/add`;
    return this.http.post<Classe>(url, classe);
  }

  update(id:number,classe: Classe): Observable<Classe> {
    const url = `${this.apiUrl}/update/${id}`;
    return this.http.put<Classe>(url, classe);
  }

  delete(id: number): Observable<void> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.http.delete<void>(url);
  }

  getClasse(id: number): Observable<Classe> {
    const url = `${this.apiUrl}/getClasse/${id}`;
    return this.http.get<Classe>(url);
  }
}