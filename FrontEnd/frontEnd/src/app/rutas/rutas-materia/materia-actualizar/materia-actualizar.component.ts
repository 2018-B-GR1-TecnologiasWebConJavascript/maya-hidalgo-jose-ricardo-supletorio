import { Component, OnInit } from '@angular/core';
import {Materia} from "../../../interfaces/materia";
import {ActivatedRoute, Router} from "@angular/router";
import {MateriaRestService} from "../../../servicios/Rest/MateriaRest/materia-rest.service";

@Component({
  selector: 'app-materia-actualizar',
  templateUrl: './materia-actualizar.component.html',
  styleUrls: ['./materia-actualizar.component.scss']
})
export class MateriaActualizarComponent implements OnInit {

  objetoActualizar : Materia;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _objetoRest: MateriaRestService,
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
              (obj:Materia) => {
                this.objetoActualizar = obj;
              }
            );
        }
      );
  }

  actualizar(objetoAc: Materia) {
    if(objetoAc.idEstudiante==="")
      objetoAc.idEstudiante = null;
    const objeto$ = this._objetoRest.updateOneById(objetoAc);
    objeto$.subscribe(
      (m) => this._route.navigate((['/usuario/materiaVisualizar']))
    )
  }
}
