//

// App

import { Lesson } from '@/types';

export const Lesson4: Lesson = {
  id: 4,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la oración'],
      data: {
        button: {
          text: 'La oveja es blanca',
          image: 'oveja',
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
          text: 'El ojo parpadea',
          image: 'ojo',
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
          text: 'El ángel brilla',
        },
        options: [
          {
            text: 'Oveja',
            image: 'oveja',
            correct: false,
          },
          {
            text: 'Ángel',
            image: 'angel',
            correct: true,
          },
          {
            text: 'Oreja',
            image: 'oreja',
            correct: false,
          },
          {
            text: 'Ovillo',
            image: 'ovillo',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! La oración tiene la palabra ángel',
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
          text: 'La oveja es blanca',
        },
        options: [
          {
            text: 'Oveja',
            image: 'oveja',
            correct: true,
          },
          {
            text: 'Oruga',
            image: 'oruga',
            correct: false,
          },
          {
            text: 'Ovillo',
            image: 'ovillo',
            correct: false,
          },
          {
            text: 'Oreja',
            image: 'oreja',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! La oración tiene la palabra oveja',
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
          text: 'La oruga se mueve',
          image: 'oruga',
        },
        count: 4,
        feedback: {
          correct: '¡Buen trabajo! La oración tiene cuatro palabras',
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
          text: 'La oveja es blanca',
          image: 'oveja',
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
            text: 'El ojo parpadea',
            image: 'ojo',
          },
          {
            text: 'La oveja parpadea',
            image: 'oveja',
          },
        ],
        feedback: {
          correct: [
            '¡Buen trabajo!',
            'Las palabras que cambiaron entre las oraciones fueron',
            'ojo',
            'I',
            'oveja',
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
            text: 'El ángel brilla',
            image: 'angel',
          },
          {
            text: 'El ovillo brilla',
            image: 'ovillo',
          },
        ],
        feedback: {
          correct: [
            '¡Buen trabajo!',
            'Las palabras que cambiaron entre las oraciones fueron',
            'ángel',
            'I',
            'ovillo',
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
          'El ojo parpadea',
          'La oveja parpadea',
          'Selecciona las cartas que tienen las palabras que cambiaron',
        ],
        images: ['ojo', 'oveja'],
        feedback: {
          correct:
            '¡Buen trabajo! Las palabras que cambiaron fueron ojo y oveja',
          incorrect: 'Casi, intenta otra vez',
        },
        options: [
          {
            text: 'Ojo',
            image: 'ojo',
            correct: true,
          },
          {
            text: 'Oveja',
            image: 'oveja',
            correct: true,
          },
          {
            text: 'Oruga',
            image: 'oruga',
            correct: false,
          },
          {
            text: 'Ovillo',
            image: 'ovillo',
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
          'El ángel brilla',
          'El ovillo brilla',
          'Selecciona las cartas que tienen las palabras que cambiaron',
        ],
        images: ['angel', 'ovillo'],
        feedback: {
          correct:
            '¡Buen trabajo! Las palabras que cambiaron fueron ángel y ovillo',
          incorrect: 'Casi, intenta otra vez',
        },
        options: [
          {
            text: 'Ovillo',
            image: 'ovillo',
            correct: true,
          },
          {
            text: 'Ángel',
            image: 'angel',
            correct: true,
          },
          {
            text: 'Oreja',
            image: 'oreja',
            correct: false,
          },
          {
            text: 'Oveja',
            image: 'oveja',
            correct: false,
          },
        ],
      },
    },
  ],
};
