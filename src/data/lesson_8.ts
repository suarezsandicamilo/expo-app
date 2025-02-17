//

// App

import { Lesson } from '@/types';

export const Lesson8: Lesson = {
  id: 8,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra.'],
      data: {
        button: {
          text: 'Oruga. O - ru - ga',
          image: 'oruga',
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
          text: 'Oveja. O - ve - ja',
          image: 'oveja',
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
          text: 'O - ru - ga.',
          image: 'oruga',
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
          text: 'O - ve - ja.',
          image: 'oveja',
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
            text: 'PLA - TO',
            image: 'plato',
          },
          {
            text: 'Ahora al revés. TO - PLA.',
            image: 'plato2',
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
            text: 'ES - TU - FA',
            image: 'estufa',
          },
          {
            text: 'Ahora al revés. FA - TU - ES',
            image: 'estufa2',
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
        instruction2: "CA",
        instruction3: "SA",
        instruction4: "",
        instruction5: "",
        staticImage: "casa",
        feedback: {
          correct: "¡Buen trabajo! El resultado es casa",
          incorrect: "Casi, intenta otra vez."
        },
        options: [
          {
            text: "taza",
            correct: false
          },
          {
            text: "casa",
            correct: true
          },
          {
            text: "asno",
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
        instruction2: "O",
        instruction3: "RU",
        instruction4: "GA",
        instruction5: "",
        staticImage: "oruga",
        feedback: {
          correct: "¡Buen trabajo! El resultado es oruga",
          incorrect: "Casi, intenta otra vez."
        },
        options: [
          {
            text: "oveja",
            correct: false
          },
          {
            text: "oruga",
            correct: true
          },
          {
            text: "oreja",
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
          text: '¿Si a la palabra zapa, le agregamos to, qué palabra formamos?',
        },
        options: [
          {
            text: 'zapato',
            image: 'zapato',
            correct: true,
          },
          {
            text: 'plato',
            image: 'plato',
            correct: false,
          },
          {
            text: 'oreja',
            image: 'oreja',
            correct: false,
          },
          {
            text: 'ángel',
            image: 'angel',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La palabra es zapato.',
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
          text: '¿Si a la palabra úti, le agregamos les, qué palabra formamos?',
        },
        options: [
          {
            text: 'útiles',
            image: 'utiles',
            correct: true,
          },
          {
            text: 'Unicornio',
            image: 'unicornio',
            correct: false,
          },
          {
            text: 'Estufa',
            image: 'estufa',
            correct: false,
          },
          {
            text: 'Uña',
            image: 'uña',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La palabra es útiles.',
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
        instruction2: 'taza',
        instruction3: 'tiene la sílaba ta',
        instruction4: '¿Sí o no?',
        correct_answer: 'Sí',
        text: 'taza',
        staticImage: 'taza',
        feedback: {
          correct:
            'Buen trabajo. La palabra taza sí tiene la sílaba ta',
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
        instruction2: 'zapato',
        instruction3: 'tiene la sílaba ta',
        instruction4: '¿Sí o no?',
        correct_answer: 'No',
        text: 'zapato',
        staticImage: 'zapato',
        feedback: {
          correct:
            'Buen trabajo. La palabra zapato no tiene la sílaba ta',
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
          text: '¿Si en la palabra, oveja, cambiamos veja, por reja, qué palabra formamos?',
        },
        options: [
          {
            text: 'oreja',
            image: 'oreja',
            correct: true,
          },
          {
            text: 'ojo',
            image: 'ojo',
            correct: false,
          },
          {
            text: 'ovillo',
            image: 'ovillo',
            correct: false,
          },
          {
            text: 'oruga',
            image: 'oruga',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La palabra es oreja.',
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
          text: '¿Si en la palabra, taza, cambiamos ta, por ca, qué palabra formamos?',
        },
        options: [
          {
            text: 'casa',
            image: 'casa',
            correct: true,
          },
          {
            text: 'unicornio',
            image: 'unicornio',
            correct: false,
          },
          {
            text: 'asno',
            image: 'asno',
            correct: false,
          },
          {
            text: 'plato',
            image: 'plato',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La palabra es casa.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
  ],
};
