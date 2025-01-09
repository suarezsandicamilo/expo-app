//

// App

import { IconButton } from '@/components';
import { useAudio, useSpeech } from '@/hooks';

type Props = {
  button: {
    text: string;
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
    <IconButton
      name="volume-up"
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
