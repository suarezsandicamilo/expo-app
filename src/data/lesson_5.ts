//

// App

import { Lesson } from '@/types';

export const Lesson5: Lesson = {
  id: 5,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra.'],
      data: {
        button: {
          text: 'Abeja. Aa - be - ja.',
          image: 'abeja',
        },
        feedback: {
          correct: 'Buen trabajo',
        },
      },
    },
    {
      id: 2,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra.'],
      data: {
        button: {
          text: 'Ave. Aa - ve.',
          image: 'ave',
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
          text: 'A - BE - JA.',
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
          text: 'A - VE.',
        },
        count: 2,
        feedback: {
          correct: '¡Buen trabajo! La palabra tiene dos sílabas.',
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
            text: 'A - BE - JA',
            image: 'abeja',
          },
          {
            text: 'JA - BE - A',
            image: 'abeja',
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
            text: 'MAR - TI - LLO',
            image: 'martillo',
          },
          {
            text: 'Ahora al reves. LLO - TI - MAR',
            image: 'martillo',
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
        instruction2: "U",
        instruction3: "VA",
        instruction4: "",
        instruction5: "",
        staticImage: "",
        feedback: {
          correct: "¡Buen trabajo! El resultado es uva",
          incorrect: "Casi, intenta otra vez."
        },
        options: [
          {
            text: "oso",
            correct: false
          },
          {
            text: "uva",
            correct: true
          },
          {
            text: "aro",
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
        instruction2: "A",
        instruction3: "NI",
        instruction4: "LLO",
        instruction5: "",
        staticImage: "",
        feedback: {
          correct: "¡Buen trabajo! El resultado es anillo",
          incorrect: "Casi, intenta otra vez."
        },
        options: [
          {
            text: "abeja",
            correct: false
          },
          {
            text: "anillo",
            correct: true
          },
          {
            text: "avión",
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
          text: '¿Si a la palabra marti, le agregamos llo qué palabra formamos?',
        },
        options: [
          {
            text: 'martillo',
            image: 'martillo',
            correct: true,
          },
          {
            text: 'Anillo',
            image: 'anillo',
            correct: false,
          },
          {
            text: 'imán',
            image: 'imán',
            correct: false,
          },
          {
            text: 'avión',
            image: 'avión',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La palabra es martillo.',
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
          text: '¿Si a la palabra abe, le agregamos ja qué palabra formamos?',
        },
        options: [
          {
            text: 'abeja',
            image: 'abeja',
            correct: true,
          },
          {
            text: 'uva',
            image: 'uva',
            correct: false,
          },
          {
            text: 'barco',
            image: 'barco',
            correct: false,
          },
          {
            text: 'arco',
            image: 'arco',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La palabra es abeja.',
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
        instruction2: 'barco',
        instruction3: 'tiene la sílaba ca',
        instruction4: '¿Sí o no?',
        correct_answer: 'No',
        text: 'barco',
        staticImage: 'barco',
        feedback: {
          correct:
            'Buen trabajo. La palabra barco no tiene la sílaba ca',
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
        instruction2: 'martillo',
        instruction3: 'tiene la sílaba mar',
        instruction4: '¿Sí o no?',
        correct_answer: 'Sí',
        text: 'martillo',
        staticImage: 'martillo',
        feedback: {
          correct:
            'Buen trabajo. La palabra martillo sí tiene la sílaba mar',
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
          text: '¿Si en la palabra, abeja, cambiamos beja, por vion, qué palabra formamos?',
        },
        options: [
          {
            text: 'Avión',
            image: 'avion',
            correct: true,
          },
          {
            text: 'barco',
            image: 'barco',
            correct: false,
          },
          {
            text: 'arco',
            image: 'arco',
            correct: false,
          },
          {
            text: 'Anillo',
            image: 'anillo',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La palabra es ola.',
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
          text: '¿Si en la palabra, ala, cambiamos la, por ve, qué palabra formamos?',
        },
        options: [
          {
            text: 'ave',
            image: 'ave',
            correct: true,
          },
          {
            text: 'Abeja',
            image: 'abeja',
            correct: false,
          },
          {
            text: 'aro',
            image: 'aro',
            correct: false,
          },
          {
            text: 'uva',
            image: 'uva',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La palabra es ave.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
  ],
};
