import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EstudianteRestService} from "../../../servicios/Rest/EstudianteRest/estudiante-rest.service";
import {Estudiante} from "../../../interfaces/estudiante";

@Component({
  selector: 'app-estudiante-crear',
  templateUrl: './estudiante-crear.component.html',
  styleUrls: ['./estudiante-crear.component.scss']
})
export class EstudianteCrearComponent implements OnInit {

  constructor(
    private readonly _objetoRest: EstudianteRestService,
    private readonly _router: Router
  ) { }

  ngOnInit() {
  }

  crear(objeto:Estudiante){
    const objeto$ = this._objetoRest.create(objeto);
    objeto$.subscribe(
      (m)=> this._router.navigate((['/usuario/estudianteVisualizar']))
    );
  }
}
