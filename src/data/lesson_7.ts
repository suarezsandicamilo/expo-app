//

// App

import { Lesson } from '@/types';

export const Lesson7: Lesson = {
  id: 7,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra'],
      data: {
        button: {
          text: 'Isla, is, la',
          image: 'isla',
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
          text: 'Escalera, es, ca, le, ra',
          image: 'escalera',
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
          '¿Si a la palabra is, le agregamos la, qué palabra formamos?',
        ],
        button: {
          text: ' ',
        },
        options: [
          {
            text: 'Isla',
            image: 'isla',
            correct: true,
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
          {
            text: 'Edificio',
            image: 'edificio',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! La palabra es isla',
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
          '¿Si a la palabra o, le agregamos so, qué palabra formamos?',
        ],
        button: {
          text: ' ',
        },
        options: [
          {
            text: 'Oso',
            image: 'oso',
            correct: true,
          },
          {
            text: 'Olla',
            image: 'olla',
            correct: false,
          },
          {
            text: 'Ovillo',
            image: 'ovillo',
            correct: false,
          },
          {
            text: 'Ola',
            image: 'ola',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! La palabra es oso',
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
          text: 'O, la',
          image: 'ola',
        },
        count: 2,
        feedback: {
          correct: '¡Buen trabajo! La palabra tiene dos sílabas',
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
          text: 'I, gua, na',
          image: 'iguana',
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
            text: 'Is, la',
            image: 'isla',
          },
          {
            text: 'Ahora en otro orden, la, is',
            image: 'isla2',
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
            text: 'Cu, na',
            image: 'cuna',
          },
          {
            text: 'Ahora en otro orden, na, cu',
            image: 'cuna2',
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
        instructions: ['¿La palabra escalera tiene la sílaba la? ¿Sí o no?'],
        correct_answer: 'No',
        text: 'Escalera',
        image: 'escalera',
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
        instructions: ['¿La palabra edificio tiene la sílaba e? ¿Sí o no?'],
        correct_answer: 'Sí',
        text: 'Edificio',
        image: 'edificio',
        feedback: {
          correct: '¡Buen trabajo!',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
  ],
};
