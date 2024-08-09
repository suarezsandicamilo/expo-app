//

// React Native

import { Pressable } from 'react-native';

// App

import { useSpeech } from '@/hooks';

type Props = React.PropsWithChildren<{
  speech?: string;
  onPress?: () => void;
}>;

/**
 * @deprecated
 */
export const SpeechView = (props: Props) => {
  const { speak } = useSpeech();

  return (
    <Pressable
      onPress={() => {
        speak(props.speech).then(() => {
          if (props.onPress) {
            props.onPress();
          }
        });
      }}
    >
      {props.children}
    </Pressable>
  );
};
