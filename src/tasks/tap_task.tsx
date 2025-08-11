//

import { ImageButton } from '@/components';
import { useAudio, useSpeech } from '@/hooks';
import { ImageKey } from '../../assets/images';
import { useWindowDimensions } from 'react-native';

type Props = {
  button: {
    text: string;
    image?: string;
  };
  feedback: {
    correct: string;
  };
  next: () => void;
};

export const TapTask = (props: Props) => {
  const { play } = useAudio();
  const { speak } = useSpeech();
  const { width, height } = useWindowDimensions(); // Obtener dimensiones de la pantalla

  return (
    <ImageButton
      source={(props.button.image ?? props.button.text) as ImageKey}
      size={Math.min(width, height) * 0.7} // Tamaño proporcional
      onPress={async () => {
        await speak(props.button.text);

        await play('correct');

        await speak(props.feedback.correct);

        props.next();
      }}
    />
  );
};
