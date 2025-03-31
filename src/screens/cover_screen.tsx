import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/shared';
import { useFonts } from 'expo-font';

type Props = NativeStackScreenProps<RootStackParamList, 'cover'>;

export const CoverScreen = ({ navigation }: Props) => {
  return (
    <ImageBackground
      source={require('../../assets/background2.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Imagen antes del título */}
        <Image
          source={require('../../assets/icon_no_bg.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Fono Aventura</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace('home')}
        >
          <Text style={styles.buttonText}>Comenzar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200, // Ancho de la imagen
    height: 200, // Alto de la imagen
    marginBottom: 0, // Espaciado entre la imagen y el título
  },
  title: {
    fontSize: 48, // Tamaño grande para destacar
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#4CAF50', // Verde vibrante
    textShadowColor: '#81C784', // Sombra verde claro
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    textAlign: 'center',
    fontFamily: 'Baloo', // Fuente infantil (puedes usar una fuente personalizada)
  },
  subtitle: {
    fontSize: 24, // Tamaño más grande para subtítulos
    color: '#388E3C', // Verde más oscuro
    textShadowColor: '#66BB6A', // Sombra verde claro
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Baloo', // Fuente infantil
  },
  button: {
    backgroundColor: '#28a745',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 32, 
    shadowColor: '#0e285d', 
    shadowOffset: { width: 1, height: 5 }, 
    shadowOpacity: 1, 
    shadowRadius: 0, 
    elevation: 5, 
  },
  buttonText: {
    color: 'white', 
    fontSize: 16, 
    fontWeight: 'bold',
    textAlign: 'center',
  },
});