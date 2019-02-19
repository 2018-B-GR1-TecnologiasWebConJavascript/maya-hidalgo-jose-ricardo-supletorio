import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Evento} from "../../../interfaces/evento";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";
import {EventoPorMateria} from "../../../interfaces/evento-por-materia";

@Injectable({
  providedIn: 'root'
})
export class EventoRestService {

  private nombreModelo: string = "/Eventos";
  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  create(objeto:Evento): Observable<Evento> {
    const url = environment.url + this.nombreModelo;
    return this._httpClient
      .post(url, objeto)
      .pipe(map(r => <Evento> r));
  }

  findById(id: number | string): Observable<Evento> {
    const url = environment.url + this.nombreModelo
      + '/' + id;
    return this._httpClient
      .get(url)
      .pipe(map(r => <Evento> r));
  }

  findAll(): Observable<Evento[]> {
    return  this._httpClient
      .get(environment.url + this.nombreModelo)
      .pipe(map(r => <Evento[]> r));
  }

  findhijosEvento(): Observable<EventoPorMateria[]> {
    return  this._httpClient
      .get(environment.url + "/EventoPorMateria")
      .pipe(map(r => <EventoPorMateria[]> r));
  }
}
