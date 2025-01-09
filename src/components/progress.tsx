//

// React Native

import { StyleSheet, View } from 'react-native';

// App

import { Colors } from '@/constants';

type Props = {
  progress: number;
  count: number;
};

export const Progress = (props: Props) => {
  const width = (props.progress / props.count) * 100;

  return (
    <View style={styles.container_1}>
      <View
        style={[
          styles.container_2,
          {
            width: `${width}%`,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container_1: {
    backgroundColor: Colors['theme-1-light'],
    borderRadius: 8,
    height: 12,
    width: '100%',
  },
  container_2: {
    backgroundColor: Colors['theme-1-dark'],
    borderRadius: 8,
    height: 12,
  },
});
