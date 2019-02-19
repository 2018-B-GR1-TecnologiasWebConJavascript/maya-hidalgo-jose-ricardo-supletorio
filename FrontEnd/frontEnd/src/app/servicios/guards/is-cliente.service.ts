import { Injectable } from '@angular/core';
import {AutenticarUsuarioService} from "../autenticarse/autenticar-usuario.service";
import {CanActivate, Router} from "@angular/router";
import {RolesPorUsuario} from "../../interfaces/roles-por-usuario";

@Injectable({
  providedIn: 'root'
})
export class IsClienteService implements CanActivate{

  constructor(
    private readonly _autenticar: AutenticarUsuarioService,
    private readonly _route: Router
  ) { }

  canActivate(){
    if(localStorage.getItem("Usuario") != 'null'){
      const roles = this._autenticar.RolesById(localStorage.getItem("Usuario"));
      roles.subscribe(
        (rol:RolesPorUsuario[]) =>
        {
          if(rol.length>0)
            if(rol.find(r=> <number>r.idRol ===3))
              return true;
            else{
              this._route.navigate((['/login']));
              return false;
            }
          else{
            this._route.navigate((['/login']));
            return false;
          }
        }
      );
    }else{
      this._route.navigate((['/login']));
      return false;
    }
    return true;
  }
}
