//

// App

import { Lesson } from '@/types';

export const Lesson11: Lesson = {
  id: 11,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra.'],
      data: {
        button: {
          text: 'Gato. Ga - to.',
          image: 'manzana',
        },
        feedback: {
          correct: 'Buen trabajo. La palabra gato rima con: ato.',
        },
      },
    },
    {
      id: 2,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra.'],
      data: {
        button: {
          text: 'Luna. Lu - na.',
          image: 'luna',
        },
        feedback: {
          correct: 'Buen trabajo. La palabra luna rima con: una',
        },
      },
    },
    {
      id: 3,
      type: 'super_tap',
      instructions: ['Toca los botones y escucha las palabras'],
      data: {
        instructions: [''],
        buttons: [
          {
            text: 'Gato. Ga - to',
            image: 'gato'
          },
          {
            text: 'Pato. Pa - to',
            image: 'pato'
          }
        ],
        feedback: {
          correct: ['Buen trabajo. ','Las palabras gato y pato riman con: ato'],
        },
      },
    },
    {
      id: 4,
      type: 'super_tap',
      instructions: ['Toca los botones y escucha las palabras'],
      data: {
        instructions: [''],
        buttons: [
          {
            text: 'Luna . Lu - na',
            image: 'luna'
          },
          {
            text: 'Cuna. Cu - na',
            image: 'cuna'
          }
        ],
        feedback: {
          correct: ['Buen trabajo. ','Las palabras luna y cuna riman con: una'],
        },
      },
    },
    {
      id: 5,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instruction: '¿La palabra Gato rima con pato? ¿Sí o no?',
        instruction2: '',
        instruction3: '',
        instruction4: '',
        correct_answer: 'Sí',
        text: 'Gato',
        staticImage: 'gato',
        feedback: {
          correct: 'Buen trabajo. La palabra gat rima con pato',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 6,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instruction: '¿La palabra isla rima con pato? ¿Sí o no?',
        instruction2: '',
        instruction3: '',
        instruction4: '',
        correct_answer: 'No',
        text: 'Isla',
        staticImage: 'isla',
        feedback: {
          correct: 'Buen trabajo. La palabra isla no rima con pato.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 7,
      type: 'select',
      instructions: ['Toca el botón'],
      data: {
        instructions: [''],
        button: {
          text: 'Cuál de estas figuras rima con: secto.',
        },
        options: [
          {
            text: 'Cuna',
            image: 'cuna',
            correct: false,
          },
          {
            text: 'Insecto',
            image: 'insecto',
            correct: true,
          },
          {
            text: 'Isla',
            image: 'isla',
            correct: false,
          },
          {
            text: 'Conejo',
            image: 'conejo',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. Insecto rima con: secto.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 8,
      type: 'select',
      instructions: ['Toca el botón'],
      data: {
        instructions: [''],
        button: {
          text: 'Cuál de estas figuras rima con: una.',
        },
        options: [
          {
            text: 'Olla',
            image: 'olla',
            correct: false,
          },
          {
            text: 'Luna',
            image: 'luna',
            correct: true,
          },
          {
            text: 'Edificio',
            image: 'edificio',
            correct: false,
          },
          {
            text: 'Iglú',
            image: 'iglu',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. Luna rima con: una.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 9,
      type: 'super_select_adv',
      instructions: ['Toca el botón'],
      data: {
        instructions: [''],
        button: {
          text: ['Selecciona las palabras que riman con: una'],
        },
        options: [
          {
            text: 'Olla',
            image: 'olla',
            correct: false,
          },
          {
            text: 'Luna',
            image: 'luna',
            correct: true,
          },
          {
            text: 'isla',
            image: 'isla',
            correct: false,
          },
          {
            text: 'cuna',
            image: 'cuna',
            correct: true,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. Las palabras luna y cuna riman con: una.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 10,
      type: 'super_select_adv',
      instructions: ['Toca el botón'],
      data: {
        instructions: [''],
        button: {
          text: ['Selecciona las palabras que riman con: ato'],
        },
        options: [
          {
            text: 'gato',
            image: 'gato',
            correct: true,
          },
          {
            text: 'escalera',
            image: 'escalera',
            correct: false,
          },
          {
            text: 'pato',
            image: 'pato',
            correct: true,
          },
          {
            text: 'insecto',
            image: 'insecto',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. Las palabras gato y pato riman con: ato.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
  ],
};
