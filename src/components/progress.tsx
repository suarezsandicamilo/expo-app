//

// React Native

import { StyleSheet, View } from 'react-native';

// App

const styles = StyleSheet.create({
  container_1: {
    backgroundColor: '#8bc34a',
    borderRadius: 4,
    height: 8,
    margin: 8,
    width: 256,
  },
  container_2: {
    backgroundColor: '#33691e',
    borderRadius: 4,
    height: 8,
  },
});

type Props = {
  value?: number;
};

export const Progress = (props: Props) => {
  const value = props.value ?? 0.5;

  return (
    <View style={styles.container_1}>
      <View
        style={[
          styles.container_2,
          {
            width: `${value * 100}%`,
          },
        ]}
      />
    </View>
  );
};
