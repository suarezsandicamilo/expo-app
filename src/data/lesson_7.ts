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
          text: 'Abeja. Aa - beja.',
          image: 'abeja',
        },
        feedback: {
          correct: 'Buen trabajo. La palabra abeja empieza con a.',
        },
      },
    },
    {
      id: 2,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra.'],
      data: {
        button: {
          text: 'Anillo. Aa - nillo.',
          image: 'anillo',
        },
        feedback: {
          correct: 'Buen trabajo. La palabra anillo empieza con a.',
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
          text: 'Selecciona la palabra que empieza con a.',
        },
        options: [
          {
            text: 'Abeja',
            image: 'abeja',
            correct: true,
          },
          {
            text: 'Uva',
            image: 'uva',
            correct: false,
          },
          {
            text: 'Oso',
            image: 'oso',
            correct: false,
          },
          {
            text: 'Imán',
            image: 'iman',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La palabra abeja empieza con a.',
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
          text: 'Selecciona la palabra que empieza con a.',
        },
        options: [
          {
            text: 'Anillo',
            image: 'anillo',
            correct: true,
          },
          {
            text: 'Uva',
            image: 'uva',
            correct: false,
          },
          {
            text: 'Oso',
            image: 'oso',
            correct: false,
          },
          {
            text: 'Imán',
            image: 'iman',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La palabra anillo empieza con a.',
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
          text: ['Selecciona las palabras que empiezan con a.'],
        },
        options: [
          {
            text: 'Abeja',
            image: 'abeja',
            correct: true,
          },
          {
            text: 'Avión',
            image: 'avion',
            correct: true,
          },
          {
            text: 'Ave',
            image: 'ave',
            correct: true,
          },
          {
            text: 'Uva',
            image: 'uva',
            correct: false,
          },
        ],
        feedback: {
          correct:
            'Buen trabajo. Las palabras abeja, avión y ave empiezan con a.',
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
          text: ['Selecciona las palabras que empiezan con a.'],
        },
        options: [
          {
            text: 'Anillo',
            image: 'anillo',
            correct: true,
          },
          {
            text: 'Abeja',
            image: 'abeja',
            correct: true,
          },
          {
            text: 'Oso',
            image: 'oso',
            correct: false,
          },
          {
            text: 'Imán',
            image: 'iman',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. Las palabras anillo y abeja empiezan con a.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 7,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instruction: '¿La palabra abeja empieza con a? ¿Sí o no?',
        instruction2: '',
        instruction3: '',
        instruction4: '',
        correct_answer: 'Sí',
        text: 'Abeja',
        staticImage: 'abeja',
        feedback: {
          correct: 'Buen trabajo. La palabra abeja empieza con a.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 8,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instruction: '¿La palabra imán empieza con a? ¿Sí o no?',
        instruction2: '',
        instruction3: '',
        instruction4: '',
        correct_answer: 'No',
        text: 'Imán',
        staticImage: 'iman',
        feedback: {
          correct:
            'Buen trabajo. La palabra imán no empieza con a, empieza con i.',
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
          text: '¿Si en la palabra, abeja, cambiamos la a, por una o, qué palabra formamos?',
        },
        options: [
          {
            text: 'Oveja',
            image: 'oveja',
            correct: true,
          },
          {
            text: 'Avión',
            image: 'avion',
            correct: false,
          },
          {
            text: 'Uva',
            image: 'uva',
            correct: false,
          },
          {
            text: 'Oso',
            image: 'oso',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La palabra es oveja.',
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
          text: '¿Si en la palabra, ala, cambiamos la a, por una o, qué palabra formamos?',
        },
        options: [
          {
            text: 'Ola',
            image: 'ola',
            correct: true,
          },
          {
            text: 'Abeja',
            image: 'abeja',
            correct: false,
          },
          {
            text: 'Árbol',
            image: 'arbol',
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
  ],
};
