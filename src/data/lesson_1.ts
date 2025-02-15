//

// App

import { Lesson } from '@/types';

export const Lesson1: Lesson = {
  id: 1,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la oración.'],
      data: {
        button: {
          text: 'El ave canta',
          image: 'ave',
        },
        feedback: {
          correct: 'Buen trabajo.',
        },
      },
    },
    {
      id: 2,
      type: 'tap',
      instructions: ['Toca la carta y escucha la oración.'],
      data: {
        button: {
          text: 'La abeja zumba.',
          image: 'abeja',
        },
        feedback: {
          correct: 'Buen trabajo.',
        },
      },
    },
    {
      id: 3,
      type: 'select',
      instructions: ['Toca el botón y escucha la oración.'],
      data: {
        instructions: ['El árbol es alto'],
        button: {
          text: 'Selecciona la carta que tiene la palabra que escuchaste.',
        },
        options: [
          {
            text: 'Ave',
            image: 'ave',
            correct: false,
          },
          {
            text: 'Árbol',
            image: 'arbol',
            correct: true,
          },
          {
            text: 'Uva',
            image: 'uva',
            correct: false,
          },
          {
            text: 'Arco',
            image: 'arco',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La oracion incluye la palabra árbol.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 4,
      type: 'select',
      instructions: ['Toca el botón y escucha la oración.'],
      data: {
        instructions: ['El oso duerme'],
        button: {
          text: 'Selecciona la carta que tiene la palabra que escuchaste.',
        },
        options: [
          {
            text: 'Oso',
            image: 'oso',
            correct: true,
          },
          {
            text: 'Ala',
            image: 'ala',
            correct: false,
          },
          {
            text: 'Imán',
            image: 'iman',
            correct: false,
          },
          {
            text: 'Anillo',
            image: 'anillo',
            correct: false,
          },
        ],
        feedback: {
          correct: 'Buen trabajo. La oracion incluye la palabra oso.',
          incorrect: 'Casi, intenta otra vez.',
        },
      },
    },
    {
      id: 5,
      type: 'count',
      instructions: ['Toca el botón y escucha la oración.'],
      data: {
        instructions: [
          'Toca las burbujas y cuenta el número de palabras en la oración.',
        ],
        button: {
          text: 'La abeja zumba.',
        },
        count: 3,
        feedback: {
          correct: '¡Buen trabajo! La oración tiene tres palabras.',
        },
      },
    },
    {
      id: 6,
      type: 'count',
      instructions: ['Toca el botón y escucha la oración.'],
      data: {
        instructions: [
          'Toca las burbujas y cuenta el número de palabras en la oración.',
        ],
        button: {
          text: 'El anillo es brillante.',
        },
        count: 4,
        feedback: {
          correct: '¡Buen trabajo! La oración tiene cuatro palabras.',
        },
      },
    },
    {
      id: 7,
      type: 'super_tap',
      instructions: ['Toca los botones y escucha las oraciones.'],
      data: {
        buttons: [
          {
            text: 'Ave canta.',
          },
          {
            text: 'Canta ave.',
          },
        ],
        feedback: {
          correct: [
            '¡Buen trabajo!',
            'Primero escuchamos una oración con la palabra ave',
            'Y luego escuchamos la oración al revés.',
          ],
        },
      },
    },
    {
      id: 8,
      type: 'super_tap',
      instructions: ['Toca los botones y escucha las oraciones.'],
      data: {
        buttons: [
          {
            text: 'Anillo brillante.',
          },
          {
            text: 'Brillante anillo.',
          },
        ],
        feedback: {
          correct: [
            '¡Buen trabajo!',
            'Primero escuchamos una oración con la palabra anillo',
            'Y luego escuchamos la oración al revés.',
          ],
        },
      },
    },
    {
      id: 9,
      type: 'super_tap',
      instructions: ['Toca los botones y escucha las oraciones.'],
      data: {
        buttons: [
          {
            text: 'El árbol es alto.',
          },
          {
            text: 'El arco es alto.',
          },
        ],
        feedback: {
          correct: [
            '¡Buen trabajo!',
            'Las palabras que cambiaron entre las oraciones fueron',
            'árbol',
            'y',
            'arco',
          ],
        },
      },
    },
    {
      id: 10,
      type: 'super_tap',
      instructions: ['Toca los botones y escucha las oraciones.'],
      data: {
        buttons: [
          {
            text: 'El avión vuela.',
          },
          {
            text: 'El ave vuela.',
          },
        ],
        feedback: {
          correct: [
            '¡Buen trabajo!',
            'Las palabras que cambiaron entre las oraciones fueron',
            'avión',
            'y',
            'ave',
          ],
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
  ],
};
