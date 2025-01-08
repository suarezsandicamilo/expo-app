//

export type ImageKey = keyof typeof Images;

export const Images = {
  abeja: require('./abeja.png'),
  arbol: require('./arbol.png'),
  avion: require('./avion.png'),
  ave: require('./ave.png'),
  panda: require('./panda.png'),
} as const;
