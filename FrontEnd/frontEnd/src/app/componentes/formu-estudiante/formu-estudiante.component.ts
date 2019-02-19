import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Estudiante} from "../../interfaces/estudiante";
import {ValidarCamposService} from "../../servicios/validacion/validar-campos.service";

@Component({
  selector: 'app-formu-estudiante',
  templateUrl: './formu-estudiante.component.html',
  styleUrls: ['./formu-estudiante.component.scss']
})
export class FormuEstudianteComponent implements OnInit {

  estudiante = <Estudiante>{};
  nombreButton: string = " ";
  error: string = "";

  @Input()
  estudianteAux: Estudiante;

  @Input()
  nombreButtonAux: string;

  @Output()
  formularioValido = new EventEmitter();

  constructor(
    private readonly _validacion: ValidarCamposService
  ) { }

  ngOnInit() {
    this.nombreButton = this.nombreButtonAux;
    if(this.estudianteAux != null)
      this.estudiante = JSON.parse(JSON.stringify(this.estudianteAux));
  }

  emitirFormulario(){
    this.error = "";
    if(!this._validacion.validarLetra(this.estudiante.nombres))
      this.error += "Ingrese solo letras en el nombre, ";
    if(!this._validacion.validarLetra(this.estudiante.apellidos))
      this.error += "Ingrese solo letras en el apellido, ";
    if(this.estudiante.fechaNacimiento && !this._validacion.validarFechaMenor(this.estudiante.fechaNacimiento))
      this.error += "ingrese una fecha correcta (inferior a la fecha actual), ";
    if(this.estudiante.semestreActual && this.estudiante.semestreActual<0)
      this.error+="Ingrese un semestre valido (superior a 0), ";
    if(!this.error)
      this.formularioValido.emit(this.estudiante);
  }

}
