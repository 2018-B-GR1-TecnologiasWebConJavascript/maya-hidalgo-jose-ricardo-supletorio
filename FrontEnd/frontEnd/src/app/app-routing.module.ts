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
import {NoEncontradoMainComponent} from "./rutas/rutas-principales/no-encontrado-main/no-encontrado-main.component";
import {VisitanteMainComponent} from "./rutas/rutas-principales/visitante-main/visitante-main.component";
import {EventoVisualizarComponent} from "./rutas/rutas-evento/evento-visualizar/evento-visualizar.component";
import {EventoCrearComponent} from "./rutas/rutas-evento/evento-crear/evento-crear.component";
import {EventoAgregarMateriaComponent} from "./rutas/rutas-evento/evento-agregar-materia/evento-agregar-materia.component";
import {EventoVisualizarMateriaComponent} from "./rutas/rutas-evento/evento-visualizar-materia/evento-visualizar-materia.component";
import {EstudianteVisualizarComponent} from "./rutas/rutas-estudiante/estudiante-visualizar/estudiante-visualizar.component";
import {EstudianteCrearComponent} from "./rutas/rutas-estudiante/estudiante-crear/estudiante-crear.component";
import {EstudianteActualizarComponent} from "./rutas/rutas-estudiante/estudiante-actualizar/estudiante-actualizar.component";
import {MateriaVisualizarComponent} from "./rutas/rutas-materia/materia-visualizar/materia-visualizar.component";
import {MateriaCrearComponent} from "./rutas/rutas-materia/materia-crear/materia-crear.component";
import {MateriaActualizarComponent} from "./rutas/rutas-materia/materia-actualizar/materia-actualizar.component";
import {ClienteFacturasComponent} from "./rutas/rutas-factura/factura-cliente/cliente-facturas/cliente-facturas.component";
import {ClienteVerFacturaComponent} from "./rutas/rutas-factura/factura-cliente/cliente-ver-factura/cliente-ver-factura.component";
import {CajeroFacturasComponent} from "./rutas/rutas-factura/factura-cajero/cajero-facturas/cajero-facturas.component";
import {CajeroGestionFacturaComponent} from "./rutas/rutas-factura/factura-cajero/cajero-gestion-factura/cajero-gestion-factura.component";
import {CajeroItemFacturaComponent} from "./rutas/rutas-factura/factura-cajero/cajero-item-factura/cajero-item-factura.component";

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
    children:[
      {
        path: 'estudianteVisualizar',
        component: EstudianteVisualizarComponent
      },
      {
        path: 'estudianteCrear',
        component: EstudianteCrearComponent
      },
      {
        path: 'estudianteActualizar/:id',
        component: EstudianteActualizarComponent
      },
      {
        path: 'materiaVisualizar',
        component: MateriaVisualizarComponent
      },
      {
        path: 'materiaCrear',
        component: MateriaCrearComponent
      },
      {
        path: 'materiaActualizar/:id',
        component: MateriaActualizarComponent
      }
    ]
  },
  {
    path:'cajero',
    component: CajeroMainComponent,
    canActivate: [
      IsCajeroService
    ],
    children:[
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'facturas'
      },
      {
        path: 'facturas',
        component: CajeroFacturasComponent
      },
      {
        path: 'gestionFactura/:id',
        component: CajeroGestionFacturaComponent
      },
      {
        path: 'itemFactura/:id',
        component: CajeroItemFacturaComponent
      }
    ]
  },
  {
    path:'cliente',
    component: ClienteMainComponent,
    canActivate: [
      IsClienteService
    ],
    children:[
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'facturas'
      },
      {
        path: 'facturas',
        component: ClienteFacturasComponent
      },
      {
        path: 'verFactura/:id',
        component: ClienteVerFacturaComponent
      }
    ]
  },
  {
    path: 'eventos',
    component: VisitanteMainComponent,
    children:[
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'visualizar'
      },
      {
        path: 'visualizar',
        component: EventoVisualizarComponent,
      },
      {
        path: 'vermaterias/:id',
        component: EventoVisualizarMateriaComponent
      },
      {
        path: 'crear',
        component: EventoCrearComponent,
        canActivate: [
          IsUsuarioService
        ],
      },
      {
        path: 'agregarMateria/:id',
        component: EventoAgregarMateriaComponent,
        canActivate: [
          IsUsuarioService
        ],
      }
    ]
  },
  {
    path: '**',
    component: NoEncontradoMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
