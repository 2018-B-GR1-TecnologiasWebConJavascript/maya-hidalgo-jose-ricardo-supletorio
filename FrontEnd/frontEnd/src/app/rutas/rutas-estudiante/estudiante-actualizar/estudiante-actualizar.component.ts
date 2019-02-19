import { Component, OnInit } from '@angular/core';
import {Estudiante} from "../../../interfaces/estudiante";
import {ActivatedRoute, Router} from "@angular/router";
import {EstudianteRestService} from "../../../servicios/Rest/EstudianteRest/estudiante-rest.service";

@Component({
  selector: 'app-estudiante-actualizar',
  templateUrl: './estudiante-actualizar.component.html',
  styleUrls: ['./estudiante-actualizar.component.scss']
})
export class EstudianteActualizarComponent implements OnInit {

  objetoActualizar : Estudiante;
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _objetoRest: EstudianteRestService,
    private readonly _route: Router
  ) { }

  ngOnInit() {
    const rutaActiva$ = this._activatedRoute.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const evento$ = this._objetoRest.findById(parametros.id);
          evento$
            .subscribe(
              (obj:Estudiante) => {
                this.objetoActualizar = obj;
              }
            );
        }
      );
  }

  actualizar(objetoAc: Estudiante) {
    if(objetoAc.idUsuario==="")
      objetoAc.idUsuario = null;
    const objeto$ = this._objetoRest.updateOneById(objetoAc);
    objeto$.subscribe(
      (m) => this._route.navigate((['/usuario/estudianteVisualizar']))
    )
  }

}
