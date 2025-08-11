//

export type SoundKey = keyof typeof Sounds;

export const Sounds = {
  correct: require('./correct.mp3'),
  correct_extended: require('./correct_extended.mp3'),
  end: require('./end.mp3'),
  end_extended: require('./end_extended.mp3'),
  incorrect: require('./incorrect.mp3'),
  incorrect_extended: require('./incorrect_extended.mp3'),
} as const;
