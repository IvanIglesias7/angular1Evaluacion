import { Injectable } from '@angular/core';
import { Asignatura } from '../Interfaces/asignatura';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  constructor() { }

  asignatura1: Asignatura = {
    nombre : 'Desarrollo Web',
    siglas : 'DWS',
    profesor : 'Don Regino'
  }

  asignatura2: Asignatura = {

    nombre : 'Desarrollo Web Interfaz',
    siglas: 'DWI',
    profesor: 'Don Regino'
  }

  ListaAsignaturas: Asignatura[] = [this.asignatura1, this.asignatura2];

  getAsignaturas(): Asignatura[]{
    return this.ListaAsignaturas
  }
  
}
