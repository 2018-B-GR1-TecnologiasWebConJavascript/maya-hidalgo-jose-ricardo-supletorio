import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Evento} from "../../../interfaces/evento";
import {Materia} from "../../../interfaces/materia";
import {EventoPorMateria} from "../../../interfaces/evento-por-materia";
import {MateriaRestService} from "../../../servicios/Rest/MateriaRest/materia-rest.service";
import {EventoRestService} from "../../../servicios/Rest/EventoRest/evento-rest.service";
import {EventoMateriaRestService} from "../../../servicios/Rest/EventoMateriaRest/evento-materia-rest.service";
import {Estudiante} from "../../../interfaces/estudiante";

@Component({
  selector: 'app-evento-agregar-materia',
  templateUrl: './evento-agregar-materia.component.html',
  styleUrls: ['./evento-agregar-materia.component.scss']
})
export class EventoAgregarMateriaComponent implements OnInit {

  evento:Evento=<Evento> {};
  materias: Materia[] = [];
  materiasUsuario: Materia[]= [];
  eventosAuxmaterias:EventoPorMateria[] = [];
  eventoMateria: EventoPorMateria=<EventoPorMateria>{};
  idMateriaseleccionado:string ="";
  error:string = "";
  error2:string = "";

  constructor(
    private readonly _materiaRest:MateriaRestService,
    private readonly _activateRoute: ActivatedRoute,
    private readonly _objetoRest: EventoRestService,
    private readonly _eventoMateriaRest: EventoMateriaRestService
  ) { }

  ngOnInit() {
    const rutaActiva$ = this._activateRoute.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const materiasEvento$ = this._objetoRest.findhijosEvento();
          materiasEvento$.subscribe(
            (m:EventoPorMateria[])=>{
              const obj = m.filter(
                a => {
                  const b = <Evento> a.idEvento;
                  try{
                    if(b.id == parametros.id)
                      return a;
                  }catch (e) { }
                }
              );
              this.eventosAuxmaterias = obj;
              this.materias = obj.map( m => <Materia> m.idMateria);
            }
          );
          const evento$ = this._objetoRest.findById(parametros.id);
          evento$.subscribe(
            (obj:Evento) => {
              this.evento = obj;
              this.eventoMateria.idEvento = obj.id;
            }
          );
        }
      );
    const  materias$ = this._materiaRest.findAll();
    materias$.subscribe(
      (materi:Materia[])=> {
        const mate= materi.filter(
          l=>{
            const estudiante = <Estudiante>l.idEstudiante;
            if(estudiante.idUsuario){
              const usuario = <string> estudiante.idUsuario;
              if(usuario == localStorage.getItem("Usuario")){
                return l;
              }
            }
          }
        );
        this.materiasUsuario = mate;
      }
    );
  }
  seleccionarLibro(){
    if(this.idMateriaseleccionado)
      if(!this.materias.find( m=> m.id == this.idMateriaseleccionado)){
        this.eventoMateria.idMateria = this.idMateriaseleccionado;
      }else{
        this.eventoMateria.idMateria = null;
        alert("El evento ya esta registrado");
        this.idMateriaseleccionado = "";
      }
  }

  agregarHijoEvento(){
    this.error ="";
    if(this.eventoMateria.idMateria && this.eventoMateria.precioBase){
      if(this.eventoMateria.precioBase>0){
        const eventol$ = this._eventoMateriaRest.create(this.eventoMateria);
        eventol$.subscribe(
          e=> {
            this.eventosAuxmaterias.push(e);
            this.materias.push(<Materia>e.idMateria);
          }
        );
      }else
        this.error += "El precio base debe ser superior a $0";
    }else
      this.error += "Seleccione el libro e ingrese el precio base (campos obligatorios)";
  }

  eliminar(id:number|string){
    this.error2 = "";
    if(this.materiasUsuario.findIndex(m=> m.id === id) != -1){
      const indice = this.eventosAuxmaterias.filter(
        m=> {
          const l= <Materia>m.idMateria;
          if(l.id == id)
            return m;
        }
      );
      this.eventosAuxmaterias.splice(this.eventosAuxmaterias.findIndex(m => m.id === indice[0].id),1);
      const eliminar$ = this._eventoMateriaRest.delete(indice[0].id);
      eliminar$.subscribe(
        el=> {
          const elim= <Materia> el.idMateria;
          this.materias.splice(this.materias.findIndex( l=> l.id === elim.id),1)
        }
      );
    }else{
      this.error2 += "No puede eliminar la materia, registrado por otro usuario";
    }
  }

}
