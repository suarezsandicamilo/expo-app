//

// App

import { Lesson } from '@/types';

export const Lesson6: Lesson = {
  id: 6,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra.'],
      data: {
        button: {
          text: 'Espada. Es  , pa  , da',
          image: 'espada',
        },
        feedback: {
          correct: 'Buen trabajo.',
        },
      },
    },
    {
      id: 2,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra.'],
      data: {
        button: {
          text: 'Erizo. E  , ri  , zo',
          image: 'erizo',
        },
        feedback: {
          correct: 'Buen trabajo.',
        },
      },
    },
    {
      id: 3,
      type: 'count',
      instructions: ['Toca el botón y escucha la palabra.'],
      data: {
        instructions: [
          'Toca las burbujas y cuenta el número de sílabas en la palabra.',
        ],
        button: {
          text: 'Es  , co  , bah.',
          image: 'escoba',
        },
        count: 3,
        feedback: {
          correct: '¡Buen trabajo! La palabra tiene tres sílabas.',
        },
      },
    },
    {
      id: 4,
      type: 'count',
      instructions: ['Toca el botón y escucha la palabra.'],
      data: {
        instructions: [
          'Toca las burbujas y cuenta el número de sílabas en la palabra.',
        ],
        button: {
          text: 'ES  , PA  , DA.',
          image: 'espada',
        },
        count: 3,
        feedback: {
          correct: '¡Buen trabajo! La palabra tiene tres sílabas.',
        },
      },
    },
    {
      id: 5,
      type: 'super_tap',
      instructions: ['Toca los botones y escucha las palabras.'],
      data: {
        buttons: [
          {
            text: 'Es  , co  , bah.',
            image: 'escoba',
          },
          {
            text: 'Ahora al revés. Bah  , co  , es.',
            image: 'escoba2',
          },
        ],
        feedback: {
          correct: [
            '¡Buen trabajo!',
          ],
        },
      },
    },
    {
      id: 6,
      type: 'super_tap',
      instructions: ['Toca los botones y escucha las palabras.'],
      data: {
        buttons: [
          {
            text: 'Ar  , di  , lla.',
            image: 'ardilla',
          },
          {
            text: 'Ahora al revés. Lla  , di  , ar.',
            image: 'ardilla2',
          },
        ],
        feedback: {
          correct: [
            '¡Buen trabajo!',
          ],
        },
      },
    },
    {
      id: 7,
      type: 'selectaudio',
      instructions: ["Toca el botón y escucha las sílabas."],
      data: {
        instruction: "Qué palabra se forma al juntar las sílabas,",
        instruction2: "Es",
        instruction3: "Tre",
        instruction4: "Lla",
        instruction5: "",
        staticImage: "estrella",
        feedback: {
          correct: "¡Buen trabajo! El resultado es estrella",
          incorrect: "Casi, intenta otra vez."
        },
        options: [
          {
            text: "Escoba",
            correct: false
          },
          {
            text: "estrella",
            correct: true
          },
          {
            text: "Espada",
            correct: false
          }
        ]
      },
    },
    {
      id: 8,
      type: 'selectaudio',
      instructions: ["Toca el botón y escucha las sílabas."],
      data: {
        instruction: "Qué palabra se forma al juntar las sílabas,",
        instruction2: "E",
        instruction3: "NA",
        instruction4: "NO",
        instruction5: "",
        staticImage: "enano",
        feedback: {
          correct: "¡Buen trabajo! El resultado es enano",
          incorrect: "Casi, intenta otra vez."
        },
        options: [
          {
            text: "elefante",
            correct: false
          },
          {
            text: "enano",
            correct: true
          },
          {
            text: "erizo",
            correct: false
          }
        ]
      },
    },
    {
      id: 9,
      type: 'select',
      instructions: ['Toca el botón'],
      data: {
        instructions: [''],
        button: {
          text: '¿Si a la palabra es, le agregamos co  , bah, qué palabra formamos?',
        },
        options: [
          {
            text: 'escoba',
            image: 'escoba',
            correct: true,
          },
          {
            text: 'Espejo',
            image: 'espejo',
            correct: false,
          },
          {
            text: 'estufa',
            image: 'estufa',
            correct: false,
          },
          {
            text: 'erizo',
            image: 'erizo',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La palabra es escoba.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 10,
      type: 'select',
      instructions: ['Toca el botón'],
      data: {
        instructions: [''],
        button: {
          text: '¿Si a la palabra e, le agregamos na  , no, qué palabra formamos?',
        },
        options: [
          {
            text: 'enano',
            image: 'enano',
            correct: true,
          },
          {
            text: 'estrella',
            image: 'estrella',
            correct: false,
          },
          {
            text: 'espada',
            image: 'espada',
            correct: false,
          },
          {
            text: 'Empanada',
            image: 'empanada',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La palabra es enano.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 11,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instruction: '¿La palabra',
        instruction2: 'estrella',
        instruction3: 'tiene la sílaba es',
        instruction4: '¿Sí o no?',
        correct_answer: 'Sí',
        text: 'estrella',
        staticImage: 'estrella',
        feedback: {
          correct:
            'Buen trabajo. La palabra estrella sí tiene la sílaba es',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 12,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instruction: '¿La palabra',
        instruction2: 'campana',
        instruction3: 'tiene la sílaba ra',
        instruction4: '¿Sí o no?',
        correct_answer: 'No',
        text: 'campana',
        staticImage: 'campana',
        feedback: {
          correct:
            'Buen trabajo. La palabra campana no tiene la sílaba ra',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 13,
      type: 'select',
      instructions: ['Toca el botón'],
      data: {
        instructions: [''],
        button: {
          text: '¿Si en la palabra, estrella, cambiamos trella, por pada, qué palabra formamos?',
        },
        options: [
          {
            text: 'espada',
            image: 'espada',
            correct: true,
          },
          {
            text: 'manzana',
            image: 'manzana',
            correct: false,
          },
          {
            text: 'conejo',
            image: 'conejo',
            correct: false,
          },
          {
            text: 'empanada',
            image: 'empanada',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La palabra es espada.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 14,
      type: 'select',
      instructions: ['Toca el botón'],
      data: {
        instructions: [''],
        button: {
          text: '¿Si en la palabra, enano, cambiamos nano, por rizo, qué palabra formamos?',
        },
        options: [
          {
            text: 'erizo',
            image: 'erizo',
            correct: true,
          },
          {
            text: 'elefante',
            image: 'elefante',
            correct: false,
          },
          {
            text: 'iguana',
            image: 'iguana',
            correct: false,
          },
          {
            text: 'estufa',
            image: 'estufa',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La palabra es erizo.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
  ],
};
