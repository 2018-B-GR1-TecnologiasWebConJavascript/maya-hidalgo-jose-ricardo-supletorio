import { Component, OnInit } from '@angular/core';
import {Materia} from "../../../../interfaces/materia";
import {ActivatedRoute, Router} from "@angular/router";
import {FacturaCabecera} from "../../../../interfaces/factura-cabecera";
import {FacturaDetalle} from "../../../../interfaces/factura-detalle";
import {EventoPorMateria} from "../../../../interfaces/evento-por-materia";
import {FactuDetalleRestService} from "../../../../servicios/Rest/Factura-Rest/FacDetalleRest/factu-detalle-rest.service";
import {FactuCabeceraRestService} from "../../../../servicios/Rest/Factura-Rest/FacCabeceraRest/factu-cabecera-rest.service";
import {EventoMateriaRestService} from "../../../../servicios/Rest/EventoMateriaRest/evento-materia-rest.service";
import {Evento} from "../../../../interfaces/evento";

@Component({
  selector: 'app-cajero-item-factura',
  templateUrl: './cajero-item-factura.component.html',
  styleUrls: ['./cajero-item-factura.component.scss']
})
export class CajeroItemFacturaComponent implements OnInit {

  materias: Materia[] =[];
  idMateriaSeleccionado:string = "";
  facturaCabecera: FacturaCabecera = <FacturaCabecera>{};
  facturaDetalle:FacturaDetalle= <FacturaDetalle>{};
  eventoPorMateria: EventoPorMateria[] = [];
  error:string = "";

  constructor(
    private readonly _facturaDetalleRest: FactuDetalleRestService,
    private readonly _route: Router,
    private readonly _activateRoute: ActivatedRoute,
    private readonly _facturaCabeceraRest: FactuCabeceraRestService,
    private readonly _eventoPorMateriaRest: EventoMateriaRestService
  ) { }

  ngOnInit() {
    const rutaActiva$ = this._activateRoute.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const evento$ = this._facturaCabeceraRest.findById(parametros.id);
          evento$
            .subscribe(
              (obj:FacturaCabecera) => {
                this.facturaCabecera = obj;
                const evento = <Evento>this.facturaCabecera.idEvento;
                const eventoslibro$ = this._eventoPorMateriaRest.findAll();
                eventoslibro$.subscribe(
                  eve=> {
                    const eveLi = eve.filter(
                      l => {
                        const ev = <Evento> l.idEvento;
                        if(ev.id === evento.id)
                          return l;
                      }
                    );
                    this.eventoPorMateria = eveLi;
                  }
                );
              }
            );
        }
      );
  }

  anadir(){
    this.error = "";
    if(this.facturaDetalle.precio && this.facturaDetalle.catidad){
      if(this.idMateriaSeleccionado != "")
        this.facturaDetalle.idEventoPorMateria = <number> this.idMateriaSeleccionado;
      else
        this.error +="Ingrese el libro a comprar, ";
      if(this.facturaDetalle.precio<0)
        this.error += "Ingrese un precio mayor a cero, ";
      if(this.facturaDetalle.catidad < 0)
        this.error+= " Ingrese una cantidad mayor a cero";
      if(!this.error){
        this.facturaDetalle.idFacturaCabecera = this.facturaCabecera.id;
        this.facturaDetalle.total = this.facturaDetalle.precio * this.facturaDetalle.catidad;
        const crear$ = this._facturaDetalleRest.create(this.facturaDetalle);
        crear$.subscribe(
          (m) => this._route.navigate(['/cajero/gestionFactura/'+this.facturaCabecera.id]),
          (error)=> alert("No se a podido agregar la materia, recargue la pagina")
        )
      }
    }else
      this.error+= "Ingrese todos los datos";
  }

  seleccionarLibro(){
    if(this.idMateriaSeleccionado != ""){
      const eventoLibro = <EventoPorMateria>this.eventoPorMateria.find( r=> r.id == this.idMateriaSeleccionado);
      this.facturaDetalle.precio = eventoLibro.precioBase;
    }
  }

}
