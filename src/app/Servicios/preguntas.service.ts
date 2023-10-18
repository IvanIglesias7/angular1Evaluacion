import { Injectable } from '@angular/core';
import { Pregunta } from '../Interfaces/pregunta';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  constructor() { }

  pregunta1 : Pregunta = {

    pregunta: '¿Como se define TypeScript?',
    respuesta: 'Se define como lenguaje de programación libre, que añade tipos estaticos y objetos basados en clases'
  }

  pregunta2: Pregunta = {
    pregunta: '¿Principal diferencia entre typescript y javascript?',
    respuesta: 'La principal diferencia es que en typescript tienes que definir el tipo'
  }

  pregunta3: Pregunta = {
    pregunta: 'Tipos basicos de Typescript',
    respuesta: 'boolean, number, string, any'
  }

  pregunta4: Pregunta = {
    pregunta: '¿Con qué tres elementos podemos crear un tipo personalizado en TypeScript?',
    respuesta: 'Con el number, boolean y string'
  }

  pregunta5: Pregunta = {
    pregunta: '¿Puedo ejecutar TypeScript en un navegador? Explica tu respuesta.',
    respuesta: 'No, se tiene que compilar primero a js'
  }

  pregunta6: Pregunta =  {
    pregunta: 'Entonces, ¿cómo es que puedo ver con las herramientas del desarrollador del navegador los archivo ts?' ,
    respuesta: ''
  }

  pregunta7: Pregunta = {
    pregunta : '¿Para qué sirve el archivo tsconfig.json?',
    respuesta : 'Para ver la configuracion del proyecto con sus diferentes directivas'
  }

  listaPreguntas: Pregunta[] = [this.pregunta1, this.pregunta2, this.pregunta3, this.pregunta4, this.pregunta5, this.pregunta6, this.pregunta7];

  getPreguntas(): Pregunta[]{
    return this.listaPreguntas;
  }


}
