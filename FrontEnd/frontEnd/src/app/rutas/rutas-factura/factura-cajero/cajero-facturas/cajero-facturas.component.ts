import { Component, OnInit } from '@angular/core';
import {FacturaCabecera} from "../../../../interfaces/factura-cabecera";
import {Router} from "@angular/router";
import {ValidarCamposService} from "../../../../servicios/validacion/validar-campos.service";
import {FactuCabeceraRestService} from "../../../../servicios/Rest/Factura-Rest/FacCabeceraRest/factu-cabecera-rest.service";
import {Usuario} from "../../../../interfaces/usuario";

@Component({
  selector: 'app-cajero-facturas',
  templateUrl: './cajero-facturas.component.html',
  styleUrls: ['./cajero-facturas.component.scss']
})
export class CajeroFacturasComponent implements OnInit {

  facturas: FacturaCabecera[] = [];
  facturasAux: FacturaCabecera[] = [];
  error:string = null;
  textoBuscar = "";
  textoBuscarEstado = "";

  constructor(
    private readonly validacionService: ValidarCamposService,
    private readonly _facturaRest: FactuCabeceraRestService,
    private readonly _route:Router
  ) { }

  ngOnInit() {
    const usuario$ = this._facturaRest.findAll();
    usuario$.subscribe(
      (u:FacturaCabecera[])=> {
        const factus = u.filter( f=>
          {
            const fa = <Usuario> f.idUsuario;
            if(fa.id == localStorage.getItem('Usuario'))
              return f;
          }
        )
        this.facturas = factus;
        this.facturasAux = factus;
      }
    );
  }

  buscarTexto(){
    if(this.textoBuscar!=""){
      if(this.validacionService.validarLetra(this.textoBuscar)){
        this.error="";
        if (this.validacionService.validarLetra(this.textoBuscar)){
          this.facturas = this.facturasAux.filter((u) => {
            const usu = <Usuario> u.idUsuario
            if(usu.nombre.indexOf(this.textoBuscar) != -1)
              return u;
          });
        }
      }else
        this.error="Ingrese un nombre valido, solo letras";
    }else{
      this.facturas = JSON.parse(JSON.stringify(this.facturasAux));
      this.error = "";
    }
  }

  filtarPorEstado(){
    if(this.textoBuscarEstado != ""){
      this.facturas = this.facturasAux.filter((u) => u.estado === this.textoBuscarEstado);
    }else
      this.facturas = JSON.parse(JSON.stringify(this.facturasAux));
  }

}
