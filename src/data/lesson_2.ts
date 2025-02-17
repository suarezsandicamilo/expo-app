//

// App

import { Lesson } from '@/types';

export const Lesson2: Lesson = {
  id: 2,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la oración.'],
      data: {
        button: {
          text: 'La araña teje.',
          image: 'araña',
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
          text: 'El conejo salta.',
          image: 'conejo',
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
        instructions: ['La araña teje'],
        button: {
          text: 'Selecciona la carta que tiene la palabra que escuchaste.',
        },
        options: [
          {
            text: 'Araña',
            image: 'araña',
            correct: true,
          },
          {
            text: 'Estrella',
            image: 'estrella',
            correct: false,
          },
          {
            text: 'Empanada',
            image: 'empanada',
            correct: false,
          },
          {
            text: 'Espada',
            image: 'espada',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La oracion incluye la palabra araña.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 4,
      type: 'select',
      instructions: ['Toca el botón y escucha la oración.'],
      data: {
        instructions: ['El conejo salta.'],
        button: {
          text: 'Selecciona la carta que tiene la palabra que escuchaste.',
        },
        options: [
          {
            text: 'Conejo',
            image: 'conejo',
            correct: true,
          },
          {
            text: 'Campana',
            image: 'campana',
            correct: false,
          },
          {
            text: 'Manzana',
            image: 'manzana',
            correct: false,
          },
          {
            text: 'Iguana',
            image: 'iguana',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La oracion incluye la palabra conejo.',
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
          text: 'La araña teje.',
          image: 'araña',
        },
        count: 3,
        feedback: {
          correct: '¡Buen trabajo! La oración tiene tres palabras.',
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
          text: 'Campana amarilla.',
          image: 'campana',
        },
        count: 2,
        feedback: {
          correct: '¡Buen trabajo! La oración tiene dos palabras.',
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
            text: 'Araña teje.',
            image: 'araña'
          },
          {
            text: 'Teje araña.',
            image: 'araña2'
          },
        ],
        feedback: {
          correct: [
            '¡Buen trabajo!',
            'Primero escuchamos una oración con la palabra araña',
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
            text: 'Campana amarilla.',
            image: 'campana'
          },
          {
            text: 'Amarilla campana.',
            image: 'campana2'
          },
        ],
        feedback: {
          correct: [
            '¡Buen trabajo!',
            'Primero escuchamos una oración con la palabra campana',
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
            text: 'El enano tiene la espada',
            image: 'espada'
          },
          {
            text: 'El enano tiene la escoba.',
            image: 'escoba'
          },
        ],
        feedback: {
          correct: [
            '¡Buen trabajo!',
            'Las palabras que cambiaron entre las oraciones fueron',
            'espada',
            'i',
            'escoba',
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
            text: 'La araña mira la estrella.',
            image: 'araña'
          },
          {
            text: 'La ardilla mira la estrella.',
            image: 'ardilla'
          },
        ],
        feedback: {
          correct: [
            '¡Buen trabajo!',
            'Las palabras que cambiaron entre las oraciones fueron',
            'araña',
            'i',
            'ardilla',
          ],
        },
      },
    },
    {
      id: 11,
      type: "super_select",
      instructions: ["Presiona el botón y escucha las oraciones"],
      data: {
        instruction: "El enano tiene la espada",
        instruction2: "El enano tiene la escoba",
        instruction3: "Selecciona las cartas que tienen las palabras que cambiaron",
        staticImage: "espada",
        staticImage2: "escoba",
        feedback: {
          correct: "¡Buen trabajo!  Las palabras que cambiaron son espada y escoba.",
          incorrect: "Casi, intenta otra vez."
        },
        options: [
          {
            text: "Espada",
            image: "espada",
            correct: true
          },
          {
            text: "Escoba",
            image: "escoba",
            correct: true
          },
          {
            text: "Erizo",
            image: "erizo",
            correct: false
          },
          {
            text: "Enano",
            image: "enano",
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
        instruction: "La araña mira la estrella.",
        instruction2: "La ardilla mira la estrella.",
        instruction3: "Selecciona las cartas que tienen las palabras que cambiaron",
        staticImage: "araña",
        staticImage2: "ardilla",
        feedback: {
          correct: "¡Buen trabajo!  Las palabras que cambiaron son araña y ardilla.",
          incorrect: "Casi, intenta otra vez."
        },
        options: [
          {
            text: "Araña",
            image: "araña",
            correct: true
          },
          {
            text: "ardilla",
            image: "ardilla",
            correct: true
          },
          {
            text: "conejo",
            image: "conejo",
            correct: false
          },
          {
            text: "iguana",
            image: "iguana",
            correct: false
          }
        ]
      }
    },
  ],
};
