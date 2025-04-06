//

// App

import { Lesson } from '@/types';

export const Lesson9: Lesson = {
  id: 9,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra.'],
      data: {
        button: {
          text: 'Abeja. A  , beja.',
          image: 'abeja',
        },
        feedback: {
          correct: 'Buen trabajo. La palabra abeja rima con eja.',
        },
      },
    },
    {
      id: 2,
      type: 'tap',
      instructions: ['Toca la carta y escucha la palabra.'],
      data: {
        button: {
          text: 'Anillo. A  , nillo.',
          image: 'anillo',
        },
        feedback: {
          correct: 'Buen trabajo. La palabra anillo rima con illo',
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
            text: 'Abeja. A  , beja',
            image: 'abeja'
          },
          {
            text: 'Oreja. O  , reja',
            image: 'oreja'
          }
        ],
        feedback: {
          correct: ['Buen trabajo. ','Las palabras Abeja y Oreja riman con: Eja'],
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
            text: 'Anillo . A  , nillo',
            image: 'anillo'
          },
          {
            text: 'Martillo. Mar  , tillo',
            image: 'martillo'
          }
        ],
        feedback: {
          correct: ['Buen trabajo. ','Las palabras anillo y martillo riman con: Illo'],
        },
      },
    },
    {
      id: 5,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instruction: '¿La palabra Barco rima con arco? ¿Sí o no?',
        instruction2: '',
        instruction3: '',
        instruction4: '',
        correct_answer: 'Sí',
        text: 'Barco',
        staticImage: 'barco',
        feedback: {
          correct: 'Buen trabajo. La palabra barco rima con arco',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 6,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instruction: '¿La palabra Abeja rima con oreja? ¿Sí o no?',
        instruction2: '',
        instruction3: '',
        instruction4: '',
        correct_answer: 'Sí',
        text: 'Abeja',
        staticImage: 'abeja',
        feedback: {
          correct: 'Buen trabajo. La palabra abeja rima con oreja.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 7,
      type: 'correct_incorrect',
      instructions: ['Toca el botón'],
      data: {
        instruction: '¿La palabra imán rima con ave? ¿Sí o no?',
        instruction2: '',
        instruction3: '',
        instruction4: '',
        correct_answer: 'No',
        text: 'Imán',
        staticImage: 'iman',
        feedback: {
          correct: 'Buen trabajo. La palabra imán no rima con ave. La palabra imán rima con titán.',
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
          text: 'Selecciona la palabra que rima con: Eja.',
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
            text: 'Ave',
            image: 'ave',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. Oveja rima con eja.',
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
          text: 'Selecciona la palabra que rima con: Arco.',
        },
        options: [
          {
            text: 'Martillo',
            image: 'martillo',
            correct: false,
          },
          {
            text: 'Imán',
            image: 'iman',
            correct: false,
          },
          {
            text: 'Barco',
            image: 'barco',
            correct: true,
          },
          {
            text: 'Oso',
            image: 'oso',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. Barco rima con arco.',
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
          text: ['Selecciona las palabras que riman con Eja'],
        },
        options: [
          {
            text: 'Abeja',
            image: 'abeja',
            correct: true,
          },
          {
            text: 'oreja',
            image: 'oreja',
            correct: true,
          },
          {
            text: 'Ave',
            image: 'ave',
            correct: false,
          },
          {
            text: 'Uva',
            image: 'uva',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. Las palabras abeja y oreja riman con eja.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 11,
      type: 'super_select_adv',
      instructions: ['Toca el botón'],
      data: {
        instructions: [''],
        button: {
          text: ['Selecciona las palabras que riman con arco'],
        },
        options: [
          {
            text: 'Arco',
            image: 'arco',
            correct: true,
          },
          {
            text: 'Imán',
            image: 'iman',
            correct: false,
          },
          {
            text: 'Barco',
            image: 'barco',
            correct: true,
          },
          {
            text: 'Ave',
            image: 'ave',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. Las palabras arco y barco riman con arco.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
  ],
};
