import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Materia} from "../../../interfaces/materia";
import {EventoRestService} from "../../../servicios/Rest/EventoRest/evento-rest.service";
import {EventoPorMateria} from "../../../interfaces/evento-por-materia";
import {Evento} from "../../../interfaces/evento";

@Component({
  selector: 'app-evento-visualizar-materia',
  templateUrl: './evento-visualizar-materia.component.html',
  styleUrls: ['./evento-visualizar-materia.component.scss']
})
export class EventoVisualizarMateriaComponent implements OnInit {

  materias: Materia[] = [];
  nombreEvento:string = "";
  mensaje:string="";
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private readonly _eventoRest: EventoRestService,
  ) { }

  ngOnInit() {
    this.mensaje ="";
    const rutaActiva$ = this._activatedRoute.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const materia$ = this._eventoRest.findhijosEvento();
          const evento$ =  this._eventoRest.findById(parametros.id);
          evento$.subscribe(
            (eve) => this.nombreEvento = eve.nombre
          );
          materia$.subscribe(
            (m:EventoPorMateria[])=>{
              const obj = m.filter(
                a => {
                  const b = <Evento> a.idEvento;
                  try{
                    if(b.id == parametros.id){
                      return a;
                    }
                  }catch (e) {

                  }
                }
              );
              this.materias = obj.map( m => <Materia> m.idMateria);
              if(this.materias.length === 0)
                this.mensaje += "NO EXISTE MATERIAS";
            }
          )
        }
      );
  }

}
