//

// App

import { Lesson } from '@/types';

export const Lesson1: Lesson = {
  id: 1,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la oración.'],
      data: {
        button: {
          text: 'El ave canta',
          image: 'ave',
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
          text: 'La abeja zumba.',
          image: 'abeja',
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
        instructions: ['El árbol es alto'],
        button: {
          text: 'Selecciona la carta que tiene la palabra que escuchaste.',
        },
        options: [
          {
            text: 'Ave',
            image: 'ave',
            correct: false,
          },
          {
            text: 'Árbol',
            image: 'arbol',
            correct: true,
          },
          {
            text: 'Uva',
            image: 'uva',
            correct: false,
          },
          {
            text: 'Arco',
            image: 'arco',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La oracion incluye la palabra árbol.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 4,
      type: 'select',
      instructions: ['Toca el botón y escucha la oración.'],
      data: {
        instructions: ['El oso duerme'],
        button: {
          text: 'Selecciona la carta que tiene la palabra que escuchaste.',
        },
        options: [
          {
            text: 'Oso',
            image: 'oso',
            correct: true,
          },
          {
            text: 'Ala',
            image: 'ala',
            correct: false,
          },
          {
            text: 'Imán',
            image: 'iman',
            correct: false,
          },
          {
            text: 'Anillo',
            image: 'anillo',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La oracion incluye la palabra oso.',
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
          text: 'La abeja zumba.',
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
          text: 'El anillo es brillante.',
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
            text: 'Ave canta.',
          },
          {
            text: 'Canta ave.',
          },
        ],
        feedback: {
          correct: [
            '¡Buen trabajo!',
            'Primero escuchamos una oración con la palabra ave',
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
            text: 'Anillo brillante.',
          },
          {
            text: 'Brillante anillo.',
          },
        ],
        feedback: {
          correct: [
            '¡Buen trabajo!',
            'Primero escuchamos una oración con la palabra anillo',
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
            text: 'El árbol es alto.',
          },
          {
            text: 'El arco es alto.',
          },
        ],
        feedback: {
          correct: [
            '¡Buen trabajo!',
            'Las palabras que cambiaron entre las oraciones fueron',
            'árbol',
            'i',
            'arco',
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
            text: 'El avión vuela.',
          },
          {
            text: 'El ave vuela.',
          },
        ],
        feedback: {
          correct: [
            '¡Buen trabajo!',
            'Las palabras que cambiaron entre las oraciones fueron',
            'avión',
            'i',
            'ave',
          ],
        },
      },
    },
    {
      id: 11,
      type: "super_select",
      instructions: ["Presiona el botón y escucha las oraciones"],
      data: {
        instruction: "El árbol es alto",
        instruction2: "El arco es alto",
        instruction3: "Selecciona las cartas que tienen las palabras que cambiaron",
        staticImage: "arbol",
        staticImage2: "arco",
        feedback: {
          correct: "¡Buen trabajo!  Las palabras que cambiaron son árbol y arco.",
          incorrect: "Casi, intenta otra vez."
        },
        options: [
          {
            text: "árbol",
            image: "arbol",
            correct: true
          },
          {
            text: "arco",
            image: "arco",
            correct: true
          },
          {
            text: "ave",
            image: "ave",
            correct: false
          },
          {
            text: "aro",
            image: "aro",
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
        instruction: "El avión vuela.",
        instruction2: "El ave vuela.",
        instruction3: "Selecciona las cartas que tienen las palabras que cambiaron",
        staticImage: "avión",
        staticImage2: "ave",
        feedback: {
          correct: "¡Buen trabajo!  Las palabras que cambiaron son avión y ave.",
          incorrect: "Casi, intenta otra vez."
        },
        options: [
          {
            text: "avión",
            image: "avion",
            correct: true
          },
          {
            text: "ave",
            image: "ave",
            correct: true
          },
          {
            text: "uva",
            image: "uva",
            correct: false
          },
          {
            text: "arco",
            image: "arco",
            correct: false
          }
        ]
      }
    },
  ],
};
