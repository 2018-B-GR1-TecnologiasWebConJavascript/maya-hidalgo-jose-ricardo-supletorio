import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cliente-main',
  templateUrl: './cliente-main.component.html',
  styleUrls: ['./cliente-main.component.scss']
})
export class ClienteMainComponent implements OnInit {

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
