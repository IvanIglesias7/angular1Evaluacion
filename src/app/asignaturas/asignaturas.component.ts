import { Component, inject } from '@angular/core';
import { AsignaturasService } from '../Servicios/asignaturas.service';
import { Asignatura } from '../Interfaces/asignatura';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent {

  listaAsignaturas : Asignatura[] = [];
  asignaturaServicio : AsignaturasService = inject(AsignaturasService);

  constructor(){
    this.listaAsignaturas = this.asignaturaServicio.getAsignaturas(); 
  }
}
