//

// App

import { Lesson } from '@/types';

export const Lesson12: Lesson = {
  id: 12,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra.'],
      data: {
        button: {
          text: 'Zapato. Za - pato.',
          image: 'zapato',
        },
        feedback: {
          correct: 'Buen trabajo. La palabra zapato rima con: ato.',
        },
      },
    },
    {
      id: 2,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra.'],
      data: {
        button: {
          text: 'casa. ca - sa.',
          image: 'casa',
        },
        feedback: {
          correct: 'Buen trabajo. La palabra casa rima con: asa',
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
            text: 'casa. ca - sa.',
            image: 'casa',
          },
          {
            text: 'Taza. Ta - za',
            image: 'taza'
          }
        ],
        feedback: {
          correct: ['Buen trabajo. ','Las palabras casa y taza riman con: asa'],
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
            text: 'Zapato. Za - pato.',
            image: 'zapato',
          },
          {
            text: 'Plato. pla - to',
            image: 'plato'
          }
        ],
        feedback: {
          correct: ['Buen trabajo. ','Las palabras zapato y plato riman con: ato'],
        },
      },
    },
    {
      id: 5,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instruction: '¿La palabra casa rima con taza? ¿Sí o no?',
        instruction2: '',
        instruction3: '',
        instruction4: '',
        correct_answer: 'Sí',
        text: 'casa',
        staticImage: 'casa',
        feedback: {
          correct: 'Buen trabajo. La palabra casa rima con taza',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 6,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instruction: '¿La palabra ojo rima con pato? ¿Sí o no?',
        instruction2: '',
        instruction3: '',
        instruction4: '',
        correct_answer: 'No',
        text: 'ojo',
        staticImage: 'ojo',
        feedback: {
          correct: 'Buen trabajo. La palabra ojo no rima con uña.',
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
          text: 'Cuál de estas figuras rima con: uga.',
        },
        options: [
          {
            text: 'oruga',
            image: 'oruga',
            correct: true,
          },
          {
            text: 'zapato',
            image: 'zapato',
            correct: false,
          },
          {
            text: 'unicornio',
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
          correct: 'Buen trabajo. Oruga rima con: uga.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 8,
      type: 'super_select_adv',
      instructions: ['Toca el botón'],
      data: {
        instructions: [''],
        button: {
          text: ['Selecciona las palabras que riman con: asa'],
        },
        options: [
          {
            text: 'taza',
            image: 'taza',
            correct: true,
          },
          {
            text: 'casa',
            image: 'casa',
            correct: true,
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
          correct: 'Buen trabajo. Las palabras taza y casa riman con: asa.',
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
          text: ['Selecciona las palabras que riman con: ato'],
        },
        options: [
          {
            text: 'plato',
            image: 'plato',
            correct: true,
          },
          {
            text: 'escalera',
            image: 'escalera',
            correct: false,
          },
          {
            text: 'zapato',
            image: 'zapato',
            correct: true,
          },
          {
            text: 'insecto',
            image: 'insecto',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. Las palabras plato y zapato riman con: ato.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
  ],
};
