import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";
import {Rol} from "../../../interfaces/rol";
import {RolesPorUsuario} from "../../../interfaces/roles-por-usuario";

@Injectable({
  providedIn: 'root'
})
export class RolRestService {

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  findAllRoles(): Observable<Rol[]> {
    const usuarios$ = this._httpClient
      .get(environment.url + "/Rol")
      .pipe(map(u => <Rol[]> u));
    return usuarios$;
  }

  findAllRolesById(id: number|string): Observable<RolesPorUsuario[]> {
    const objeto = {
      id: id
    };
    const usuarios$ = this._httpClient
      .post(environment.url + "/RolPorUsuario/rolesUsuario",objeto)
      .pipe(map(u => <RolesPorUsuario[]> u));
    return usuarios$;
  }

}
