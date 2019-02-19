import { Component, OnInit } from '@angular/core';
import {FacturaCabecera} from "../../../../interfaces/factura-cabecera";
import {FactuCabeceraRestService} from "../../../../servicios/Rest/Factura-Rest/FacCabeceraRest/factu-cabecera-rest.service";
import {Usuario} from "../../../../interfaces/usuario";

@Component({
  selector: 'app-cliente-facturas',
  templateUrl: './cliente-facturas.component.html',
  styleUrls: ['./cliente-facturas.component.scss']
})
export class ClienteFacturasComponent implements OnInit {

  facturas: FacturaCabecera[] = [];
  constructor(
    private readonly _facturaCabeRest: FactuCabeceraRestService
  ) { }

  ngOnInit() {
    const factu$ = this._facturaCabeRest.findAll();
    factu$.subscribe(
      fac => {
        const factus = fac.filter( f=>
          {
            const fa = <Usuario> f.idUsuario;
            if(fa.id == localStorage.getItem('Usuario'))
              return f;
          }
        )
        this.facturas = factus
      }
    )
  }
}
