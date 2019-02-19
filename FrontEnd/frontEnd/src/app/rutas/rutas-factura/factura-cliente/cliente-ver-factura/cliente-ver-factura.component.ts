import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FacturaCabecera} from "../../../../interfaces/factura-cabecera";
import {FactuCabeceraRestService} from "../../../../servicios/Rest/Factura-Rest/FacCabeceraRest/factu-cabecera-rest.service";

@Component({
  selector: 'app-cliente-ver-factura',
  templateUrl: './cliente-ver-factura.component.html',
  styleUrls: ['./cliente-ver-factura.component.scss']
})
export class ClienteVerFacturaComponent implements OnInit {

  objetoActualizar : FacturaCabecera;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _objetoRest: FactuCabeceraRestService
  ) { }

  ngOnInit() {
    const rutaActiva$ = this._activatedRoute.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const e$ = this._objetoRest.findById(parametros.id);
          e$
            .subscribe(
              (obj:FacturaCabecera) => {
                this.objetoActualizar = obj;
              }
            );
        }
      );
  }

  actualizar(objetoAc: FacturaCabecera) {
    const objeto$ = this._objetoRest.updateOneById(objetoAc);
    objeto$.subscribe(
      (m) => alert("Se actualizado los datos"),
      (error)=> alert("No se pudo actualizar la informacion, vuelva a recargar la pagina")
    )
  }

}
