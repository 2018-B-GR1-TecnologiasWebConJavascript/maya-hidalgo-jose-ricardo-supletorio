import { Component, OnInit } from '@angular/core';
import {EventoRestService} from "../../../servicios/Rest/EventoRest/evento-rest.service";
import {Router} from "@angular/router";
import {Evento} from "../../../interfaces/evento";

@Component({
  selector: 'app-evento-crear',
  templateUrl: './evento-crear.component.html',
  styleUrls: ['./evento-crear.component.scss']
})
export class EventoCrearComponent implements OnInit {

  constructor(
    private readonly _objetoRest: EventoRestService,
    private readonly _router: Router
  ) { }

  ngOnInit() {
  }

  crear(objeto:Evento){
    const objeto$ = this._objetoRest.create(objeto);
    objeto$.subscribe(
      (m)=> this._router.navigate((['/eventos']))
    );
  }
}
