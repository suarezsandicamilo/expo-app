//

// Expo

import { MaterialIcons } from '@expo/vector-icons';

// App

import { Colors } from '@/constants';

type Props = {
  color?: string;
  name?: keyof typeof MaterialIcons.glyphMap;
  size?: number;
};

export const Icon = (props: Props) => {
  const size = props.size != undefined ? props.size : 24;

  return (
    <MaterialIcons
      color={props.color ?? Colors['text-2']}
      name={props.name ?? 'abc'}
      size={size}
    />
  );
};
