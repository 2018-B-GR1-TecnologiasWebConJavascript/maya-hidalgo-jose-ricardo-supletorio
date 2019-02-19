import { Component, OnInit } from '@angular/core';
import {Estudiante} from "../../../interfaces/estudiante";
import {ValidarCamposService} from "../../../servicios/validacion/validar-campos.service";
import {EstudianteRestService} from "../../../servicios/Rest/EstudianteRest/estudiante-rest.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-estudiante-visualizar',
  templateUrl: './estudiante-visualizar.component.html',
  styleUrls: ['./estudiante-visualizar.component.scss']
})
export class EstudianteVisualizarComponent implements OnInit {

  estudiantes: Estudiante[] = [];
  estudiantesAux: Estudiante[] = [];
  error:string = null;
  textoBuscar = "";

  constructor(
    private readonly validacionService: ValidarCamposService,
    private readonly objetoRest: EstudianteRestService
  ) { }

  ngOnInit() {
    const usuario$ = this.objetoRest.findAll();
    usuario$.subscribe(
      (usuario:Estudiante[])=> {
        this.estudiantes = usuario;
        this.estudiantesAux = usuario;
      }
    );
  }

  buscarTexto(){
    if(this.textoBuscar!=""){
      if(this.validacionService.validarLetra(this.textoBuscar)){
        this.error="";
        this.estudiantes = this.estudiantesAux.filter((u) => u.nombres.indexOf(this.textoBuscar) != -1);
      }else
        this.error="Ingrese un nombre valido (solo letras)";
    }else{
      this.estudiantes = JSON.parse(JSON.stringify(this.estudiantesAux));
      this.error = "";
    }
  }

  eliminar(id:number|string){
    const eliminar$ = this.objetoRest.delete(id);
    eliminar$.subscribe(
      (eliminado:Estudiante) => {
        const indice = this.estudiantesAux.findIndex( u => u.id == eliminado.id);
        this.estudiantesAux.splice(indice,1);
        this.estudiantes = JSON.parse(JSON.stringify(this.estudiantesAux));
      }
    )
  }
}
