//

export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const random = (min: number, max: number) => {
  return min + Math.floor(Math.random() * (max - min));
};

export const shuffle = <T>(array: T[]) => {
  const result = [...array];

  for (let i = 0; i < result.length; i++) {
    const j = random(0, i);

    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
};
