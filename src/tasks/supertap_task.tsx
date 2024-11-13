// Expo
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';

// App
import { Button, ConfirmationButton, ImageCard } from '@/components';
import { useSound, useSpeech } from '@/hooks';
import { getImage, ImageSource } from '@/../assets/images';

type Props = {
  next: () => void;
  instruction2?: string;
  text?: string;
  text2?: string;
  image?: ImageSource;
  image2?: ImageSource;
  feedback?: string;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
  },
  buttonStyle: {
    padding: 10,
    borderRadius: 10,
  },
  iconStyle: {
    fontSize: 64, // tamaño reducido del icono
  },
});

export const SuperTapTask = (props: Props) => {
  const correct = useSound('correct');
  const { speak } = useSpeech();
  
  // Controla la visibilidad de los botones
  const [showFirstButton, setShowFirstButton] = useState(false);
  const [showSecondButton, setShowSecondButton] = useState(false);
  const [showConfirmationButton, setShowConfirmationButton] = useState(false);
  
  return (
    <View style={styles.container}>
      <Button
          size={100}
          onPress={async () => {
            await speak(props.instruction2);
            setShowFirstButton(true);
          }}
          style={{ marginBottom: 40 }}
        >
          <Icon name="volume-up" color="#ffffff" size={70} />
        </Button>
        {showFirstButton && (
          <ImageCard
            image={getImage(props.image)}
            size={175}
            style={styles.buttonStyle}
            onPress={async () => {
              await speak(props.text);
              setShowSecondButton(true); // Muestra el segundo botón
            }}
          />
        )}


        {showSecondButton && (
          <ImageCard
            image={getImage(props.image2)}
            size={175}
            style={styles.buttonStyle}
            onPress={async () => {
              await speak(props.text2);
              setShowConfirmationButton(true); // Muestra el segundo botón
            }}
          />
        )}

      {/* Botón de confirmación */}
      {showConfirmationButton && (
        <View style={{ marginTop: 10, paddingHorizontal: 20, paddingVertical: 10, marginBottom: 30 }}>
          <ConfirmationButton
            onPress={async () => {
              await correct.play();
              await speak(props.feedback);
              await props.next();
            }}
          />
        </View>
      )}
    </View>
  );
};
