import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdministradorMainComponent} from "./rutas/rutas-principales/administrador-main/administrador-main.component";
import {UsuarioMainComponent} from "./rutas/rutas-principales/usuario-main/usuario-main.component";
import {CajeroMainComponent} from "./rutas/rutas-principales/cajero-main/cajero-main.component";
import {ClienteMainComponent} from "./rutas/rutas-principales/cliente-main/cliente-main.component";
import {UsuarioRegistrarComponent} from "./rutas/rutas-usuario/usuario-registrar/usuario-registrar.component";
import {UsuarioVisualizarComponent} from "./rutas/rutas-usuario/usuario-visualizar/usuario-visualizar.component";
import {UsuarioLoginComponent} from "./rutas/rutas-usuario/usuario-login/usuario-login.component";
import {IsAdministradorService} from "./servicios/guards/is-administrador.service";
import {IsUsuarioService} from "./servicios/guards/is-usuario.service";
import {IsCajeroService} from "./servicios/guards/is-cajero.service";
import {IsClienteService} from "./servicios/guards/is-cliente.service";
import {UsuarioGestionRolComponent} from "./rutas/rutas-usuario/usuario-gestion-rol/usuario-gestion-rol.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path:'login',
    component: UsuarioLoginComponent
  },
  {
    path: 'registrar',
    component: UsuarioRegistrarComponent
  },
  {
    path:'administrador',
    component: AdministradorMainComponent,
    canActivate: [
      IsAdministradorService
    ],
    children:[
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'visualizarUsuarios'
      },
      {
        path: 'visualizarUsuarios',
        component: UsuarioVisualizarComponent
      },
      {
        path: 'actualizarRolUsuario/:id',
        component: UsuarioGestionRolComponent
      }
    ]
  },
  {
    path:'usuario',
    component: UsuarioMainComponent,
    canActivate: [
      IsUsuarioService
    ],
  },
  {
    path:'cajero',
    component: CajeroMainComponent,
    canActivate: [
      IsCajeroService
    ],
  },
  {
    path:'cliente',
    component: ClienteMainComponent,
    canActivate: [
      IsClienteService
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
