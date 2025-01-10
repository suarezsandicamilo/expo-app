//

// React Native

import { StyleSheet, View } from 'react-native';

// React Navigation

import { NativeStackScreenProps } from '@react-navigation/native-stack';

// App

import { IconButton } from '@/components';
import { Colors } from '@/constants';
import { LockProvider } from '@/contexts';
import { Db } from '@/db';
import { useAudio, useEffectAsync } from '@/hooks';
import { RootStackParamList } from '@/shared';

type Props = NativeStackScreenProps<RootStackParamList, 'end'>;

export const EndScreen = (props: Props) => {
  return (
    <LockProvider>
      <InEndScreen {...props} />
    </LockProvider>
  );
};

const InEndScreen = (props: Props) => {
  const { play } = useAudio();

  useEffectAsync(async () => {
    await play('end', 2500);
  }, []);

  return (
    <View style={styles.container}>
      <IconButton
        color={Colors['star-1']}
        name="verified"
        size={192}
        onPress={async () => {
          // const p = await Db.get('progress', 0);

          // await Db.set('progress', p + 1);

          await Db.set('progress', 0);

          props.navigation.navigate('home');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors['background-1'],
    flex: 1,
    justifyContent: 'center',
  },
});
