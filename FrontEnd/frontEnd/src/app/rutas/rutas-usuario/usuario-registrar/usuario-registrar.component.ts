import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../../interfaces/usuario";
import {Router} from "@angular/router";
import {AutenticarUsuarioService} from "../../../servicios/autenticarse/autenticar-usuario.service";
import {ValidarCamposService} from "../../../servicios/validacion/validar-campos.service";
import {UsuarioRestService} from "../../../servicios/Rest/UsuarioRest/usuario-rest.service";
import {RolesPorUsuario} from "../../../interfaces/roles-por-usuario";

@Component({
  selector: 'app-usuario-registrar',
  templateUrl: './usuario-registrar.component.html',
  styleUrls: ['./usuario-registrar.component.scss']
})
export class UsuarioRegistrarComponent implements OnInit {

  usuario:Usuario = <Usuario>{};
  error:string = "";

  constructor(
    private readonly _autenticarService: AutenticarUsuarioService,
    private readonly _router: Router,
    private readonly _validacion: ValidarCamposService,
    private readonly _usuarioRest: UsuarioRestService
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

  registarse(){
    this.error = "";
    if(!this._validacion.validarEmail(this.usuario.correo))
      this.error += " Ingrese un correo valido, ";
    if(!this._validacion.validarLetra(this.usuario.nombre))
      this.error += "ingrese solo letras en el nombre, ";
    if(!this._validacion.validarFechaMenor(this.usuario.fechaNacimiento))
      this.error += " La fecha debe ser menos a la fecha actual, ";
    if(this.usuario.password.length<8 || this.usuario.password.length>16)
      this.error += " la contrasena debe estar en el rango [8-16] caracteres";
    if(!this._validacion.validarLetraMinuscula(this.usuario.password) ||
      !this._validacion.validarLetraMayuscula(this.usuario.password) ||
      !this._validacion.validarnumeros(this.usuario.password) ||
      !this._validacion.validarCaracteresEspeciales(this.usuario.password)){
      this.error += "la contrasena debe tener una letra minuscula, mayuscula, un numero y un caracter especial";
    }
    if(!this.error) {
      const usuario$ = this._usuarioRest.create(this.usuario);
      usuario$.subscribe(
        (user) => this._router.navigate((['login'])),
        (error)=> this.error += "error al registrar al usuario, verifique los datos sean correctos"
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
