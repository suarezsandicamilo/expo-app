//

// App

import { Lesson } from '@/types';

export const Lesson9: Lesson = {
  id: 9,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra'],
      data: {
        button: {
          text: 'Abeja, a, beja',
          image: 'abeja',
        },
        feedback: {
          correct: '¡Buen trabajo! La palabra abeja rima con eja',
        },
      },
    },
    {
      id: 2,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra'],
      data: {
        button: {
          text: 'Anillo, a, nillo',
          image: 'anillo',
        },
        feedback: {
          correct: '¡Buen trabajo! La palabra anillo rima con illo',
        },
      },
    },
    {
      id: 3,
      type: 'select',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['Selecciona la palabra que rima con eja'],
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
            text: 'Ave',
            image: 'ave',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! La palabra oveja rima con eja',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 4,
      type: 'select',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['Selecciona la palabra que rima con arco'],
        button: {
          text: ' ',
        },
        options: [
          {
            text: 'Martillo',
            image: 'martillo',
            correct: false,
          },
          {
            text: 'Imán',
            image: 'iman',
            correct: false,
          },
          {
            text: 'Barco',
            image: 'barco',
            correct: true,
          },
          {
            text: 'Oso',
            image: 'oso',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! La palabra barco rima con arco',
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
            text: 'Abeja, a, beja',
            image: 'abeja',
          },
          {
            text: 'Oreja, o, reja',
            image: 'oreja',
          },
        ],
        feedback: {
          correct: ['¡Buen trabajo! Las palabras abeja y oreja riman con eja'],
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
            text: 'Anillo, a, nillo',
            image: 'anillo',
          },
          {
            text: 'Martillo, mar, tillo',
            image: 'martillo',
          },
        ],
        feedback: {
          correct: [
            '¡Buen trabajo! Las palabras anillo y martillo riman con illo',
          ],
        },
      },
    },
    {
      id: 7,
      type: 'super_select_adv',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['Selecciona las palabras que riman con eja'],
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
            text: 'Oreja',
            image: 'oreja',
            correct: true,
          },
          {
            text: 'Ave',
            image: 'ave',
            correct: false,
          },
          {
            text: 'Uva',
            image: 'uva',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! Las palabras abeja y oreja riman con eja',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 8,
      type: 'super_select_adv',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['Selecciona las palabras que riman con arco'],
        button: {
          text: ' ',
        },
        options: [
          {
            text: 'Arco',
            image: 'arco',
            correct: true,
          },
          {
            text: 'Imán',
            image: 'iman',
            correct: false,
          },
          {
            text: 'Barco',
            image: 'barco',
            correct: true,
          },
          {
            text: 'Ave',
            image: 'ave',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! Las palabras arco y barco riman con arco',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 9,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['¿La palabra barco rima con arco? ¿Sí o no?'],
        correct_answer: 'Sí',
        text: 'Barco',
        image: 'barco',
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
        instructions: ['¿La palabra abeja rima con oreja? ¿Sí o no?'],
        correct_answer: 'Sí',
        text: 'Abeja',
        image: 'abeja',
        feedback: {
          correct: '¡Buen trabajo!',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
  ],
};
