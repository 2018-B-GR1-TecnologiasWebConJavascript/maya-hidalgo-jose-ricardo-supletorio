import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Evento} from "../../interfaces/evento";
import {ValidarCamposService} from "../../servicios/validacion/validar-campos.service";

@Component({
  selector: 'app-formu-evento',
  templateUrl: './formu-evento.component.html',
  styleUrls: ['./formu-evento.component.scss']
})
export class FormuEventoComponent implements OnInit {

  evento = <Evento>{};
  nombreButton: string = " ";
  error: string = "";

  @Input()
  eventoAux: Evento;

  @Input()
  nombreButtonAux: string;

  @Output()
  formularioValido = new EventEmitter();
  constructor(
    private readonly _validacion: ValidarCamposService
  ) { }

  ngOnInit() {
    this.nombreButton = this.nombreButtonAux;
    if(this.eventoAux != null)
      this.evento = JSON.parse(JSON.stringify(this.eventoAux));
  }

  emitirFormulario(){
    this.error = "";
    if(!this._validacion.validarLetra(this.evento.nombre))
      this.error += "Ingrese solo letras en el nombre, ";
    if(!this._validacion.validarFechaMayor(this.evento.fecha))
      this.error += "Fecha incorrecta, deberia ser mayor a la fecha actual, ";
    if(!this.error)
      this.formularioValido.emit(this.evento);
  }

}
