import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalesService {

    private baseUrl = 'http://localhost:3000/profesionales';

  constructor(private http: HttpClient) { }

  getAllProfesionales() {
    return this.http.get(this.baseUrl);
  }

  getProfesionalByName(name: string, lastName: string) {
    const url = `${this.baseUrl}/${name}/${lastName}`;
    return this.http.get(url);
  }

  addProfesional(profesional: any) {
    return this.http.post(this.baseUrl, profesional);
  }

  updateProfesionalByName(name: string, profesional: any) {
    const url = `${this.baseUrl}/${name}`;
    return this.http.put(url, profesional);
  }

  deleteProfesionalByName(name: string) {
    const url = `${this.baseUrl}/${name}`;
    return this.http.delete(url);
  }

}
