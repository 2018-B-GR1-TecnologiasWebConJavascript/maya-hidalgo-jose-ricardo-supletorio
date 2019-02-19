import { Component, OnInit } from '@angular/core';
import {FacturaCabecera} from "../../../../interfaces/factura-cabecera";
import {ActivatedRoute, Router} from "@angular/router";
import {FactuCabeceraRestService} from "../../../../servicios/Rest/Factura-Rest/FacCabeceraRest/factu-cabecera-rest.service";

@Component({
  selector: 'app-cajero-gestion-factura',
  templateUrl: './cajero-gestion-factura.component.html',
  styleUrls: ['./cajero-gestion-factura.component.scss']
})
export class CajeroGestionFacturaComponent implements OnInit {

  objetoActualizar : FacturaCabecera;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _objetoRest: FactuCabeceraRestService,
    private readonly _route: Router
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
