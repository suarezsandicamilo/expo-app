//

// App

import { Lesson } from '@/types';

export const Lesson10: Lesson = {
  id: 10,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra'],
      data: {
        button: {
          text: 'Manzana, man, zana',
          image: 'manzana',
        },
        feedback: {
          correct: '¡Buen trabajo! La palabra manzana rima con ana',
        },
      },
    },
    {
      id: 2,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra'],
      data: {
        button: {
          text: 'Espejo, es, pejo',
          image: 'espejo',
        },
        feedback: {
          correct: '¡Buen trabajo! La palabra espejo rima con eejo',
        },
      },
    },
    {
      id: 3,
      type: 'select',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['Selecciona la palabra que rima con illa'],
        button: {
          text: '',
        },
        options: [
          {
            text: 'Ardilla',
            image: 'ardilla',
            correct: true,
          },
          {
            text: 'Estrella',
            image: 'estrella',
            correct: false,
          },
          {
            text: 'Escoba',
            image: 'escoba',
            correct: false,
          },
          {
            text: 'Conejo',
            image: 'conejo',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! La palabra ardilla rima con illa',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 4,
      type: 'select',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['Selecciona la palabra que rima con ante'],
        button: {
          text: '',
        },
        options: [
          {
            text: 'Elefante',
            image: 'elefante',
            correct: true,
          },
          {
            text: 'Araña',
            image: 'araña',
            correct: false,
          },
          {
            text: 'Barco',
            image: 'barco',
            correct: false,
          },
          {
            text: 'Oso',
            image: 'oso',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! La palabra elefante rima con ante',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 5,
      type: 'super_tap',
      instructions: ['Toca las cartas y escucha las palabras'],
      data: {
        buttons: [
          {
            text: 'Manzana, man, zana',
            image: 'manzana',
          },
          {
            text: 'Campana, cam, pana',
            image: 'campana',
          },
        ],
        feedback: {
          correct: [
            '¡Buen trabajo! Las palabras manzana y campana riman con ana',
          ],
        },
      },
    },
    {
      id: 6,
      type: 'super_tap',
      instructions: ['Toca las cartas y escucha las palabras'],
      data: {
        buttons: [
          {
            text: 'Espejo, es, pejo',
            image: 'espejo',
          },
          {
            text: 'Conejo, co, nejo',
            image: 'conejo',
          },
        ],
        feedback: {
          correct: [
            '¡Buen trabajo! Las palabras espejo y conejo riman con eejo',
          ],
        },
      },
    },
    {
      id: 7,
      type: 'super_select_adv',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['Selecciona las palabras que riman con eejo'],
        button: {
          text: '',
        },
        options: [
          {
            text: 'Conejo',
            image: 'conejo',
            correct: true,
          },
          {
            text: 'Ardilla',
            image: 'ardilla',
            correct: false,
          },
          {
            text: 'Espejo',
            image: 'espejo',
            correct: true,
          },
          {
            text: 'Espada',
            image: 'espada',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! Las palabras conejo y espejo riman con eejo',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 8,
      type: 'super_select_adv',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['Selecciona las palabras que riman con ana'],
        button: {
          text: '',
        },
        options: [
          {
            text: 'Manzana',
            image: 'manzana',
            correct: true,
          },
          {
            text: 'Estrella',
            image: 'estrella',
            correct: false,
          },
          {
            text: 'Iguana',
            image: 'iguana',
            correct: true,
          },
          {
            text: 'Campana',
            image: 'campana',
            correct: true,
          },
        ],
        feedback: {
          correct:
            '¡Buen trabajo! Las palabras manzana, campana e iguana riman con ana',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 9,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['¿La palabra manzana rima con campana? ¿Sí o no?'],
        correct_answer: 'sí',
        text: 'Manzana',
        image: 'manzana',
        feedback: {
          correct: '¡Buen trabajo!',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 10,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['¿La palabra iguana rima con espejo? ¿Sí o no?'],
        correct_answer: 'No',
        text: 'Iguana',
        image: 'iguana',
        feedback: {
          correct: '¡Buen trabajo!',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
  ],
};
