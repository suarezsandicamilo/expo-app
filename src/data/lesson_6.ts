//

// App

import { Lesson } from '@/types';

export const Lesson6: Lesson = {
  id: 6,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra'],
      data: {
        button: {
          text: 'Espada, es, pa, da',
          image: 'espada',
        },
        feedback: {
          correct: '¡Buen trabajo!',
        },
      },
    },
    {
      id: 2,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra'],
      data: {
        button: {
          text: 'Erizo, e, ri, zo',
          image: 'erizo',
        },
        feedback: {
          correct: '¡Buen trabajo!',
        },
      },
    },
    {
      id: 3,
      type: 'select',
      instructions: ['Toca el botón'],
      data: {
        instructions: [
          '¿Si en la palabra estrella, cambiamos trella, por pada, qué palabra formamos?',
        ],
        button: {
          text: ' ',
        },
        options: [
          {
            text: 'Espada',
            image: 'espada',
            correct: true,
          },
          {
            text: 'Manzana',
            image: 'manzana',
            correct: false,
          },
          {
            text: 'Conejo',
            image: 'conejo',
            correct: false,
          },
          {
            text: 'Empanada',
            image: 'empanada',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! La palabra es espada',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 4,
      type: 'select',
      instructions: ['Toca el botón'],
      data: {
        instructions: [
          '¿Si en la palabra enano, cambiamos nano, por rizo, qué palabra formamos?',
        ],
        button: {
          text: ' ',
        },
        options: [
          {
            text: 'Erizo',
            image: 'erizo',
            correct: true,
          },
          {
            text: 'Elefante',
            image: 'elefante',
            correct: false,
          },
          {
            text: 'Iguana',
            image: 'iguana',
            correct: false,
          },
          {
            text: 'Estufa',
            image: 'estufa',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! La palabra es erizo',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 5,
      type: 'count',
      instructions: ['Toca la carta y escucha la palabra'],
      data: {
        instructions: [
          'Toca las burbujas y cuenta el número de sílabas en la palabra',
        ],
        button: {
          text: 'Es, co, bah',
          image: 'escoba',
        },
        count: 3,
        feedback: {
          correct: '¡Buen trabajo! La palabra tiene tres sílabas',
        },
      },
    },
    {
      id: 6,
      type: 'count',
      instructions: ['Toca la carta y escucha la palabra'],
      data: {
        instructions: [
          'Toca las burbujas y cuenta el número de sílabas en la palabra',
        ],
        button: {
          text: 'Es, pa, da',
          image: 'espada',
        },
        count: 3,
        feedback: {
          correct: '¡Buen trabajo! La palabra tiene tres sílabas',
        },
      },
    },
    {
      id: 7,
      type: 'super_tap',
      instructions: ['Toca las cartas y escucha las palabras'],
      data: {
        buttons: [
          {
            text: 'Es, co, bah',
            image: 'escoba',
          },
          {
            text: 'Ahora en otro orden, bah, co, es',
            image: 'escoba2',
          },
        ],
        feedback: {
          correct: ['¡Buen trabajo!'],
        },
      },
    },
    {
      id: 8,
      type: 'super_tap',
      instructions: ['Toca las cartas y escucha las palabras'],
      data: {
        buttons: [
          {
            text: 'Ar, di, lla',
            image: 'ardilla',
          },
          {
            text: 'Ahora en otro orden, lla, di, ar',
            image: 'ardilla2',
          },
        ],
        feedback: {
          correct: ['¡Buen trabajo!'],
        },
      },
    },
    {
      id: 9,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['¿La palabra estrella tiene la sílaba es? ¿Sí o no?'],
        correct_answer: 'Sí',
        text: 'Estrella',
        image: 'estrella',
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
        instructions: ['¿La palabra campana tiene la sílaba ra? ¿Sí o no?'],
        correct_answer: 'No',
        text: 'Campana',
        image: 'campana',
        feedback: {
          correct: '¡Buen trabajo!',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
  ],
};
