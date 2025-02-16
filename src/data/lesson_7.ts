//

// App

import { Lesson } from '@/types';

export const Lesson7: Lesson = {
  id: 7,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra.'],
      data: {
        button: {
          text: 'Isla. Is - la',
          image: 'isla',
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
          text: 'Escalera. Es - ca - le - ra',
          image: 'escalera',
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
          text: 'O - LA.',
        },
        count: 2,
        feedback: {
          correct: '¡Buen trabajo! La palabra tiene dos sílabas.',
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
          text: 'I - GLE - SIA.',
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
            text: 'IS - LA',
            image: 'isla',
          },
          {
            text: 'Ahora al reves. LA - IS.',
            image: 'isla',
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
            text: 'CU - NA',
            image: 'cuna',
          },
          {
            text: 'Ahora al reves. NA. CU',
            image: 'cuna',
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
        instruction2: "I",
        instruction3: "GLU",
        instruction4: "",
        instruction5: "",
        staticImage: "",
        feedback: {
          correct: "¡Buen trabajo! El resultado es íglu",
          incorrect: "Casi, intenta otra vez."
        },
        options: [
          {
            text: "insecto",
            correct: false
          },
          {
            text: "íglu",
            correct: true
          },
          {
            text: "iglesia",
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
        instruction2: "o",
        instruction3: "ya",
        instruction4: "NO",
        instruction5: "",
        staticImage: "",
        feedback: {
          correct: "¡Buen trabajo! El resultado es olla",
          incorrect: "Casi, intenta otra vez."
        },
        options: [
          {
            text: "ola",
            correct: false
          },
          {
            text: "olla",
            correct: true
          },
          {
            text: "ojo",
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
          text: '¿Si a la palabra is, le agregamos la, qué palabra formamos?',
        },
        options: [
          {
            text: 'isla',
            image: 'isla',
            correct: true,
          },
          {
            text: 'iglesia',
            image: 'iglesia',
            correct: false,
          },
          {
            text: 'insecto',
            image: 'insecto',
            correct: false,
          },
          {
            text: 'edificio',
            image: 'edificio',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La palabra es isla.',
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
          text: '¿Si a la palabra o, le agregamos jo, qué palabra formamos?',
        },
        options: [
          {
            text: 'ojo',
            image: 'ojo',
            correct: true,
          },
          {
            text: 'olla',
            image: 'olla',
            correct: false,
          },
          {
            text: 'ovillo',
            image: 'ovillo',
            correct: false,
          },
          {
            text: 'ola',
            image: 'ola',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La palabra es ojo.',
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
        instruction2: 'escalera',
        instruction3: 'tiene la sílaba la',
        instruction4: '¿Sí o no?',
        correct_answer: 'No',
        text: 'escalera',
        staticImage: 'escalera',
        feedback: {
          correct:
            'Buen trabajo. La palabra escalera no tiene la sílaba la',
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
        instruction2: 'edificio',
        instruction3: 'tiene la sílaba e',
        instruction4: '¿Sí o no?',
        correct_answer: 'Sí',
        text: 'edificio',
        staticImage: 'edificio',
        feedback: {
          correct:
            'Buen trabajo. La palabra edificio no tiene la sílaba e',
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
          text: '¿Si en la palabra, ola, cambiamos la, por ya, qué palabra formamos?',
        },
        options: [
          {
            text: 'olla',
            image: 'olla',
            correct: true,
          },
          {
            text: 'isla',
            image: 'isla',
            correct: false,
          },
          {
            text: 'gato',
            image: 'gato',
            correct: false,
          },
          {
            text: 'edificio',
            image: 'edificio',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La palabra es olla.',
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
          text: '¿Si en la palabra, Iglú, cambiamos glu, por glesia, qué palabra formamos?',
        },
        options: [
          {
            text: 'iglesia',
            image: 'iglesia',
            correct: true,
          },
          {
            text: 'insecto',
            image: 'insecto',
            correct: false,
          },
          {
            text: 'Escalera',
            image: 'escalera',
            correct: false,
          },
          {
            text: 'Edificio',
            image: 'edificio',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La palabra es iglesia.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
  ],
};
