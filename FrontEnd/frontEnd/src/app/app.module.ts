import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormuEstudianteComponent } from './componentes/formu-estudiante/formu-estudiante.component';
import { FormuMateriaComponent } from './componentes/formu-materia/formu-materia.component';
import { FormuEventoComponent } from './componentes/formu-evento/formu-evento.component';
import { FormuFacturaComponent } from './componentes/formu-factura/formu-factura.component';
import { ComponenteMateriasComponent } from './componentes/componente-materias/componente-materias.component';
import { FormuUsuarioComponent } from './componentes/formu-usuario/formu-usuario.component';
import {IsAdministradorService} from "./servicios/guards/is-administrador.service";
import {IsCajeroService} from "./servicios/guards/is-cajero.service";
import {IsClienteService} from "./servicios/guards/is-cliente.service";
import {IsUsuarioService} from "./servicios/guards/is-usuario.service";
import {AutenticarUsuarioService} from "./servicios/autenticarse/autenticar-usuario.service";
import {EstudianteRestService} from "./servicios/Rest/EstudianteRest/estudiante-rest.service";
import {EventoMateriaRestService} from "./servicios/Rest/EventoMateriaRest/evento-materia-rest.service";
import {EventoRestService} from "./servicios/Rest/EventoRest/evento-rest.service";
import {FactuCabeceraRestService} from "./servicios/Rest/Factura-Rest/FacCabeceraRest/factu-cabecera-rest.service";
import {FactuDetalleRestService} from "./servicios/Rest/Factura-Rest/FacDetalleRest/factu-detalle-rest.service";
import {MateriaRestService} from "./servicios/Rest/MateriaRest/materia-rest.service";
import {RolRestService} from "./servicios/Rest/RolRest/rol-rest.service";
import {UsuarioRestService} from "./servicios/Rest/UsuarioRest/usuario-rest.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { UsuarioMainComponent } from './rutas/rutas-principales/usuario-main/usuario-main.component';
import { AdministradorMainComponent } from './rutas/rutas-principales/administrador-main/administrador-main.component';
import { CajeroMainComponent } from './rutas/rutas-principales/cajero-main/cajero-main.component';
import { ClienteMainComponent } from './rutas/rutas-principales/cliente-main/cliente-main.component';
import { UsuarioVisualizarComponent } from './rutas/rutas-usuario/usuario-visualizar/usuario-visualizar.component';
import { UsuarioRegistrarComponent } from './rutas/rutas-usuario/usuario-registrar/usuario-registrar.component';
import { UsuarioLoginComponent } from './rutas/rutas-usuario/usuario-login/usuario-login.component';
import { UsuarioGestionRolComponent } from './rutas/rutas-usuario/usuario-gestion-rol/usuario-gestion-rol.component';

@NgModule({
  declarations: [
    AppComponent,
    FormuEstudianteComponent,
    FormuMateriaComponent,
    FormuEventoComponent,
    FormuFacturaComponent,
    ComponenteMateriasComponent,
    FormuUsuarioComponent,
    UsuarioMainComponent,
    AdministradorMainComponent,
    CajeroMainComponent,
    ClienteMainComponent,
    UsuarioVisualizarComponent,
    UsuarioRegistrarComponent,
    UsuarioLoginComponent,
    UsuarioGestionRolComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    IsAdministradorService,
    IsCajeroService,
    IsClienteService,
    IsUsuarioService,
    AutenticarUsuarioService,
    EstudianteRestService,
    EventoMateriaRestService,
    EventoRestService,
    FactuCabeceraRestService,
    FactuDetalleRestService,
    MateriaRestService,
    RolRestService,
    UsuarioRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
