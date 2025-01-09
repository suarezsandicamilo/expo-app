//

// App

import { ImageButton } from '@/components';
import { useAudio, useSpeech } from '@/hooks';
import { ImageKey } from '../../assets/images';

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

  return (
    <ImageButton
      source={(props.button.image ?? props.button.text) as ImageKey}
      size={192}
      onPress={async () => {
        await speak(props.button.text);

        await play('correct');

        await speak(props.feedback.correct);

        props.next();
      }}
    />
  );
};
