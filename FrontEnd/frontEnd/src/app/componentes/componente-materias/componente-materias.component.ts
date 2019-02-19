import {Component, Input, OnInit} from '@angular/core';
import {Materia} from "../../interfaces/materia";

@Component({
  selector: 'app-componente-materias',
  templateUrl: './componente-materias.component.html',
  styleUrls: ['./componente-materias.component.scss']
})
export class ComponenteMateriasComponent implements OnInit {

  materia = <Materia>{};

  @Input()
  materiaAux: Materia;

  constructor() { }

  ngOnInit() {
    this.materia = JSON.parse(JSON.stringify(this.materiaAux));
  }

}
