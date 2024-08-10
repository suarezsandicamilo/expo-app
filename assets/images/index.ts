//

const images = {};

export type ImageSource = keyof typeof images;

export const getImage = (name?: ImageSource) => {
  const def = `https://placehold.co/256x256@3x/aed581/33691e/png?text=${name}&font=Roboto`;

  if (name == undefined) {
    return { uri: def };
  }

  return images[name] ?? { uri: def };
};
