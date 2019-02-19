import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../../interfaces/usuario";
import {Router} from "@angular/router";
import {ValidarCamposService} from "../../../servicios/validacion/validar-campos.service";
import {UsuarioRestService} from "../../../servicios/Rest/UsuarioRest/usuario-rest.service";

@Component({
  selector: 'app-usuario-visualizar',
  templateUrl: './usuario-visualizar.component.html',
  styleUrls: ['./usuario-visualizar.component.scss']
})
export class UsuarioVisualizarComponent implements OnInit {

  Usuarios: Usuario[] = [];
  UsuariosAux: Usuario[] = [];
  error:string = null;
  textoBuscar = "";

  constructor(
    private readonly validacionService: ValidarCamposService,
    private readonly usuarioRest: UsuarioRestService,
    private readonly _route:Router
  ) { }

  ngOnInit() {
    const usuario$ = this.usuarioRest.findAll();
    usuario$.subscribe(
      (usuario:Usuario[])=> {
        this.Usuarios = usuario;
        this.UsuariosAux = usuario;
      }
    );
  }

  buscarTexto(){
    if(this.textoBuscar!=""){
      if(this.validacionService.validarEmail(this.textoBuscar) || this.validacionService.validarLetra(this.textoBuscar)){
        this.error="";
        if(this.validacionService.validarEmail(this.textoBuscar)){
          this.Usuarios = this.UsuariosAux.filter((usuario) => usuario.correo.indexOf(this.textoBuscar) != -1);
        }else
        if (this.validacionService.validarLetra(this.textoBuscar)){
          this.Usuarios = this.UsuariosAux.filter((usuario) => usuario.nombre.indexOf(this.textoBuscar) != -1);
        }
      }else
        this.error=" Ingrese un correo o nombre valido ";
    }else{
      this.Usuarios = JSON.parse(JSON.stringify(this.UsuariosAux));
      this.error = "";
    }
  }

  eliminar(id:number|string){
    const eliminar$ = this.usuarioRest.eliminar(id);
    eliminar$.subscribe(
      (eliminado:Usuario) => {
        const indice = this.UsuariosAux.findIndex( u => u.id == eliminado.id);
        this.UsuariosAux.splice(indice,1);
        this.Usuarios = JSON.parse(JSON.stringify(this.UsuariosAux));
      }
    )
  }

}
