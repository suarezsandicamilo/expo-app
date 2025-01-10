//

// App

import { Lesson } from '@/types';

export const Lessons: Lesson[] = [
  {
    id: 1,
    tasks: [
      {
        id: 1,
        type: 'tap',
        instructions: ['Toca el botón y escucha la oración.'],
        data: {
          button: {
            text: 'La abeja zumba.',
          },
          feedback: {
            correct: '¡Buen trabajo!',
          },
        },
      },
      {
        id: 2,
        type: 'select',
        instructions: ['Toca el botón y escucha la oración.'],
        data: {
          instructions: [
            'Selecciona la carta de abajo que tiene la palabra que escuchaste.',
          ],
          button: {
            text: 'La abeja zumba.',
          },
          options: [
            {
              text: 'Abeja',
              image: 'abeja',
              correct: true,
            },
            {
              text: 'Avión',
              image: 'avion',
              correct: false,
            },
            {
              text: 'Árbol',
              image: 'arbol',
              correct: false,
            },
            {
              text: 'Ave',
              image: 'ave',
              correct: false,
            },
          ],
          feedback: {
            correct: '¡Buen trabajo! La palabra es abeja.',
            incorrect: 'Casi, intenta otra vez.',
          },
        },
      },
      {
        id: 3,
        type: 'drag_and_drop',
        instructions: ['Toca el botón de arriba y escucha la oración.'],
        data: {
          instructions: [
            'Arrastra y suelta en el cuadro la carta de abajo que tiene la palabra que escuchaste.',
          ],
          button: {
            text: 'La abeja zumba.',
          },
          options: [
            {
              text: 'Abeja',
              image: 'abeja',
              correct: true,
            },
            {
              text: 'Avión',
              image: 'avion',
              correct: false,
            },
            {
              text: 'Árbol',
              image: 'arbol',
              correct: false,
            },
            {
              text: 'Ave',
              image: 'ave',
              correct: false,
            },
          ],
          feedback: {
            correct: '¡Buen trabajo! La palabra es abeja.',
            incorrect: 'Casi, intenta otra vez.',
          },
        },
      },
      {
        id: 4,
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
        id: 5,
        type: 'super_tap',
        instructions: ['Toca los botones y escucha las oraciones.'],
        data: {
          buttons: [
            {
              text: 'María come manzanas.',
            },
            {
              text: 'María come naranjas.',
            },
          ],
          feedback: {
            correct: [
              '¡Buen trabajo!',
              'En la primera oración María come manzanas.',
              'Y en la segunda oración María come naranjas.',
            ],
          },
        },
      },
      {
        id: 6,
        type: 'super_select',
        instructions: ['Toca el botón y escucha la oración.'],
        data: {
          instructions: ['Selecciona la carta de abajo que formamos.'],
          button: {
            text: [
              'Si a "Pan"!',
              'Le agregamos "Da"!',
              '¿Qué palabra formamos?',
            ],
          },
          options: [
            {
              text: 'Panda',
              image: 'panda',
              correct: true,
            },
            {
              text: 'Abeja',
              image: 'abeja',
              correct: false,
            },
            {
              text: 'Avión',
              image: 'avion',
              correct: false,
            },
            {
              text: 'Árbol',
              image: 'arbol',
              correct: false,
            },
          ],
          feedback: {
            correct: '¡Buen trabajo! La palabra es panda.',
            incorrect: 'Casi, intenta otra vez.',
          },
        },
      },
      {
        id: 7,
        type: 'correct_incorrect',
        instructions: ["Toca la carta de arriba"],
        data: {
          instruction: "Repite conmigo",
          instruction2: "ana",
          instruction3: "come",
          instruction4: "banana.",
          text: "Las palabras ana y banana riman?",
          feedback: {
            correct: "¡Excelente! Muy buen trabajo.",
            incorrect: "Lo siento, estas palabras no riman."
          },
          words: [
            { "text": "Ana", "image": "Ana"},
            { "text": "Banana", "image": "Banana"}
          ],
          staticImage: "Ana_Come_Banana"
        }      
      },
    ],
  },
  {
    id: 2,
    tasks: [
      {
        id: 1,
        type: 'tap',
        instructions: ['Toca el botón y escucha la oración.'],
        data: {
          button: {
            text: 'La abeja zumba.',
          },
          feedback: {
            correct: '¡Buen trabajo!',
          },
        },
      },
    ],
  },
  {
    id: 3,
    tasks: [
      {
        id: 1,
        type: 'select',
        instructions: ['Toca el botón y escucha la oración.'],
        data: {
          instructions: [
            'Selecciona la carta de abajo que tiene la palabra que escuchaste.',
          ],
          button: {
            text: 'La abeja zumba.',
          },
          options: [
            {
              text: 'Abeja',
              image: 'abeja',
              correct: true,
            },
            {
              text: 'Avión',
              image: 'avion',
              correct: false,
            },
            {
              text: 'Árbol',
              image: 'arbol',
              correct: false,
            },
            {
              text: 'Ave',
              image: 'ave',
              correct: false,
            },
          ],
          feedback: {
            correct: '¡Buen trabajo! La palabra es abeja.',
            incorrect: 'Casi, intenta otra vez.',
          },
        },
      },
    ],
  },
  {
    id: 4,
    tasks: [
      {
        id: 1,
        type: 'drag_and_drop',
        instructions: ['Toca el botón de arriba y escucha la oración.'],
        data: {
          instructions: [
            'Arrastra y suelta en el cuadro la carta de abajo que tiene la palabra que escuchaste.',
          ],
          button: {
            text: 'La abeja zumba.',
          },
          options: [
            {
              text: 'Abeja',
              image: 'abeja',
              correct: true,
            },
            {
              text: 'Avión',
              image: 'avion',
              correct: false,
            },
            {
              text: 'Árbol',
              image: 'arbol',
              correct: false,
            },
            {
              text: 'Ave',
              image: 'ave',
              correct: false,
            },
          ],
          feedback: {
            correct: '¡Buen trabajo! La palabra es abeja.',
            incorrect: 'Casi, intenta otra vez.',
          },
        },
      },
    ],
  },
  {
    id: 5,
    tasks: [
      {
        id: 1,
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
    ],
  },
  {
    id: 6,
    tasks: [
      {
        id: 1,
        type: 'super_tap',
        instructions: ['Toca los botones y escucha las oraciones.'],
        data: {
          buttons: [
            {
              text: 'María come manzanas.',
            },
            {
              text: 'María come naranjas.',
            },
          ],
          feedback: {
            correct: [
              '¡Buen trabajo!',
              'En la primera oración María come manzanas.',
              'Y en la segunda oración María come naranjas.',
            ],
          },
        },
      },
    ],
  },
  {
    id: 7,
    tasks: [
      {
        id: 1,
        type: 'super_select',
        instructions: ['Toca el botón y escucha la oración.'],
        data: {
          instructions: ['Selecciona la carta de abajo que formamos.'],
          button: {
            text: [
              'Si a "Pan"!',
              'Le agregamos "Da"!',
              '¿Qué palabra formamos?',
            ],
          },
          options: [
            {
              text: 'Panda',
              image: 'panda',
              correct: true,
            },
            {
              text: 'Abeja',
              image: 'abeja',
              correct: false,
            },
            {
              text: 'Avión',
              image: 'avion',
              correct: false,
            },
            {
              text: 'Árbol',
              image: 'arbol',
              correct: false,
            },
          ],
          feedback: {
            correct: '¡Buen trabajo! La palabra es panda.',
            incorrect: 'Casi, intenta otra vez.',
          },
        },
      },
    ],
  },
  {
    id: 8,
    tasks: [],
  },
  {
    id: 9,
    tasks: [],
  },
  {
    id: 10,
    tasks: [],
  },
];
