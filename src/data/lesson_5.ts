//

// App

import { Lesson } from '@/types';

export const Lesson5: Lesson = {
  id: 5,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra'],
      data: {
        button: {
          text: 'Abeja, aa, beh, ja',
          image: 'abeja',
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
          text: 'Ave, aa, ve',
          image: 'ave',
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
          '¿Si a la palabra zapa, le agregamos to, qué palabra formamos?',
        ],
        button: {
          text: ' ',
        },
        options: [
          {
            text: 'Zapato',
            image: 'zapato',
            correct: true,
          },
          {
            text: 'Plato',
            image: 'plato',
            correct: false,
          },
          {
            text: 'Oreja',
            image: 'oreja',
            correct: false,
          },
          {
            text: 'Ángel',
            image: 'angel',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! La palabra es zapato',
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
          '¿Si a la palabra uni, le agregamos cornio, qué palabra formamos?',
        ],
        button: {
          text: ' ',
        },
        options: [
          {
            text: 'Útiles',
            image: 'utiles',
            correct: false,
          },
          {
            text: 'Unicornio',
            image: 'unicornio',
            correct: true,
          },
          {
            text: 'Estufa',
            image: 'estufa',
            correct: false,
          },
          {
            text: 'Uña',
            image: 'uña',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! La palabra es unicornio',
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
          text: 'O, ru, ga',
          image: 'oruga',
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
          text: 'O, ve, ja',
          image: 'oveja',
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
            text: 'Pla, to',
            image: 'plato',
          },
          {
            text: 'Ahora en otro orden, to, pla',
            image: 'plato',
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
            text: 'Es, tu, fa',
            image: 'estufa',
          },
          {
            text: 'Ahora en otro orden, fa, tu, es',
            image: 'estufa2',
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
        instructions: ['¿La palabra taza tiene la sílaba ta? ¿Sí o no?'],
        correct_answer: 'Sí',
        text: 'Taza',
        image: 'taza',
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
        instructions: ['¿La palabra zapato tiene la sílaba ta? ¿Sí o no?'],
        correct_answer: 'No',
        text: 'Zapato',
        image: 'zapato',
        feedback: {
          correct: '¡Buen trabajo!',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
  ],
};
