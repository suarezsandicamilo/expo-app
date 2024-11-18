// components/ConfirmationButton.tsx

// React
import React, { useRef } from 'react';

// React Native
import { Animated, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';

// Iconos
import { AntDesign } from '@expo/vector-icons';

type Props = {
  onPress: () => void;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
  height?: number;
  width?: number;
  disabled?: boolean;
};

export const ConfirmationButton: React.FC<Props> = ({
  onPress,
  size = 50,
  color = '#ffffff',
  style,
  height = 100,
  width = 150,
}) => {
  // Animación para el botón
  const scaleAnim = useRef(new Animated.Value(1)).current;

  // Animación de escala
  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.9, // Reducir ligeramente el tamaño
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1, // Volver al tamaño original
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[
        {
          transform: [{ scale: scaleAnim }],
          height,
          width,
        },
        style,
      ]}
    >
      <TouchableOpacity
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={{
          backgroundColor: '#8bc24a',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
        }}
      >
        <AntDesign name="checkcircleo" size={size} color={color} />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ConfirmationButton;
