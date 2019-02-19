import { Component, OnInit } from '@angular/core';
import {MateriaRestService} from "../../../servicios/Rest/MateriaRest/materia-rest.service";
import {Router} from "@angular/router";
import {Materia} from "../../../interfaces/materia";

@Component({
  selector: 'app-materia-crear',
  templateUrl: './materia-crear.component.html',
  styleUrls: ['./materia-crear.component.scss']
})
export class MateriaCrearComponent implements OnInit {

  constructor(
    private readonly _objetoRest: MateriaRestService,
    private readonly _router: Router
  ) { }

  ngOnInit() {
  }

  crear(objeto:Materia){
    const objeto$ = this._objetoRest.create(objeto);
    objeto$.subscribe(
      (m)=> this._router.navigate((['/usuario/materiaVisualizar']))
    );
  }

}
