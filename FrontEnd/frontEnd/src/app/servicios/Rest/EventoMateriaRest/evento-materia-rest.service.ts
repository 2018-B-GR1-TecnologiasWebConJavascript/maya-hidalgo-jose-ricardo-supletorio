import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";
import {EventoPorMateria} from "../../../interfaces/evento-por-materia";

@Injectable({
  providedIn: 'root'
})
export class EventoMateriaRestService {

  private nombreModelo: string = "/EventoPorMateria";
  constructor(
    private readonly _httpClient: HttpClient
  ) { }
  findAll(): Observable<EventoPorMateria[]> {
    return  this._httpClient
      .get(environment.url + this.nombreModelo)
      .pipe(map(r => <EventoPorMateria[]> r));
  }

  delete(id: number | string): Observable<EventoPorMateria> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <EventoPorMateria> r));
  }

  create (objeto:EventoPorMateria): Observable<EventoPorMateria> {
    const url = environment.url + this.nombreModelo;
    return this._httpClient
      .post(url, objeto)
      .pipe(map(r => <EventoPorMateria> r));
  }

  findById(id: number | string): Observable<EventoPorMateria> {
    const url = environment.url + this.nombreModelo
      + '/' + id;
    return this._httpClient
      .get(url)
      .pipe(map(r => <EventoPorMateria> r));
  }
}
