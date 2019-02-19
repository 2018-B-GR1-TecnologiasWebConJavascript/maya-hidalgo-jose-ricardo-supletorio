import { Component, OnInit } from '@angular/core';
import {Materia} from "../../../interfaces/materia";
import {ValidarCamposService} from "../../../servicios/validacion/validar-campos.service";
import {MateriaRestService} from "../../../servicios/Rest/MateriaRest/materia-rest.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-materia-visualizar',
  templateUrl: './materia-visualizar.component.html',
  styleUrls: ['./materia-visualizar.component.scss']
})
export class MateriaVisualizarComponent implements OnInit {

  materias: Materia[] = [];
  materiasAux: Materia[] = [];
  error:string = null;
  textoBuscar = "";

  constructor(
    private readonly validacionService: ValidarCamposService,
    private readonly objetoRest: MateriaRestService,
    private readonly _route:Router
  ) { }

  ngOnInit() {
    const usuario$ = this.objetoRest.findAll();
    usuario$.subscribe(
      (usuario:Materia[])=> {
        this.materias = usuario;
        this.materiasAux = usuario;
      }
    );
  }

  buscarTexto(){
    if(this.textoBuscar!=""){
      if(this.validacionService.validarLetra(this.textoBuscar)){
        this.error="";
        this.materias = this.materiasAux.filter((u) => u.nombre.indexOf(this.textoBuscar) != -1);
      }else
        this.error="Ingrese un nombre valido (solo letras)";
    }else{
      this.materias = JSON.parse(JSON.stringify(this.materiasAux));
      this.error = "";
    }
  }

  eliminar(id:number|string){
    const eliminar$ = this.objetoRest.delete(id);
    eliminar$.subscribe(
      (eliminado:Materia) => {
        const indice = this.materiasAux.findIndex( u => u.id == eliminado.id);
        this.materiasAux.splice(indice,1);
        this.materias = JSON.parse(JSON.stringify(this.materiasAux));
      }
    )
  }

}
