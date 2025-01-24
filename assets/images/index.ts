//

export type ImageKey = keyof typeof Images;

export const Images = {
  abeja: require('./abeja.png'),
  arbol: require('./arbol.png'),
  avion: require('./avion.png'),
  ave: require('./ave.png'),
  logo_1: require('./logo_1.png'),
  logo_2: require('./logo_2.png'),
  logo_3: require('./logo_3.png'),
  panda: require('./panda.png'),
} as const;
