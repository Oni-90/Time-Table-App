import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enseignants } from '../Models/enseignants';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  private apiUrl = 'http://localhost:8080/prof';


  constructor(private http: HttpClient) { }

  getAll(): Observable<Enseignants[]> {
    const url = `${this.apiUrl}/getAll`;
    return this.http.get<Enseignants[]>(url);
  }

  add(enseignant: Enseignants): Observable<Enseignants> {
    const url= `${this.apiUrl}/add`;
    return this.http.post<Enseignants>(url,enseignant);
  }

  update(id:number,enseignant: Enseignants): Observable<Enseignants> {
    const url = `${this.apiUrl}/update/${id}`;
    return this.http.put<Enseignants>(url, enseignant);
  }

  delete(id: number): Observable<void> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.http.delete<void>(url);
  }

  getEnseignants(id: number): Observable<Enseignants> {
    const url = `${this.apiUrl}/getEnseignants/${id}`;
    return this.http.get<Enseignants>(url);
  }
}

