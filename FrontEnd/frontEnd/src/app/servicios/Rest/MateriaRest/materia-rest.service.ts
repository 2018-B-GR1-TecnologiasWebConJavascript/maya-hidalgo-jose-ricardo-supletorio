import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";
import {Materia} from "../../../interfaces/materia";

@Injectable({
  providedIn: 'root'
})
export class MateriaRestService {

  private nombreModelo: string = "/Materia";
  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  findAll(): Observable<Materia[]> {
    return  this._httpClient
      .get(environment.url + this.nombreModelo)
      .pipe(map(r => <Materia[]> r));
  }

  delete(id: number | string): Observable<Materia> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <Materia> r));
  }

  create(objeto:Materia): Observable<Materia> {
    const url = environment.url + this.nombreModelo;
    return this._httpClient
      .post(url, objeto)
      .pipe(map(r => <Materia> r));
  }

  findById(id: number | string): Observable<Materia> {
    const url = environment.url + this.nombreModelo
      + '/' + id;
    return this._httpClient
      .get(url)
      .pipe(map(r => <Materia> r));
  }

  updateOneById(objeto:Materia) {
    const url = environment.url + this.nombreModelo
      + '/' + objeto.id;
    const obj=<Materia>{};
    obj.activo = objeto.activo;
    obj.codigo = objeto.codigo;
    obj.nombre = objeto.nombre;
    obj.descripcion = objeto.descripcion;
    obj.fechaCreacion = objeto.fechaCreacion;
    obj.numeroHorasPorSemana = objeto.numeroHorasPorSemana;
    obj.idEstudiante = objeto.idEstudiante;
    return this._httpClient
      .put(url, obj)
      .pipe(map(r => <object> r));
  }
}
