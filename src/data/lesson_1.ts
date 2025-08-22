//

// App

import { Lesson } from '@/types';

export const Lesson1: Lesson = {
  id: 1,
  tasks: [
    {
      id: 1,
      type: 'tap',
      instructions: ['Toca la carta y escucha la oración'],
      data: {
        button: {
          text: 'El ave canta',
          image: 'ave',
        },
        feedback: {
          correct: '¡Buen trabajo!',
        },
      },
    },
    {
      id: 2,
      type: 'tap',
      instructions: ['Toca la carta y escucha la oración'],
      data: {
        button: {
          text: 'La abeja zumba',
          image: 'abeja',
        },
        feedback: {
          correct: '¡Buen trabajo!',
        },
      },
    },
    {
      id: 3,
      type: 'select',
      instructions: ['Toca el botón y escucha la oración'],
      data: {
        instructions: [
          'Selecciona la carta que tiene la palabra que escuchaste',
        ],
        button: {
          text: 'El árbol es alto',
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
          correct: '¡Buen trabajo! La oración tiene la palabra árbol',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 4,
      type: 'select',
      instructions: ['Toca el botón y escucha la oración'],
      data: {
        instructions: [
          'Selecciona la carta que tiene la palabra que escuchaste',
        ],
        button: {
          text: 'El oso duerme',
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
          correct: '¡Buen trabajo! La oración tiene la palabra oso',
          incorrect: 'Casi, intenta otra vez',
        },
      },
    },
    {
      id: 5,
      type: 'count',
      instructions: ['Toca la carta y escucha la oración'],
      data: {
        instructions: [
          'Toca las burbujas y cuenta el número de palabras en la oración',
        ],
        button: {
          text: 'La abeja zumba',
          image: 'abeja',
        },
        count: 3,
        feedback: {
          correct: '¡Buen trabajo! La oración tiene tres palabras',
        },
      },
    },
    {
      id: 6,
      type: 'count',
      instructions: ['Toca la carta y escucha la oración'],
      data: {
        instructions: [
          'Toca las burbujas y cuenta el número de palabras en la oración',
        ],
        button: {
          text: 'El anillo es brillante',
          image: 'anillo',
        },
        count: 4,
        feedback: {
          correct: '¡Buen trabajo! La oración tiene cuatro palabras',
        },
      },
    },
    {
      id: 7,
      type: 'super_tap',
      instructions: ['Toca las cartas y escucha las oraciones'],
      data: {
        buttons: [
          {
            text: 'Ave canta',
            image: 'ave',
          },
          {
            text: 'Canta ave',
            image: 'ave2',
          },
        ],
        feedback: {
          correct: [
            '¡Buen trabajo!',
            'Primero escuchamos una oración con la palabra ave',
            'Y después escuchamos la oración en otro orden',
          ],
        },
      },
    },
    {
      id: 8,
      type: 'super_tap',
      instructions: ['Toca las cartas y escucha las oraciones'],
      data: {
        buttons: [
          {
            text: 'Anillo brillante',
            image: 'anillo',
          },
          {
            text: 'Brillante anillo',
            image: 'anillo2',
          },
        ],
        feedback: {
          correct: [
            '¡Buen trabajo!',
            'Primero escuchamos una oración con la palabra anillo',
            'Y después escuchamos la oración en otro orden',
          ],
        },
      },
    },
    {
      id: 9,
      type: 'super_select',
      instructions: ['Toca el botón y escucha las oraciones'],
      data: {
        instructions: [
          'El árbol es alto',
          'El arco es alto',
          'Selecciona las cartas que tienen las palabras que cambiaron',
        ],
        images: ['arbol', 'arco'],
        feedback: {
          correct:
            '¡Buen trabajo! Las palabras que cambiaron fueron árbol y arco',
          incorrect: 'Casi, intenta otra vez',
        },
        options: [
          {
            text: 'Árbol',
            image: 'arbol',
            correct: true,
          },
          {
            text: 'Arco',
            image: 'arco',
            correct: true,
          },
          {
            text: 'Ave',
            image: 'ave',
            correct: false,
          },
          {
            text: 'Aro',
            image: 'aro',
            correct: false,
          },
        ],
      },
    },
    {
      id: 10,
      type: 'super_select',
      instructions: ['Toca el botón y escucha las oraciones'],
      data: {
        instructions: [
          'El avión vuela',
          'El ave vuela',
          'Selecciona las cartas que tienen las palabras que cambiaron',
        ],
        images: ['avion', 'ave'],
        feedback: {
          correct:
            '¡Buen trabajo! Las palabras que cambiaron fueron avión y ave',
          incorrect: 'Casi, intenta otra vez',
        },
        options: [
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
          {
            text: 'Arco',
            image: 'arco',
            correct: false,
          },
        ],
      },
    },
  ],
};
