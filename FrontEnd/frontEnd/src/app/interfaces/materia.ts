import {Estudiante} from "./estudiante";

export interface Materia {
  id: number | string;
  nombre: string;
  codigo: string;
  descripcion: string;
  activo: boolean;
  fechaCreacion: string;
  numeroHorasPorSemana: number;
  idEstudiante: number | string | Estudiante;
}
