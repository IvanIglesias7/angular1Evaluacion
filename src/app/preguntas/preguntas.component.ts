import { Component, inject } from '@angular/core';
import { Pregunta } from '../Interfaces/pregunta';
import { PreguntasService } from '../Servicios/preguntas.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent {

  listaPreguntas : Pregunta[] = [];
  servicioPreguntas: PreguntasService = inject(PreguntasService);

  constructor(){
    this.listaPreguntas = this.servicioPreguntas.getPreguntas();
  }
}
