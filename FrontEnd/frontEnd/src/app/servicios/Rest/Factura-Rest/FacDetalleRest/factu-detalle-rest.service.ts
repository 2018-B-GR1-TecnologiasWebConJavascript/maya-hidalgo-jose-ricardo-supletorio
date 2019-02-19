import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {map} from "rxjs/operators";
import {FacturaDetalle} from "../../../../interfaces/factura-detalle";

@Injectable({
  providedIn: 'root'
})
export class FactuDetalleRestService {

  private nombreModelo: string = "/FacturaDetalle";
  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  findAll(): Observable<FacturaDetalle[]> {
    return  this._httpClient
      .get(environment.url + this.nombreModelo)
      .pipe(map(r => <FacturaDetalle[]> r));
  }

  delete(id: number | string): Observable<FacturaDetalle> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <FacturaDetalle> r));
  }

  create(objeto:FacturaDetalle): Observable<FacturaDetalle> {
    console.log(objeto);
    const url = environment.url + this.nombreModelo;
    return this._httpClient
      .post(url, objeto)
      .pipe(map(r => <FacturaDetalle> r));
  }

  findById(id: number | string): Observable<FacturaDetalle> {
    const url = environment.url + this.nombreModelo
      + '/' + id;
    return this._httpClient
      .get(url)
      .pipe(map(r => <FacturaDetalle> r));
  }
}
