//

// App

import { Lesson } from '@/types';

export const Lesson12: Lesson = {
  id: 12,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra'],
      data: {
        button: {
          text: 'Zapato, za, pato',
          image: 'zapato',
        },
        feedback: {
          correct: '¡Buen trabajo! La palabra zapato rima con ato',
        },
      },
    },
    {
      id: 2,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra'],
      data: {
        button: {
          text: 'Casa, ca, sa',
          image: 'casa',
        },
        feedback: {
          correct: '¡Buen trabajo! La palabra casa rima con asa',
        },
      },
    },
    {
      id: 3,
      type: 'select',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['Selecciona la palabra que rima con ruga'],
        button: {
          text: ' ',
        },
        options: [
          {
            text: 'Oruga',
            image: 'oruga',
            correct: true,
          },
          {
            text: 'Zapato',
            image: 'zapato',
            correct: false,
          },
          {
            text: 'Unicornio',
            image: 'unicornio',
            correct: false,
          },
          {
            text: 'Conejo',
            image: 'conejo',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! La palabra oruga rima con ruga',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      // eja, arco, illa, ante, ecto, una, ruga, ato
      id: 4,
      type: 'select',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['Selecciona la palabra que rima con ato'],
        button: {
          text: ' ',
        },
        options: [
          {
            text: 'Gato',
            image: 'gato',
            correct: true,
          },
          {
            text: 'Luna',
            image: 'luna',
            correct: false,
          },
          {
            text: 'Olla',
            image: 'olla',
            correct: false,
          },
          {
            text: 'Esquimal',
            image: 'esquimal',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! La palabra gato rima con ato',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 5,
      type: 'super_tap',
      instructions: ['Toca las cartas y escucha las palabras'],
      data: {
        buttons: [
          {
            text: 'Casa, ca, sa',
            image: 'casa',
          },
          {
            text: 'Taza, ta, za',
            image: 'taza',
          },
        ],
        feedback: {
          correct: ['¡Buen trabajo! Las palabras casa y taza riman con asa'],
        },
      },
    },
    {
      id: 6,
      type: 'super_tap',
      instructions: ['Toca las cartas y escucha las palabras'],
      data: {
        buttons: [
          {
            text: 'Zapato, za, pato',
            image: 'zapato',
          },
          {
            text: 'Plato, plato',
            image: 'plato',
          },
        ],
        feedback: {
          correct: ['¡Buen trabajo! Las palabras zapato y plato riman con ato'],
        },
      },
    },
    {
      id: 7,
      type: 'super_select_adv',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['Selecciona las palabras que riman con asa'],
        button: {
          text: ' ',
        },
        options: [
          {
            text: 'Taza',
            image: 'taza',
            correct: true,
          },
          {
            text: 'Casa',
            image: 'casa',
            correct: true,
          },
          {
            text: 'Asno',
            image: 'asno',
            correct: false,
          },
          {
            text: 'Plato',
            image: 'plato',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! Las palabras taza y casa riman con asa',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 8,
      type: 'super_select_adv',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['Selecciona las palabras que riman con ato'],
        button: {
          text: ' ',
        },
        options: [
          {
            text: 'Plato',
            image: 'plato',
            correct: true,
          },
          {
            text: 'Escalera',
            image: 'escalera',
            correct: false,
          },
          {
            text: 'Zapato',
            image: 'zapato',
            correct: true,
          },
          {
            text: 'Insecto',
            image: 'insecto',
            correct: false,
          },
        ],
        feedback: {
          correct: '¡Buen trabajo! Las palabras plato y zapato riman con ato',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 9,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['¿La palabra casa rima con taza? ¿Sí o no?'],
        correct_answer: 'Sí',
        text: 'Casa',
        image: 'casa',
        feedback: {
          correct: '¡Buen trabajo!',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 10,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['¿La palabra ojo rima con pato? ¿Sí o no?'],
        correct_answer: 'No',
        text: 'Ojo',
        image: 'ojo',
        feedback: {
          correct: '¡Buen trabajo!',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
  ],
};
