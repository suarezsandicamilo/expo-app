//

// App

import { ImageKey } from '@/../assets/images';
import { Image } from './image';
import { LockPressable } from './lock_pressable';

type Props = {
  source: ImageKey;
  size?: number;
  onPress?: () => void;
};

export const ImageButton = (props: Props) => {
  return (
    <LockPressable
      onPress={props.onPress}
      style={(state) => {
        if (state.pressed) {
          return {
            opacity: 0.25,
          };
        }
      }}
    >
      <Image source={props.source} size={props.size} />
    </LockPressable>
  );
};
