//

// App

import { Lesson } from '@/types';

export const Lesson16: Lesson = {
  id: 16,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra'],
      data: {
        button: {
          text: 'Oveja',
          image: 'oveja',
        },
        feedback: {
          correct: '¡Buen trabajo! La palabra oveja comienza con o',
        },
      },
    },
    {
      id: 2,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra'],
      data: {
        button: {
          text: 'Uva',
          image: 'uva',
        },
        feedback: {
          correct: '¡Buen trabajo! La palabra uva comienza con u',
        },
      },
    },
    {
      id: 3,
      type: 'select',
      instructions: ['Toca el botón'],
      data: {
        instructions: [
          '¿Si en la palabra olla, cambiamos o, por e, qué palabra formamos?',
        ],
        button: {
          text: ' ',
        },
        options: [
          {
            text: 'Ella',
            image: 'ella',
            correct: true,
          },
          {
            text: 'Isla',
            image: 'isla',
            correct: false,
          },
          {
            text: 'Iglesia',
            image: 'iglesia',
            correct: false,
          },
          {
            text: 'Insecto',
            image: 'insecto',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! La palabra es ella',
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
          '¿Si en la palabra ojo, cambiamos o, por a, qué palabra formamos?',
        ],
        button: {
          text: ' ',
        },
        options: [
          {
            text: 'Ajo',
            image: 'ajo',
            correct: true,
          },
          {
            text: 'Útiles',
            image: 'utiles',
            correct: false,
          },
          {
            text: 'Unicornio',
            image: 'unicornio',
            correct: false,
          },
          {
            text: 'Uña',
            image: 'uña',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! La palabra es ajo',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 5,
      type: 'super_select_adv',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['Selecciona las palabras que comienzan con o'],
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
            text: 'Ovillo',
            image: 'ovillo',
            correct: true,
          },
          {
            text: 'Oruga',
            image: 'oruga',
            correct: true,
          },
          {
            text: 'Estrella',
            image: 'estrella',
            correct: false,
          },
        ],
        feedback: {
          correct:
            '¡Buen trabajo! Las palabras oveja, ovillo y oruga comienzan con o',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 6,
      type: 'super_select_adv',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['Selecciona las palabras que comienzan con u'],
        button: {
          text: ' ',
        },
        options: [
          {
            text: 'Uva',
            image: 'uva',
            correct: true,
          },
          {
            text: 'Útiles',
            image: 'utiles',
            correct: true,
          },
          {
            text: 'Espejo',
            image: 'espejo',
            correct: false,
          },
          {
            text: 'Enano',
            image: 'enano',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! Las palabras uva y útiles comienzan con u',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 7,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['¿La palabra oveja comienza con o? ¿Sí o no?'],
        correct_answer: 'Sí',
        text: 'Oveja',
        image: 'oveja',
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
        instructions: ['¿La palabra uva comienza con u? ¿Sí o no?'],
        correct_answer: 'Sí',
        text: 'Uva',
        image: 'uva',
        feedback: {
          correct: '¡Buen trabajo!',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
  ],
};
