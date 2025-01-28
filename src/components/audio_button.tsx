import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  text: string;
  onPress: () => void;
  isSelected: boolean;
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export const AudioButton = ({ text, onPress, isSelected }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        isSelected && { backgroundColor: 'lightgreen' },
      ]}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};
