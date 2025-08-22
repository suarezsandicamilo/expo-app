//

// App

import { Lesson } from '@/types';

export const Lesson11: Lesson = {
  id: 11,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra'],
      data: {
        button: {
          text: 'Gato, ga, to',
          image: 'gato',
        },
        feedback: {
          correct: '¡Buen trabajo! La palabra gato rima con ato',
        },
      },
    },
    {
      id: 2,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra'],
      data: {
        button: {
          text: 'Luna, lu, na',
          image: 'luna',
        },
        feedback: {
          correct: '¡Buen trabajo! La palabra luna rima con una',
        },
      },
    },
    {
      id: 3,
      type: 'select',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['Selecciona la palabra que rima con ecto'],
        button: {
          text: '',
        },
        options: [
          {
            text: 'Cuna',
            image: 'cuna',
            correct: false,
          },
          {
            text: 'Insecto',
            image: 'insecto',
            correct: true,
          },
          {
            text: 'Isla',
            image: 'isla',
            correct: false,
          },
          {
            text: 'Conejo',
            image: 'conejo',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! La palabra insecto rima con ecto',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 4,
      type: 'select',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['Selecciona la palabra que rima con una'],
        button: {
          text: '',
        },
        options: [
          {
            text: 'Olla',
            image: 'olla',
            correct: false,
          },
          {
            text: 'Luna',
            image: 'luna',
            correct: true,
          },
          {
            text: 'Edificio',
            image: 'edificio',
            correct: false,
          },
          {
            text: 'Iglú',
            image: 'iglu',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! La palabra luna rima con una',
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
            text: 'Gato, ga, to',
            image: 'gato',
          },
          {
            text: 'Pato, pa, to',
            image: 'pato',
          },
        ],
        feedback: {
          correct: ['¡Buen trabajo! Las palabras gato y pato riman con ato'],
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
            text: 'Luna, lu, na',
            image: 'luna',
          },
          {
            text: 'Cuna, ku, na',
            image: 'cuna',
          },
        ],
        feedback: {
          correct: ['¡Buen trabajo! Las palabras luna y cuna riman con una'],
        },
      },
    },
    {
      id: 7,
      type: 'super_select_adv',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['Selecciona las palabras que riman con una'],
        button: {
          text: '',
        },
        options: [
          {
            text: 'Olla',
            image: 'olla',
            correct: false,
          },
          {
            text: 'Luna',
            image: 'luna',
            correct: true,
          },
          {
            text: 'Isla',
            image: 'isla',
            correct: false,
          },
          {
            text: 'Cuna',
            image: 'cuna',
            correct: true,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! Las palabras luna y cuna riman con una',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 8,
      type: 'super_select_adv',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['Selecciona las palabras que riman con ato'],
        button: {
          text: '',
        },
        options: [
          {
            text: 'Gato',
            image: 'gato',
            correct: true,
          },
          {
            text: 'Escalera',
            image: 'escalera',
            correct: false,
          },
          {
            text: 'Pato',
            image: 'pato',
            correct: true,
          },
          {
            text: 'Insecto',
            image: 'insecto',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! Las palabras gato y pato riman con ato',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 9,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['¿La palabra gato rima con pato? ¿Sí o no?'],
        correct_answer: 'Sí',
        text: 'Gato',
        image: 'gato',
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
        instructions: ['¿La palabra isla rima con pato? ¿Sí o no?'],
        correct_answer: 'No',
        text: 'Isla',
        image: 'isla',
        feedback: {
          correct: '¡Buen trabajo!',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
  ],
};
