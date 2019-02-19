import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Estudiante} from "../../../interfaces/estudiante";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EstudianteRestService {

  private nombreModelo: string = "/Estudiante";
  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  findAll(): Observable<Estudiante[]> {
    return  this._httpClient
      .get(environment.url + this.nombreModelo)
      .pipe(map(r => <Estudiante[]> r));
  }

  delete(id: number | string): Observable<Estudiante> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <Estudiante> r));
  }

  create(objeto:Estudiante): Observable<Estudiante> {
    objeto.idUsuario = localStorage.getItem("Usuario");
    const url = environment.url + this.nombreModelo;
    return this._httpClient
      .post(url, objeto)
      .pipe(map(r => <Estudiante> r));
  }

  findById(id: number | string): Observable<Estudiante> {
    const url = environment.url + this.nombreModelo
      + '/' + id;
    return this._httpClient
      .get(url)
      .pipe(map(r => <Estudiante> r));
  }

  updateOneById(objeto:Estudiante) {
    const url = environment.url + this.nombreModelo
      + '/' + objeto.id;
    const obj=<Estudiante>{};
    obj.nombres = objeto.nombres;
    obj.apellidos = objeto.apellidos;
    obj.graduado = objeto.graduado;
    obj.semestreActual = objeto.semestreActual;
    obj.fechaNacimiento = objeto.fechaNacimiento;
    return this._httpClient
      .put(url, obj)
      .pipe(map(r => <object> r));
  }
}
