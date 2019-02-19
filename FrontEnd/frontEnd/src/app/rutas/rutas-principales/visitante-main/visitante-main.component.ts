import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-visitante-main',
  templateUrl: './visitante-main.component.html',
  styleUrls: ['./visitante-main.component.scss']
})
export class VisitanteMainComponent implements OnInit {

  constructor(
    private readonly _route: Router
  ) { }

  ngOnInit() {
  }

  logOut(){
    localStorage.setItem('Usuario', null);
    this._route.navigate((['/login']));
  }
}
