import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../../interfaces/usuario";
import {map} from "rxjs/operators";
import {RolesPorUsuario} from "../../interfaces/roles-por-usuario";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AutenticarUsuarioService {

  private nombreModelo="/Usuario/login";
  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  Login(username: String , pass: String):Observable<Usuario[]>{
    const Objeto ={
      username: username,
      password: pass
    };
    const usuarios$ = this._httpClient
      .post(environment.url + this.nombreModelo,Objeto)
      .pipe(map(u => <Usuario[]> u));
    return usuarios$;
  }

  RolesById(id: String | number):Observable<RolesPorUsuario[]>{
    const objeto ={
      id: id
    };
    const roles$ = this._httpClient
      .post(environment.url+"/RolPorUsuario/rolesUsuarioById",objeto)
      .pipe(map((u:RolesPorUsuario[])   => u ));
    return roles$;
  }
}
