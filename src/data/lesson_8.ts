//

// App

import { Lesson } from '@/types';

export const Lesson8: Lesson = {
  id: 8,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra'],
      data: {
        button: {
          text: 'Oruga, o, ru, ga',
          image: 'oruga',
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
          text: 'Oveja, o, ve, ja',
          image: 'oveja',
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
          '¿Si en la palabra oveja, cambiamos veja, por reja, qué palabra formamos?',
        ],
        button: {
          text: '',
        },
        options: [
          {
            text: 'Oreja',
            image: 'oreja',
            correct: true,
          },
          {
            text: 'Ojo',
            image: 'ojo',
            correct: false,
          },
          {
            text: 'Ovillo',
            image: 'ovillo',
            correct: false,
          },
          {
            text: 'Oruga',
            image: 'oruga',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! La palabra es oreja',
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
          '¿Si en la palabra taza, cambiamos ta, por ca, qué palabra formamos?',
        ],
        button: {
          text: '',
        },
        options: [
          {
            text: 'Casa',
            image: 'casa',
            correct: true,
          },
          {
            text: 'Unicornio',
            image: 'unicornio',
            correct: false,
          },
          {
            text: 'Asno',
            image: 'asno',
            correct: false,
          },
          {
            text: 'Plato',
            image: 'plato',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! La palabra es casa',
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
            image: 'plato2',
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
