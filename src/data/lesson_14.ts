//

// App

import { Lesson } from '@/types';

export const Lesson14: Lesson = {
  id: 14,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra'],
      data: {
        button: {
          text: 'Estrella',
          image: 'estrella',
        },
        feedback: {
          correct: '¡Buen trabajo! La palabra estrella comienza con e',
        },
      },
    },
    {
      id: 2,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra'],
      data: {
        button: {
          text: 'Elefante',
          image: 'elefante',
        },
        feedback: {
          correct: '¡Buen trabajo! La palabra elefante comienza con e',
        },
      },
    },
    {
      id: 3,
      type: 'select',
      instructions: ['Toca el botón'],
      data: {
        instructions: [
          '¿Si en la palabra abeja, cambiamos a, por o, qué palabra formamos?',
        ],
        button: {
          text: ' ',
        },
        options: [
          {
            text: 'Oveja',
            image: 'oveja',
            correct: true,
          },
          {
            text: 'Avión',
            image: 'avion',
            correct: false,
          },
          {
            text: 'Uva',
            image: 'uva',
            correct: false,
          },
          {
            text: 'Oso',
            image: 'oso',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! La palabra es oveja',
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
          '¿Si en la palabra ala, cambiamos a, por o, qué palabra formamos?',
        ],
        button: {
          text: ' ',
        },
        options: [
          {
            text: 'Ola',
            image: 'ola',
            correct: true,
          },
          {
            text: 'Abeja',
            image: 'abeja',
            correct: false,
          },
          {
            text: 'Árbol',
            image: 'arbol',
            correct: false,
          },
          {
            text: 'Anillo',
            image: 'anillo',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! La palabra es ola',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 5,
      type: 'super_select_adv',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['Selecciona las palabras que comienzan con e'],
        button: {
          text: ' ',
        },
        options: [
          {
            text: 'Estrella',
            image: 'estrella',
            correct: true,
          },
          {
            text: 'Espada',
            image: 'espada',
            correct: true,
          },
          {
            text: 'Escoba',
            image: 'escoba',
            correct: true,
          },
          {
            text: 'Iguana',
            image: 'iguana',
            correct: false,
          },
        ],
        feedback: {
          correct:
            '¡Buen trabajo! Las palabras estrella, espada y escoba comienzan con e',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 6,
      type: 'super_select_adv',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['Selecciona las palabras que comienzan con e'],
        button: {
          text: ' ',
        },
        options: [
          {
            text: 'Elefante',
            image: 'elefante',
            correct: true,
          },
          {
            text: 'Espejo',
            image: 'espejo',
            correct: true,
          },
          {
            text: 'Enano',
            image: 'enano',
            correct: true,
          },
          {
            text: 'Iguana',
            image: 'iguana',
            correct: false,
          },
        ],
        feedback: {
          correct:
            '¡Buen trabajo! Las palabras elefante, espejo y enano comienzan con e',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 7,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['¿La palabra estrella comienza con e? ¿Sí o no?'],
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
      id: 8,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['¿La palabra ardilla comienza con e? ¿Sí o no?'],
        correct_answer: 'No',
        text: 'Ardilla',
        image: 'ardilla',
        feedback: {
          correct: '¡Buen trabajo!',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
  ],
};
