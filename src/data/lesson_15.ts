//

// App

import { Lesson } from '@/types';

export const Lesson15: Lesson = {
  id: 15,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra.'],
      data: {
        button: {
          text: 'Esquimal. Ee - squimal.',
          image: 'esquimal',
        },
        feedback: {
          correct: 'Buen trabajo. La palabra esquimal empieza con e.',
        },
      },
    },
    {
      id: 2,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra.'],
      data: {
        button: {
          text: 'Iglú. Ii - glú.',
          image: 'iglu',
        },
        feedback: {
          correct: 'Buen trabajo. La palabra iglú empieza con i.',
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
            text: 'Esquimal',
            image: 'esquimal',
            correct: true,
          },
          {
            text: 'Isla',
            image: 'isla',
            correct: false,
          },
          {
            text: 'Iglesia',
            image: 'iglesia',
            correct: false,
          },
          {
            text: 'Insecto',
            image: 'insecto',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La palabra esquimal empieza con e.',
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
          text: 'Selecciona la palabra que empieza con i.',
        },
        options: [
          {
            text: 'Iglú',
            image: 'iglu',
            correct: true,
          },
          {
            text: 'Esquimal',
            image: 'esquimal',
            correct: false,
          },
          {
            text: 'Edificio',
            image: 'edificio',
            correct: false,
          },
          {
            text: 'Escalera',
            image: 'escalera',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La palabra iglú empieza con i.',
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
            text: 'Esquimal',
            image: 'esquimal',
            correct: true,
          },
          {
            text: 'Edificio',
            image: 'edificio',
            correct: true,
          },
          {
            text: 'Elefante',
            image: 'elefante',
            correct: true,
          },
          {
            text: 'Abeja',
            image: 'abeja',
            correct: false,
          },
        ],
        feedback: {
          correct:
            'Buen trabajo. Las palabras esquimal, edificio y elefante empiezan con e.',
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
          text: ['Selecciona las palabras que empiezan con i.'],
        },
        options: [
          {
            text: 'Iglú',
            image: 'iglu',
            correct: true,
          },
          {
            text: 'Iglesia',
            image: 'iglesia',
            correct: true,
          },
          {
            text: 'Iguana',
            image: 'iguana',
            correct: true,
          },
          {
            text: 'Esquimal',
            image: 'esquimal',
            correct: false,
          },
        ],
        feedback: {
          correct:
            'Buen trabajo. Las palabras iglú, iglesia e iguana empiezan con i.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 7,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instruction: '¿La palabra esquimal empieza con a? ¿Sí o no?',
        instruction2: '',
        instruction3: '',
        instruction4: '',
        correct_answer: 'No',
        text: 'Esquimal',
        staticImage: 'esquimal',
        feedback: {
          correct:
            'Buen trabajo. La palabra esquimal no empieza con a, empieza con e.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 8,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instruction: '¿La palabra iglú empieza con i? ¿Sí o no?',
        instruction2: '',
        instruction3: '',
        instruction4: '',
        correct_answer: 'Sí',
        text: 'Iglú',
        staticImage: 'iglu',
        feedback: {
          correct: 'Buen trabajo. La palabra iglú empieza con i.',
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
          text: '¿Si en la palabra, olla, cambiamos la o, por una e, qué palabra formamos?',
        },
        options: [
          {
            text: 'Ella',
            image: 'ella',
            correct: true,
          },
          {
            text: 'Isla',
            image: 'isla',
            correct: false,
          },
          {
            text: 'Iglesia',
            image: 'iglesia',
            correct: false,
          },
          {
            text: 'Insecto',
            image: 'insecto',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La palabra es ella.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
  ],
};
