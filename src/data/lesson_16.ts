//

// App

import { Lesson } from '@/types';

export const Lesson16: Lesson = {
  id: 16,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra.'],
      data: {
        button: {
          text: 'Oveja. Oo  , veja.',
          image: 'oveja',
        },
        feedback: {
          correct: 'Buen trabajo. La palabra oveja empieza con o.',
        },
      },
    },
    {
      id: 2,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra.'],
      data: {
        button: {
          text: 'Uva. Uu  , va.',
          image: 'uva',
        },
        feedback: {
          correct: 'Buen trabajo. La palabra uva empieza con u.',
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
          text: 'Selecciona la palabra que empieza con o.',
        },
        options: [
          {
            text: 'Oveja',
            image: 'oveja',
            correct: true,
          },
          {
            text: 'Árbol',
            image: 'arbol',
            correct: false,
          },
          {
            text: 'Estrella',
            image: 'estrella',
            correct: false,
          },
          {
            text: 'Imán',
            image: 'iman',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La palabra oveja empieza con o.',
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
          text: 'Selecciona la palabra que empieza con u.',
        },
        options: [
          {
            text: 'Uva',
            image: 'uva',
            correct: true,
          },
          {
            text: 'Espada',
            image: 'espada',
            correct: false,
          },
          {
            text: 'Escoba',
            image: 'escoba',
            correct: false,
          },
          {
            text: 'Iguana',
            image: 'iguana',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La palabra uva empieza con u.',
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
          text: ['Selecciona las palabras que empiezan con o.'],
        },
        options: [
          {
            text: 'Oveja',
            image: 'oveja',
            correct: true,
          },
          {
            text: 'Ovillo',
            image: 'ovillo',
            correct: true,
          },
          {
            text: 'Oruga',
            image: 'oruga',
            correct: true,
          },
          {
            text: 'Estrella',
            image: 'estrella',
            correct: false,
          },
        ],
        feedback: {
          correct:
            'Buen trabajo. Las palabras oveja, ovillo y oruga empiezan con o.',
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
          text: ['Selecciona las palabras que empiezan con u.'],
        },
        options: [
          {
            text: 'Uva',
            image: 'uva',
            correct: true,
          },
          {
            text: 'Útiles',
            image: 'utiles',
            correct: true,
          },
          {
            text: 'Espejo',
            image: 'espejo',
            correct: false,
          },
          {
            text: 'Enano',
            image: 'enano',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. Las palabras uva y útiles empiezan con u.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 7,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instruction: '¿La palabra oveja empieza con o? ¿Sí o no?',
        instruction2: '',
        instruction3: '',
        instruction4: '',
        correct_answer: 'Sí',
        text: 'Oveja',
        staticImage: 'oveja',
        feedback: {
          correct: 'Buen trabajo. La palabra oveja empieza con o.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 8,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instruction: '¿La palabra uva empieza con u? ¿Sí o no?',
        instruction2: '',
        instruction3: '',
        instruction4: '',
        correct_answer: 'Sí',
        text: 'Uva',
        staticImage: 'uva',
        feedback: {
          correct: 'Buen trabajo. La palabra uva empieza con u.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 9,
      type: 'select',
      instructions: ['Toca el botón'],
      data: {
        instructions: [''],
        button: {
          text: '¿Si en la palabra, aro, cambiamos la a, por una o, qué palabra formamos?',
        },
        options: [
          {
            text: 'Oro',
            image: 'oro',
            correct: true,
          },
          {
            text: 'Ovillo',
            image: 'ovillo',
            correct: false,
          },
          {
            text: 'Oruga',
            image: 'oruga',
            correct: false,
          },
          {
            text: 'Ojo',
            image: 'ojo',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La palabra es oro.',
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
          text: '¿Si en la palabra, ojo, cambiamos la o, por una a, qué palabra formamos?',
        },
        options: [
          {
            text: 'Ajo',
            image: 'ajo',
            correct: true,
          },
          {
            text: 'Útiles',
            image: 'utiles',
            correct: false,
          },
          {
            text: 'Unicornio',
            image: 'unicornio',
            correct: false,
          },
          {
            text: 'Uña',
            image: 'uña',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La palabra es ajo.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
  ],
};
