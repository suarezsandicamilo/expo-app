//

export type SoundKey = keyof typeof Sounds;

export const Sounds = {
  correct: require('./correct.mp3'),
  end: require('./end.mp3'),
  incorrect: require('./incorrect.mp3'),
  tap: require('./tap.mp3'),
} as const;
