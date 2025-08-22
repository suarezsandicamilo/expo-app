//

// App

import { Lesson } from '@/types';

export const Lesson13: Lesson = {
  id: 13,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra'],
      data: {
        button: {
          text: 'Abeja',
          image: 'abeja',
        },
        feedback: {
          correct: '¡Buen trabajo! La palabra abeja comienza con a',
        },
      },
    },
    {
      id: 2,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra'],
      data: {
        button: {
          text: 'Anillo',
          image: 'anillo',
        },
        feedback: {
          correct: '¡Buen trabajo! La palabra anillo comienza con a',
        },
      },
    },
    {
      id: 3,
      type: 'select',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['Selecciona la palabra que comienza con a'],
        button: {
          text: ' ',
        },
        options: [
          {
            text: 'Abeja',
            image: 'abeja',
            correct: true,
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
          {
            text: 'Imán',
            image: 'iman',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! La palabra abeja comienza con a',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 4,
      type: 'select',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['Selecciona la palabra que comienza con a'],
        button: {
          text: ' ',
        },
        options: [
          {
            text: 'Anillo',
            image: 'anillo',
            correct: true,
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
          {
            text: 'Imán',
            image: 'iman',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! La palabra anillo comienza con a',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 5,
      type: 'super_select_adv',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['Selecciona las palabras que comienzan con a'],
        button: {
          text: ' ',
        },
        options: [
          {
            text: 'Abeja',
            image: 'abeja',
            correct: true,
          },
          {
            text: 'Avión',
            image: 'avion',
            correct: true,
          },
          {
            text: 'Ave',
            image: 'ave',
            correct: true,
          },
          {
            text: 'Uva',
            image: 'uva',
            correct: false,
          },
        ],
        feedback: {
          correct:
            '¡Buen trabajo! Las palabras abeja, avión y ave comienzan con a',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 6,
      type: 'super_select_adv',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['Selecciona las palabras que comienzan con a'],
        button: {
          text: ' ',
        },
        options: [
          {
            text: 'Anillo',
            image: 'anillo',
            correct: true,
          },
          {
            text: 'Abeja',
            image: 'abeja',
            correct: true,
          },
          {
            text: 'Oso',
            image: 'oso',
            correct: false,
          },
          {
            text: 'Imán',
            image: 'iman',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! Las palabras anillo y abeja comienzan con a',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 7,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['¿La palabra abeja comienza con a? ¿Sí o no?'],
        correct_answer: 'Sí',
        text: 'Abeja',
        image: 'abeja',
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
        instructions: ['¿La palabra imán comienza con a? ¿Sí o no?'],
        correct_answer: 'No',
        text: 'Imán',
        image: 'iman',
        feedback: {
          correct: '¡Buen trabajo!',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
  ],
};
