import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdministradorMainComponent} from "./rutas/rutas-principales/administrador-main/administrador-main.component";
import {UsuarioMainComponent} from "./rutas/rutas-principales/usuario-main/usuario-main.component";
import {CajeroMainComponent} from "./rutas/rutas-principales/cajero-main/cajero-main.component";
import {ClienteMainComponent} from "./rutas/rutas-principales/cliente-main/cliente-main.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path:'login',
    component: AdministradorMainComponent
  },
  {
    path:'administrador',
    component: AdministradorMainComponent
  },
  {
    path:'usuario',
    component: UsuarioMainComponent
  },
  {
    path:'cajero',
    component: CajeroMainComponent
  },
  {
    path:'cliente',
    component: ClienteMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
