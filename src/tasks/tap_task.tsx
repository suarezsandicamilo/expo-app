//

// Expo

import { MaterialIcons as Icon } from '@expo/vector-icons';

// App

import { Button } from '@/components';

import { useSound, useSpeech } from '@/hooks';

type Props = {
  next: () => void;
  text?: string;
  feedback?: string;
};

export const TapTask = (props: Props) => {
  const correct = useSound('correct');

  const { speak } = useSpeech();

  return (
    <Button
      onPress={async () => {
        await speak(props.text, 'esd');

        await correct.play();

        await speak(props.feedback);

        props.next();
      }}
    >
      <Icon name='volume-up' color='#ffffff' size={128} />
    </Button>
  );
};
