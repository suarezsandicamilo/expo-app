//

// App

import { Lesson } from '@/types';

export const Lesson4: Lesson = {
  id: 4,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la oración.'],
      data: {
        button: {
          text: 'La oveja es blanca',
          image: 'oveja',
        },
        feedback: {
          correct: 'Buen trabajo.',
        },
      },
    },
    {
      id: 2,
      type: 'tap',
      instructions: ['Toca la carta y escucha la oración.'],
      data: {
        button: {
          text: 'El ojo parpadea.',
          image: 'ojo',
        },
        feedback: {
          correct: 'Buen trabajo.',
        },
      },
    },
    {
      id: 3,
      type: 'select',
      instructions: ['Toca el botón y escucha la oración.'],
      data: {
        instructions: ['El ángel brilla'],
        button: {
          text: 'Selecciona la carta que tiene la palabra que escuchaste.',
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
          correct: 'Buen trabajo. La oracion incluye la palabra ángel.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 4,
      type: 'select',
      instructions: ['Toca el botón y escucha la oración.'],
      data: {
        instructions: ['La oveja es blanca'],
        button: {
          text: 'Selecciona la carta que tiene la palabra que escuchaste.',
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
          correct: 'Buen trabajo. La oracion incluye la palabra oveja.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 5,
      type: 'count',
      instructions: ['Toca el botón y escucha la oración.'],
      data: {
        instructions: [
          'Toca las burbujas y cuenta el número de palabras en la oración.',
        ],
        button: {
          text: 'La oruga se mueve.',
          image: 'oruga',
        },
        count: 4,
        feedback: {
          correct: '¡Buen trabajo! La oración tiene cuatro palabras.',
        },
      },
    },
    {
      id: 6,
      type: 'count',
      instructions: ['Toca el botón y escucha la oración.'],
      data: {
        instructions: [
          'Toca las burbujas y cuenta el número de palabras en la oración.',
        ],
        button: {
          text: 'La oveja es blanca.',
          image: 'oveja',
        },
        count: 4,
        feedback: {
          correct: '¡Buen trabajo! La oración tiene cuatro palabras.',
        },
      },
    },
    {
      id: 7,
      type: 'super_tap',
      instructions: ['Toca los botones y escucha las oraciones.'],
      data: {
        buttons: [
          {
            text: 'Ángel brilla',
            image: 'angel',
          },
          {
            text: 'Brilla ángel.',
            image: 'angel2',
          },
        ],
        feedback: {
          correct: [
            '¡Buen trabajo!',
            'Primero escuchamos una oración con la palabra ángel',
            'Y luego escuchamos la oración al revés.',
          ],
        },
      },
    },
    {
      id: 8,
      type: 'super_tap',
      instructions: ['Toca los botones y escucha las oraciones.'],
      data: {
        buttons: [
          {
            text: 'Oveja blanca.',
            image: 'oveja',
          },
          {
            text: 'Blanca oveja.',
            image: 'oveja2',
          },
        ],
        feedback: {
          correct: [
            '¡Buen trabajo!',
            'Primero escuchamos una oración con la palabra oveja',
            'Y luego escuchamos la oración al revés.',
          ],
        },
      },
    },
    {
      id: 9,
      type: 'super_tap',
      instructions: ['Toca los botones y escucha las oraciones.'],
      data: {
        buttons: [
          {
            text: 'El ojo parpadea.',
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
            'y',
            'oveja',
          ],
        },
      },
    },
    {
      id: 10,
      type: 'super_tap',
      instructions: ['Toca los botones y escucha las oraciones.'],
      data: {
        buttons: [
          {
            text: 'El ángel brilla',
            image: 'angel',
          },
          {
            text: 'El ovillo brilla.',
            image: 'ovillo',
          },
        ],
        feedback: {
          correct: [
            '¡Buen trabajo!',
            'Las palabras que cambiaron entre las oraciones fueron',
            'ángel',
            'y',
            'ovillo',
          ],
        },
      },
    },
    {
      id: 11,
      type: "super_select",
      instructions: ["Presiona el botón y escucha las oraciones"],
      data: {
        instruction: "El ojo parpadea.",
        instruction2: " La oveja parpadea.",
        instruction3: "Selecciona las cartas que tienen las palabras que cambiaron",
        staticImage: "ojo",
        staticImage2: "oveja",
        feedback: {
          correct: "¡Buen trabajo!  Las palabras que cambiaron son ojo y oveja.",
          incorrect: "Casi, intenta otra vez."
        },
        options: [
          {
            text: "ojo",
            image: "ojo",
            correct: true
          },
          {
            text: "oveja",
            image: "oveja",
            correct: true
          },
          {
            text: "oruga",
            image: "oruga",
            correct: false
          },
          {
            text: "ovillo",
            image: "ovillo",
            correct: false
          }
        ]
      }
    },
    {
      id: 12,
      type: "super_select",
      instructions: ["Presiona el botón y escucha las oraciones"],
        data: {
        instruction: "El ángel brilla.",
        instruction2: "El ovillo brilla",
        instruction3: "Selecciona las cartas que tienen las palabras que cambiaron",
        staticImage: "angel",
        staticImage2: "ovillo",
        feedback: {
          correct: "¡Buen trabajo!  Las palabras que cambiaron son ángel y ovillo.",
          incorrect: "Casi, intenta otra vez."
        },
        options: [
          {
            text: "ovillo",
            image: "ovillo",
            correct: true
          },
          {
            text: "ángel",
            image: "angel",
            correct: true
          },
          {
            text: "oreja",
            image: "oreja",
            correct: false
          },
          {
            text: "oveja",
            image: "oveja",
            correct: false
          }
        ]
      }
    },
  ],
};
