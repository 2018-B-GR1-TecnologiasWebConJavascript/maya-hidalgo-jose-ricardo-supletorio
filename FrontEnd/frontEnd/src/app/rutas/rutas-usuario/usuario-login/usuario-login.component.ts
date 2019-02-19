import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../../interfaces/usuario";
import {Router} from "@angular/router";
import {ValidarCamposService} from "../../../servicios/validacion/validar-campos.service";
import {AutenticarUsuarioService} from "../../../servicios/autenticarse/autenticar-usuario.service";
import {RolesPorUsuario} from "../../../interfaces/roles-por-usuario";
import {Rol} from "../../../interfaces/rol";

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.scss']
})
export class UsuarioLoginComponent implements OnInit {

  error:string = "";
  Usuario:Usuario = <Usuario>{};

  constructor(
    private readonly validarRest:ValidarCamposService,
    private readonly _autenticarService: AutenticarUsuarioService,
    private readonly _router: Router
  ) { }

  ngOnInit() {
    if(localStorage.getItem("Usuario") != 'null' ){
      const roles = this._autenticarService.RolesById(localStorage.getItem("Usuario"));
      roles.subscribe(
        (rol:RolesPorUsuario[]) =>
        {
          if(rol.length>0){
            this.ingresarRutaEspecifica(rol);
          }else{
            alert("El administrador aun no le asignado un rol");
            localStorage.setItem('Usuario', null);
            this._router.navigate((['/login']));
          }
        }
      );
    }
  }

  login(){
    this.error = "";
    if(!this.validarRest.validarLetra(this.Usuario.nombre))
      this.error += "ingrese un nombre solo letras\n";
    if(this.Usuario.password.length< 8 || this.Usuario.password.length >16)
      this.error += "Ingrese una contrasena valida [8-16] caracteres";
    if(!this.validarRest.validarLetraMinuscula(this.Usuario.password) ||
      !this.validarRest.validarLetraMayuscula(this.Usuario.password) ||
      !this.validarRest.validarnumeros(this.Usuario.password) ||
      !this.validarRest.validarCaracteresEspeciales(this.Usuario.password)){
      this.error += "la contrasena debe tener una letra minuscula, mayuscula, un numero y un caracter especial";
    }
    if(!this.error){
      const autenticacion$ = this._autenticarService.Login(this.Usuario.nombre,this.Usuario.password);
      autenticacion$.subscribe(
        (u:Usuario[]) =>{
          if(u.length>0) {
            this.Usuario = u[0];
            localStorage.setItem('Usuario', String(this.Usuario.id));
            const roles = this._autenticarService.RolesById(this.Usuario.id);
            roles.subscribe(
              (rol:RolesPorUsuario[]) =>
              {
                if(rol.length>0){
                  this.ingresarRutaEspecifica(rol);
                }else{
                  alert("El administrador aun no le asignado un rol");
                  localStorage.setItem('Usuario', null);
                  this._router.navigate((['/login']));
                }
              }
            );
          }else{
            this.error += "Incorrecto nombre de usuario o contrasena";
            localStorage.setItem('Usuario', null);
          }
        },
        (error) => localStorage.setItem('Usuario', null)
      );
    }
  }

  ingresarRutaEspecifica(rol:RolesPorUsuario[]){
    if(rol.find(r=> <number>r.idRol === 1))
      this._router.navigate((['/administrador']));
    else
    if(rol.find(r=> <number>r.idRol === 2))
      this._router.navigate((['/usuario']));
    else
    if(rol.find(r=> <number>r.idRol === 3))
      this._router.navigate((['/cliente']));
    else
    if(rol.find(r=> <number>r.idRol === 4))
      this._router.navigate((['/cajero']));
    else{
      alert("El administrador aun no le asignado un rol");
      localStorage.setItem('Usuario', null);
      this._router.navigate((['/login']));
    }
  }

}
