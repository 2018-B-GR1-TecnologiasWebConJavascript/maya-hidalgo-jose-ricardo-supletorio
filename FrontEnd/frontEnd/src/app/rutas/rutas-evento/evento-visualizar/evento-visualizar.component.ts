import { Component, OnInit } from '@angular/core';
import {Evento} from "../../../interfaces/evento";
import {Router} from "@angular/router";
import {ValidarCamposService} from "../../../servicios/validacion/validar-campos.service";
import {EventoRestService} from "../../../servicios/Rest/EventoRest/evento-rest.service";
import {AutenticarUsuarioService} from "../../../servicios/autenticarse/autenticar-usuario.service";
import {FactuCabeceraRestService} from "../../../servicios/Rest/Factura-Rest/FacCabeceraRest/factu-cabecera-rest.service";
import {RolesPorUsuario} from "../../../interfaces/roles-por-usuario";
import {FacturaCabecera} from "../../../interfaces/factura-cabecera";

@Component({
  selector: 'app-evento-visualizar',
  templateUrl: './evento-visualizar.component.html',
  styleUrls: ['./evento-visualizar.component.scss']
})
export class EventoVisualizarComponent implements OnInit {

  eventos: Evento[] = [];
  eventosAux: Evento[] = [];
  error:string = null;
  textoBuscar = "";
  esUsuario: boolean = false;
  esCajero:boolean = false;
  constructor(
    private readonly validacionService: ValidarCamposService,
    private readonly objetoRest: EventoRestService,
    private readonly _route:Router,
    private readonly _autenticacionUsuario: AutenticarUsuarioService,
    private readonly _facturaCabeceraRest: FactuCabeceraRestService
  ) { }

  ngOnInit() {
    const obj$ = this.objetoRest.findAll();
    obj$.subscribe(
      (u:Evento[])=> {
        this.eventos = u;
        this.eventosAux = u;
      }
    );
    const roles = this._autenticacionUsuario.RolesById(localStorage.getItem("Usuario"));
    roles.subscribe(
      (rol:RolesPorUsuario[]) =>
      {
        if(rol.length>0){
          if(rol.find(r=> <number> r.idRol === 2))
            this.esUsuario = true;
          if(rol.find(r=> <number> r.idRol === 4))
            this.esCajero= true;
        }
      }
    );
  }

  buscarTexto(){
    if(this.textoBuscar!=""){
      if(this.validacionService.validarLetra(this.textoBuscar)){
        this.error="";
        this.eventos = this.eventosAux.filter((u) => u.nombre.indexOf(this.textoBuscar) != -1);
      }else
        this.error="Ingrese un nombre valido (solo letras)";
    }else{
      this.eventos = JSON.parse(JSON.stringify(this.eventosAux));
      this.error = "";
    }
  }

  gestionFactura(id: number | string ){
    var elemento:FacturaCabecera = <FacturaCabecera>{};
    elemento.idUsuario = localStorage.getItem("Usuario");
    elemento.idEvento = id;
    const crear$ = this._facturaCabeceraRest.create(elemento);
    crear$.subscribe(
      eve => this._route.navigate(['/cajero/factura/'+eve.id])
    );
  }
}
