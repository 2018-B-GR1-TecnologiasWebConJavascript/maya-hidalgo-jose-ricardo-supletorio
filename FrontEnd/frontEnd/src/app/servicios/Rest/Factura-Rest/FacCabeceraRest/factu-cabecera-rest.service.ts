import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FacturaCabecera} from "../../../../interfaces/factura-cabecera";
import {environment} from "../../../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FactuCabeceraRestService {

  private nombreModelo: string = "/FacturaCabecera";
  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  findAll(): Observable<FacturaCabecera[]> {
    return  this._httpClient
      .get(environment.url + this.nombreModelo)
      .pipe(map(r => <FacturaCabecera[]> r));
  }

  delete(id: number | string): Observable<FacturaCabecera> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <FacturaCabecera> r));
  }

  create(objeto:FacturaCabecera): Observable<FacturaCabecera> {
    const url = environment.url + this.nombreModelo;
    return this._httpClient
      .post(url, objeto)
      .pipe(map(r => <FacturaCabecera> r));
  }

  findById(id: number | string): Observable<FacturaCabecera> {
    const url = environment.url + this.nombreModelo
      + '/' + id;
    return this._httpClient
      .get(url)
      .pipe(map(r => <FacturaCabecera> r));
  }

  updateOneById(objeto:FacturaCabecera) {
    const url = environment.url + this.nombreModelo
      + '/' + objeto.id;
    const obj=<FacturaCabecera>{};
    if(objeto.total)
      obj.total= objeto.total;
    if(objeto.estado)
      obj.estado = objeto.estado;
    if(objeto.direccion)
      obj.direccion = objeto.direccion;
    if(objeto.fecha)
      obj.fecha = objeto.fecha;
    if(objeto.correoElectronico)
      obj.correoElectronico = objeto.correoElectronico;
    if(objeto.telefono)
      obj.telefono = objeto.telefono;
    if(objeto.cedulaRuc)
      obj.cedulaRuc = objeto.cedulaRuc;
    obj.nombre = objeto.nombre;
    obj.tipoPago = objeto.tipoPago;
    return this._httpClient
      .put(url, obj)
      .pipe(map(r => <object> r));
  }
}
