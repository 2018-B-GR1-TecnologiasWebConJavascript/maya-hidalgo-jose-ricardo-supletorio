import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FacturaCabecera} from "../../interfaces/factura-cabecera";
import {FacturaDetalle} from "../../interfaces/factura-detalle";
import {ValidarCamposService} from "../../servicios/validacion/validar-campos.service";
import {FactuDetalleRestService} from "../../servicios/Rest/Factura-Rest/FacDetalleRest/factu-detalle-rest.service";
import {FactuCabeceraRestService} from "../../servicios/Rest/Factura-Rest/FacCabeceraRest/factu-cabecera-rest.service";
import {Evento} from "../../interfaces/evento";

@Component({
  selector: 'app-formu-factura',
  templateUrl: './formu-factura.component.html',
  styleUrls: ['./formu-factura.component.scss']
})
export class FormuFacturaComponent implements OnInit {

  facturaCabecera: FacturaCabecera = <FacturaCabecera> {};
  facturaDetalle: FacturaDetalle[] = [];
  esCajero:boolean;
  idTextoSelec:string = "";
  error: string = "";

  @Input()
  facturaAux: FacturaCabecera;

  @Input()
  cajeroAux: boolean;

  @Output()
  formularioValido = new EventEmitter();

  constructor(
    private readonly _validacion: ValidarCamposService,
    private readonly _facturaDetalleRest: FactuDetalleRestService,
    private readonly _facturaCabeceraRest: FactuCabeceraRestService
  ) { }

  ngOnInit() {
    this.esCajero = this.cajeroAux;
    if(this.facturaAux != null){
      this.facturaCabecera = JSON.parse(JSON.stringify(this.facturaAux));
      if(this.facturaCabecera.estado === "Pagado")
        this.esCajero = false;
      const evento = <Evento>this.facturaCabecera.idEvento;
      const detalles$ = this._facturaDetalleRest.findAll();
      detalles$.subscribe(
        det=>{
          const detal = det.filter(
            e=>{
              const as = <FacturaCabecera>e.idFacturaCabecera;
              if(as.id === this.facturaCabecera.id)
                return e;
            }
          );
          this.facturaDetalle = detal;
          this.facturaCabecera.total = 0;
          this.facturaDetalle.forEach(m => this.facturaCabecera.total += m.total);
          const facturaActu$ = this._facturaCabeceraRest.updateOneById(this.facturaCabecera);
          facturaActu$.subscribe(
            l=> l
          );
        }
      )
    }
  }

  emitirFormulario(){
    this.error = "";
    this.validarCampos();
    if(!this.error){
      this.facturaCabecera.estado = "Pagado";
      this.esCajero = false;
      this.guarDarDatos();
    }
  }

  guarDarDatos(){
    this.error = "";
    this.validarCampos();
    if(!this.error)
      this.formularioValido.emit(this.facturaCabecera);
  }

  validarCampos(){
    if(!this._validacion.validarLetra(this.facturaCabecera.nombre))
      this.error += " nombre incorrecto(solo letras), ";
    if(!this._validacion.validarNumero(this.facturaCabecera.cedulaRuc))
      this.error += " cedula o ruc incorrecto (solo numeros), ";
    if(this.facturaCabecera.telefono && !this._validacion.validarNumero(this.facturaCabecera.telefono))
      this.error += " telefono incorrecto (solo numeros), ";
    if(this.facturaCabecera.correoElectronico && !this._validacion.validarEmail(this.facturaCabecera.correoElectronico))
      this.error += " correo incorrecto (ingrese un email valido), ";
    if(this.facturaDetalle.length < 1 )
      this.error += " no a ingresado ningun item a la factura, ";
    if(!this.facturaCabecera.tipoPago)
      this.error += " seleccione el tipo de pago";
  }

  eliminar(id:number|string){
    const eliminar$ = this._facturaDetalleRest.delete(id);
    eliminar$.subscribe(
      (eliminado:FacturaDetalle) => {
        const indice = this.facturaDetalle.findIndex( u => u.id == eliminado.id);
        this.facturaCabecera.total = this.facturaCabecera.total - this.facturaDetalle[indice].total;
        const facturaActu$ = this._facturaCabeceraRest.updateOneById(this.facturaCabecera);
        facturaActu$.subscribe(
          l=> this.facturaDetalle.splice(indice,1)
        )
      }
    )
  }

}
