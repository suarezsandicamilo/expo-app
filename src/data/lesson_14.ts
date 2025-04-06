//

// App

import { Lesson } from '@/types';

export const Lesson14: Lesson = {
  id: 14,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra.'],
      data: {
        button: {
          text: 'Estrella. Ee  , strella.',
          image: 'estrella',
        },
        feedback: {
          correct: 'Buen trabajo. La palabra estrella empieza con e.',
        },
      },
    },
    {
      id: 2,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra.'],
      data: {
        button: {
          text: 'Elefante. Ee  , lefante.',
          image: 'elefante',
        },
        feedback: {
          correct: 'Buen trabajo. La palabra elefante empieza con e.',
        },
      },
    },
    {
      id: 3,
      type: 'select',
      instructions: ['Toca el botón'],
      data: {
        instructions: [''],
        button: {
          text: 'Selecciona la palabra que empieza con e.',
        },
        options: [
          {
            text: 'Estrella',
            image: 'estrella',
            correct: true,
          },
          {
            text: 'Iguana',
            image: 'iguana',
            correct: false,
          },
          {
            text: 'Araña',
            image: 'araña',
            correct: false,
          },
          {
            text: 'Ardilla',
            image: 'ardilla',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La palabra estrella empieza con e.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 4,
      type: 'select',
      instructions: ['Toca el botón'],
      data: {
        instructions: [''],
        button: {
          text: 'Selecciona la palabra que empieza con e.',
        },
        options: [
          {
            text: 'Elefante',
            image: 'elefante',
            correct: true,
          },
          {
            text: 'Ardilla',
            image: 'ardilla',
            correct: false,
          },
          {
            text: 'Iguana',
            image: 'iguana',
            correct: false,
          },
          {
            text: 'Oso',
            image: 'oso',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La palabra elefante empieza con e.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 5,
      type: 'super_select_adv',
      instructions: ['Toca el botón'],
      data: {
        instructions: [''],
        button: {
          text: ['Selecciona las palabras que empiezan con e.'],
        },
        options: [
          {
            text: 'Estrella',
            image: 'estrella',
            correct: true,
          },
          {
            text: 'Espada',
            image: 'espada',
            correct: true,
          },
          {
            text: 'Escoba',
            image: 'escoba',
            correct: true,
          },
          {
            text: 'Iguana',
            image: 'iguana',
            correct: false,
          },
        ],
        feedback: {
          correct:
            'Buen trabajo. Las palabras estrella, espada y escoba empiezan con e.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 6,
      type: 'super_select_adv',
      instructions: ['Toca el botón'],
      data: {
        instructions: [''],
        button: {
          text: ['Selecciona las palabras que empiezan con e.'],
        },
        options: [
          {
            text: 'Elefante',
            image: 'elefante',
            correct: true,
          },
          {
            text: 'Espejo',
            image: 'espejo',
            correct: true,
          },
          {
            text: 'Enano',
            image: 'enano',
            correct: true,
          },
          {
            text: 'Iguana',
            image: 'iguana',
            correct: false,
          },
        ],
        feedback: {
          correct:
            'Buen trabajo. Las palabras elefante, espejo y enano empiezan con e.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 7,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instruction: '¿La palabra estrella empieza con e? ¿Sí o no?',
        instruction2: '',
        instruction3: '',
        instruction4: '',
        correct_answer: 'Sí',
        text: 'Estrella',
        staticImage: 'estrella',
        feedback: {
          correct: 'Buen trabajo. La palabra estrella empieza con e.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 8,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instruction: '¿La palabra ardilla empieza con e? ¿Sí o no?',
        instruction2: '',
        instruction3: '',
        instruction4: '',
        correct_answer: 'No',
        text: 'Ardilla',
        staticImage: 'ardilla',
        feedback: {
          correct:
            'Buen trabajo. La palabra ardilla no empieza con e, empieza con a.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
  ],
};
