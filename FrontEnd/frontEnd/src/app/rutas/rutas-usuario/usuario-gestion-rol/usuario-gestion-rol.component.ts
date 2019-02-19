import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Usuario} from "../../../interfaces/usuario";
import {Rol} from "../../../interfaces/rol";
import {RolesPorUsuario} from "../../../interfaces/roles-por-usuario";
import {UsuarioRestService} from "../../../servicios/Rest/UsuarioRest/usuario-rest.service";
import {RolRestService} from "../../../servicios/Rest/RolRest/rol-rest.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-usuario-gestion-rol',
  templateUrl: './usuario-gestion-rol.component.html',
  styleUrls: ['./usuario-gestion-rol.component.scss']
})
export class UsuarioGestionRolComponent implements OnInit {

  usuario:Usuario = <Usuario>{};
  rolSe:String = "";
  rolesUsuario:Rol[] = [];
  listRoles: Rol[] = [];
  rolesUsuarioAux:RolesPorUsuario[] = [];

  constructor(
    private readonly _activatedRoute:ActivatedRoute,
    private readonly _usuarioRest: UsuarioRestService,
    private readonly _rolrest: RolRestService
  ) { }

  ngOnInit() {
    const rutaActiva$ = this._activatedRoute.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const usuario$ = this._usuarioRest.findOneById(parametros.id);
          const roles$ = this._rolrest.findAllRoles();
          const rolesUsuario$ = this._rolrest.findAllRolesById(parametros.id);
          const rolesUser$ = rolesUsuario$.pipe(
            map(r => r.map( r1 => r1.idRol))
          );

          rolesUsuario$.subscribe(
            (roles:RolesPorUsuario[]) => this.rolesUsuarioAux = roles
          );

          rolesUser$.subscribe(
            (rol:Rol[]) => this.rolesUsuario = rol
          );

          roles$.subscribe(
            (r:Rol[])=> this.listRoles = r
          );

          usuario$.subscribe(
            (usuario: Usuario) => this.usuario = usuario
          );
        }
      );
  }

  ejecutar(){
    if(this.rolSe != ""){
      if(this.rolesUsuario.length > 0){
        if(this.rolesUsuario.find(rol => rol.nombre === this.rolSe)){
          alert("el usuario ya esta asigando a ese rol");
        }else{
          const nueRol$ = this._usuarioRest.agregarRolUser(this.listRoles.find((rol) => rol.nombre === this.rolSe).id,this.usuario.id);
          nueRol$.subscribe(
            (r:RolesPorUsuario) => {
              this.rolesUsuarioAux.push(r)
              this.rolesUsuario.push(
                <Rol>(r.idRol)
              );
            }
          );
        }
      }else{
        const nueRol$ = this._usuarioRest.agregarRolUser(this.listRoles.find((rol) => rol.nombre === this.rolSe).id,this.usuario.id);
        nueRol$.subscribe(
          (r:RolesPorUsuario) => {
            this.rolesUsuarioAux.push(r)
            this.rolesUsuario.push(
              <Rol>(r.idRol)
            );
          }
        );
      }
    }else
      alert("Selecione algun rol");
  }

  eliminar(id: number | string){
    const rol:number =  this.rolesUsuario.findIndex( (rol) => rol.id == id);
    this._usuarioRest.eliminarrolid(this.rolesUsuarioAux[rol].id);
    this.rolesUsuario.splice(rol,1);
    this.rolesUsuarioAux.splice(rol,1);
  }
}
