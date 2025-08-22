//

// App

import { Lesson } from '@/types';

export const Lesson3: Lesson = {
  id: 3,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la oración'],
      data: {
        button: {
          text: 'El gato maúlla',
          image: 'gato',
        },
        feedback: {
          correct: '¡Buen trabajo!',
        },
      },
    },
    {
      id: 2,
      type: 'tap',
      instructions: ['Toca la carta y escucha la oración'],
      data: {
        button: {
          text: 'La luna brilla',
          image: 'luna',
        },
        feedback: {
          correct: '¡Buen trabajo!',
        },
      },
    },
    {
      id: 3,
      type: 'select',
      instructions: ['Toca el botón y escucha la oración'],
      data: {
        instructions: [
          'Selecciona la carta que tiene la palabra que escuchaste',
        ],
        button: {
          text: 'El pato nada',
        },
        options: [
          {
            text: 'Pato',
            image: 'pato',
            correct: true,
          },
          {
            text: 'Olla',
            image: 'olla',
            correct: false,
          },
          {
            text: 'Gato',
            image: 'gato',
            correct: false,
          },
          {
            text: 'Esquimal',
            image: 'esquimal',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! La oración tiene la palabra pato',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 4,
      type: 'select',
      instructions: ['Toca el botón y escucha la oración'],
      data: {
        instructions: [
          'Selecciona la carta que tiene la palabra que escuchaste',
        ],
        button: {
          text: 'La cuna es celeste',
        },
        options: [
          {
            text: 'Cuna',
            image: 'cuna',
            correct: true,
          },
          {
            text: 'Pato',
            image: 'pato',
            correct: false,
          },
          {
            text: 'Luna',
            image: 'luna',
            correct: false,
          },
          {
            text: 'Edificio',
            image: 'edificio',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! La oración tiene la palabra cuna',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 5,
      type: 'count',
      instructions: ['Toca la carta y escucha la oración'],
      data: {
        instructions: [
          'Toca las burbujas y cuenta el número de palabras en la oración',
        ],
        button: {
          text: 'El pato nada',
          image: 'pato',
        },
        count: 3,
        feedback: {
          correct: '¡Buen trabajo! La oración tiene tres palabras',
        },
      },
    },
    {
      id: 6,
      type: 'count',
      instructions: ['Toca la carta y escucha la oración'],
      data: {
        instructions: [
          'Toca las burbujas y cuenta el número de palabras en la oración',
        ],
        button: {
          text: 'La cuna es celeste',
          image: 'cuna',
        },
        count: 4,
        feedback: {
          correct: '¡Buen trabajo! La oración tiene cuatro palabras',
        },
      },
    },
    {
      id: 7,
      type: 'super_tap',
      instructions: ['Toca las cartas y escucha las oraciones'],
      data: {
        buttons: [
          {
            text: 'Gato maúlla',
            image: 'gato',
          },
          {
            text: 'Maúlla gato',
            image: 'gato2',
          },
        ],
        feedback: {
          correct: [
            '¡Buen trabajo!',
            'Primero escuchamos una oración con la palabra gato',
            'Y después escuchamos la oración en otro orden',
          ],
        },
      },
    },
    {
      id: 8,
      type: 'super_tap',
      instructions: ['Toca las cartas y escucha las oraciones'],
      data: {
        buttons: [
          {
            text: 'Cuna celeste',
            image: 'cuna',
          },
          {
            text: 'Celeste cuna',
            image: 'cuna2',
          },
        ],
        feedback: {
          correct: [
            '¡Buen trabajo!',
            'Primero escuchamos una oración con la palabra cuna',
            'Y después escuchamos la oración en otro orden',
          ],
        },
      },
    },
    {
      id: 9,
      type: 'super_select',
      instructions: ['Toca el botón y escucha las oraciones'],
      data: {
        instructions: [
          'El pato nada',
          'El gato nada',
          'Selecciona las cartas que tienen las palabras que cambiaron',
        ],
        images: ['pato', 'gato'],
        feedback: {
          correct:
            '¡Buen trabajo! Las palabras que cambiaron fueron pato y gato',
          incorrect: 'Casi, intenta otra vez',
        },
        options: [
          {
            text: 'Pato',
            image: 'pato',
            correct: true,
          },
          {
            text: 'Gato',
            image: 'gato',
            correct: true,
          },
          {
            text: 'Olla',
            image: 'olla',
            correct: false,
          },
          {
            text: 'Isla',
            image: 'isla',
            correct: false,
          },
        ],
      },
    },
    {
      id: 10,
      type: 'super_select',
      instructions: ['Toca el botón y escucha las oraciones'],
      data: {
        instructions: [
          'La cuna es celeste',
          'La luna es celeste',
          'Selecciona las cartas que tienen las palabras que cambiaron',
        ],
        images: ['cuna', 'luna'],
        feedback: {
          correct:
            '¡Buen trabajo! Las palabras que cambiaron fueron cuna y luna',
          incorrect: 'Casi, intenta otra vez',
        },
        options: [
          {
            text: 'Cuna',
            image: 'cuna',
            correct: true,
          },
          {
            text: 'Luna',
            image: 'luna',
            correct: true,
          },
          {
            text: 'Pato',
            image: 'pato',
            correct: false,
          },
          {
            text: 'Edificio',
            image: 'edificio',
            correct: false,
          },
        ],
      },
    },
  ],
};
