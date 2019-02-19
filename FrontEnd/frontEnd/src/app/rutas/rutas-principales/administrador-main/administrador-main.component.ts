import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-administrador-main',
  templateUrl: './administrador-main.component.html',
  styleUrls: ['./administrador-main.component.scss']
})
export class AdministradorMainComponent implements OnInit {

  constructor(
    private readonly _route:Router
  ) { }

  ngOnInit() {
  }

  logOut(){
    localStorage.setItem('Usuario', null);
    this._route.navigate((['/login']));
  }
}
