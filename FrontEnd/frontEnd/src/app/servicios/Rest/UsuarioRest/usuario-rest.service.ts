import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {environment} from "../../../../environments/environment";
import {Usuario} from "../../../interfaces/usuario";
import {RolesPorUsuario} from "../../../interfaces/roles-por-usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioRestService {

  private nombreModelo: string = '/Usuario';
  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  findAll(): Observable<Usuario[]> {
    const usuarios$ = this._httpClient
      .get(environment.url + this.nombreModelo)
      .pipe(map(u => <Usuario[]> u));
    return usuarios$;
  }

  findOneById(id: number | string): Observable<Usuario> {
    const url = environment.url + this.nombreModelo
      + '/' + id;
    return this._httpClient
      .get(url)
      .pipe(map(u => <Usuario> u));
  }

  agregarRolUser(idRol: number |string, idUsuario: number|string):Observable<RolesPorUsuario>{
    const url = environment.url + "/RolesPorUsuario";
    const objeto = {
      idRol: idRol,
      idUsuario: idUsuario
    }
    return this._httpClient
      .post(url,objeto)
      .pipe(
        map(r => <RolesPorUsuario>r)
      );
  }

  eliminarrolid(id: number |string) {
    const url = environment.url + "/RolesPorUsuario"
      + `/${id}`;
    console.log(url);
    this._httpClient
      .delete(url)
      .subscribe( u=> u);
  }

  eliminar(id: number |string):Observable<Usuario>{
    const asd = this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(
        map(u => <Usuario>u)
      );
    return asd;
  }

  create(usuario:Usuario): Observable<Usuario> {
    const url = environment.url + this.nombreModelo;
    return this._httpClient
      .post(url, usuario)
      .pipe(map(r => <Usuario> r));
  }

}
