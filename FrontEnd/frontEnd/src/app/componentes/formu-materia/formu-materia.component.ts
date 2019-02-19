import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Estudiante} from "../../interfaces/estudiante";
import {Materia} from "../../interfaces/materia";
import {ValidarCamposService} from "../../servicios/validacion/validar-campos.service";
import {EstudianteRestService} from "../../servicios/Rest/EstudianteRest/estudiante-rest.service";
import {isObject} from "rxjs/internal-compatibility";

@Component({
  selector: 'app-formu-materia',
  templateUrl: './formu-materia.component.html',
  styleUrls: ['./formu-materia.component.scss']
})
export class FormuMateriaComponent implements OnInit {

  materia = <Materia>{};
  estudiantes: Estudiante[] = [];
  idObjAux:string = "";
  nombreButton: string = " ";
  error:string = "";

  @Input()
  materiaAux: Materia;

  @Input()
  nombreButtonAux: string;

  @Output()
  formularioValido = new EventEmitter();

  constructor(
    private readonly _validacion: ValidarCamposService,
    private readonly _objetoRestAux: EstudianteRestService
  ) { }

  ngOnInit() {
    this.nombreButton = this.nombreButtonAux;
    if(this.materiaAux != null){
      this.materia = JSON.parse(JSON.stringify(this.materiaAux));
      if(isObject(this.materia.idEstudiante)){
        const estudiante : Estudiante = <Estudiante> this.materia.idEstudiante;
        this.materia.idEstudiante = estudiante.id;
        this.idObjAux = <string> estudiante.id;
      }
    }
    const obje$ = this._objetoRestAux.findAll();
    obje$.subscribe(
      (p) => this.estudiantes = p
    );
  }

  emitirFormulario(){
    this.error = "";
    if(!this._validacion.validarLetra(this.materia.nombre))
      this.error += "Ingrese solo letras en el nombre de la materia, ";
    if(this.materia.numeroHorasPorSemana && this.materia.numeroHorasPorSemana<0)
      this.error+= "Ingrese un numero de horas valido (superior a 0), ";
    if(this.materia.fechaCreacion && !this._validacion.validarFechaMenor(this.materia.fechaCreacion))
      this.error += "fecha de creacion incorrecta (debe ser inferior a la fecha actual),";
    if(!this.materia.activo)
      this.error+= "seleccione si la materia esta activa, ";
    if(!this.materia.idEstudiante || this.materia.idEstudiante === "")
      this.error+= "Ingrese el estudiante";
    if(!this.error)
      this.formularioValido.emit(this.materia);
  }

  agreagrEstudiante(){
    this.materia.idEstudiante = this.idObjAux;
    console.log(this.materia.idEstudiante);
  }

}
