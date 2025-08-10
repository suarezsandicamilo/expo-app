//

// React Native

import { StyleSheet, View } from 'react-native';

// React Navigation

import { NativeStackScreenProps } from '@react-navigation/native-stack';

// App

import { IconButton } from '@/components';
import { Colors } from '@/constants';
import { LockProvider } from '@/contexts';
import { Lessons } from '@/data';
import { Db } from '@/db';
import { useAudio, useEffectAsync } from '@/hooks';
import { RootStackParamList } from '@/shared';
import { Progress } from '@/types';

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
          const p = await Db.get<Progress>(
            'progress',
            Object.fromEntries(Lessons.map((lesson) => [lesson.id, false])),
          );

          p[props.route.params.lesson.id] = true;

          await Db.set<Progress>('progress', p);

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
