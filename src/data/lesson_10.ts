//

// App

import { Lesson } from '@/types';

export const Lesson10: Lesson = {
  id: 10,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra.'],
      data: {
        button: {
          text: 'Manzana. Man  , zana.',
          image: 'manzana',
        },
        feedback: {
          correct: 'Buen trabajo. La palabra manzana rima con: ana.',
        },
      },
    },
    {
      id: 2,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra.'],
      data: {
        button: {
          text: 'Espejo. Es  , pejo.',
          image: 'espejo',
        },
        feedback: {
          correct: 'Buen trabajo. La palabra espejo rima con: eejo',
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
            text: 'Manzana. Man  , zana',
            image: 'manzana',
          },
          {
            text: 'Campana. Cam  , pana',
            image: 'campana',
          },
        ],
        feedback: {
          correct: [
            'Buen trabajo.',
            'Las palabras manzana y campana riman con: ana',
          ],
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
            text: 'Espejo . Es  , pejo',
            image: 'espejo',
          },
          {
            text: 'Conejo. Co  , nejo',
            image: 'conejo',
          },
        ],
        feedback: {
          correct: [
            'Buen trabajo.',
            'Las palabras espejo y conejo riman con: eejo',
          ],
        },
      },
    },
    {
      id: 5,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instruction: '¿La palabra Manzana rima con campana? ¿Sí o no?',
        instruction2: '',
        instruction3: '',
        instruction4: '',
        correct_answer: 'Sí',
        text: 'Manzana',
        staticImage: 'manzana',
        feedback: {
          correct: 'Buen trabajo. La palabra manzana rima con campana',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 6,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instruction: '¿La palabra Iguana rima con espejo? ¿Sí o no?',
        instruction2: '',
        instruction3: '',
        instruction4: '',
        correct_answer: 'No',
        text: 'Iguana',
        staticImage: 'iguana',
        feedback: {
          correct: 'Buen trabajo. La palabra iguana no rima con espejo.',
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
          text: 'Selecciona la palabra que rima con: illa',
        },
        options: [
          {
            text: 'Ardilla',
            image: 'ardilla',
            correct: true,
          },
          {
            text: 'Estrella',
            image: 'estrella',
            correct: false,
          },
          {
            text: 'Escoba',
            image: 'escoba',
            correct: false,
          },
          {
            text: 'Conejo',
            image: 'conejo',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. Ardilla rima con: illa.',
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
          text: 'Selecciona la palabra que rima con: ante',
        },
        options: [
          {
            text: 'Elefante',
            image: 'elefante',
            correct: true,
          },
          {
            text: 'Araña',
            image: 'araña',
            correct: false,
          },
          {
            text: 'Barco',
            image: 'barco',
            correct: false,
          },
          {
            text: 'Oso',
            image: 'oso',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. Elefante rima con: ante.',
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
          text: ['Selecciona las palabras que riman con: eejo'],
        },
        options: [
          {
            text: 'Conejo',
            image: 'conejo',
            correct: true,
          },
          {
            text: 'Ardilla',
            image: 'ardilla',
            correct: false,
          },
          {
            text: 'Espejo',
            image: 'espejo',
            correct: true,
          },
          {
            text: 'Espada',
            image: 'espada',
            correct: false,
          },
        ],
        feedback: {
          correct:
            'Buen trabajo. Las palabras Conejo y espejo riman con: eejo.',
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
          text: ['Selecciona las palabras que riman con: ana'],
        },
        options: [
          {
            text: 'Manzana',
            image: 'manzana',
            correct: true,
          },
          {
            text: 'Estrella',
            image: 'estrella',
            correct: false,
          },
          {
            text: 'Iguana',
            image: 'iguana',
            correct: true,
          },
          {
            text: 'Campana',
            image: 'campana',
            correct: true,
          },
        ],
        feedback: {
          correct:
            'Buen trabajo. Las palabras manzana, campana e iguana riman con: ana.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
  ],
};
