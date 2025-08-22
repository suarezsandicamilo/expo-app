//

// App

import { Lesson } from '@/types';

export const Lesson15: Lesson = {
  id: 15,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra'],
      data: {
        button: {
          text: 'Esquimal',
          image: 'esquimal',
        },
        feedback: {
          correct: '¡Buen trabajo! La palabra esquimal comienza con e',
        },
      },
    },
    {
      id: 2,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra'],
      data: {
        button: {
          text: 'Iglú',
          image: 'iglu',
        },
        feedback: {
          correct: '¡Buen trabajo! La palabra iglú comienza con i',
        },
      },
    },
    {
      id: 3,
      type: 'select',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['Selecciona la palabra que comienza con e'],
        button: {
          text: '',
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
          correct: '¡Buen trabajo! La palabra esquimal comienza con e',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 4,
      type: 'select',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['Selecciona la palabra que comienza con i'],
        button: {
          text: '',
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
          correct: '¡Buen trabajo! La palabra iglú comienza con i',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 5,
      type: 'super_select_adv',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['Selecciona las palabras que comienzan con e'],
        button: {
          text: '',
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
            '¡Buen trabajo! Las palabras esquimal, edificio y elefante comienzan con e',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 6,
      type: 'super_select_adv',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['Selecciona las palabras que comienzan con i'],
        button: {
          text: '',
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
            '¡Buen trabajo! Las palabras iglú, iglesia e iguana comienzan con i',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 7,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['¿La palabra esquimal comienza con a? ¿Sí o no?'],
        correct_answer: 'No',
        text: 'Esquimal',
        image: 'esquimal',
        feedback: {
          correct: '¡Buen trabajo!',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 8,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instructions: ['¿La palabra iglú comienza con i? ¿Sí o no?'],
        correct_answer: 'Sí',
        text: 'Iglú',
        image: 'iglu',
        feedback: {
          correct: '¡Buen trabajo!',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
  ],
};
