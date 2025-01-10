//

// React Navigation

import { NativeStackScreenProps } from '@react-navigation/native-stack';

// App

import { Path } from '@/components';
import { RootStackParamList } from '@/shared';

type Props = NativeStackScreenProps<RootStackParamList, 'home'>;

export const PathScreen = (props: Props) => {
  return <Path {...props} />;
};
