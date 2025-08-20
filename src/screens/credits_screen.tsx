//

// React

import React from 'react';

// React Native

import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Expo

import { StatusBar } from 'expo-status-bar';

// React Navigation

import { NativeStackScreenProps } from '@react-navigation/native-stack';

// App

import { IconButton, Image } from '@/components';
import { Colors } from '@/constants';
import { LockProvider } from '@/contexts';
import { RootStackParamList } from '@/shared';

type Props = NativeStackScreenProps<RootStackParamList, 'credits'>;

export const CreditsScreen = (props: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <LockProvider>
      <View
        style={[
          styles.container_1,
          {
            paddingTop: insets.top * 1.5,
          },
        ]}
      >
        <InCreditsScreen {...props} />
      </View>
    </LockProvider>
  );
};

export const InCreditsScreen = (props: Props) => {
  return (
    <>
      <StatusBar style="auto" backgroundColor={Colors['theme-1']} />
      <View style={styles.container_2}>
        <IconButton
          name="arrow-back"
          onPress={() => {
            props.navigation.navigate('home');
          }}
        />
      </View>
      <View style={styles.container_3}>
        <ScrollView style={{ width: '100%' }}>
          <View style={styles.container_4}>
            <View style={{ width: '100%' }}>
              <Text style={[styles.text, styles.header]}>Desarrolladores</Text>
              <Text style={styles.text}>Camilo Suárez Sandí</Text>
              <Text style={styles.text}>Cristopher Hernández Calderón</Text>
              <Text style={styles.text}>Ángel Chaves Chinchilla</Text>
              <Text style={styles.text}>David Cerdas Alvarado</Text>
            </View>
            <View style={{ width: '100%' }}>
              <View style={{ width: '100%' }}>
                <Text style={[styles.text, styles.header]}>
                  Asesoría Académica
                </Text>
                <Text style={styles.text}>
                  Dra. María Marta Camacho Álvarez
                </Text>
                <Text style={styles.text}>
                  - Coordinadora del proyecto TC-722, UCR
                </Text>
                <Text style={styles.text}>
                  Dra. María de los Ángeles Carpio Brenes
                </Text>
                <Text style={styles.text}>
                  - Profesional en Educación Especial, UCR
                </Text>
                <Text style={styles.text}>
                  Lda. Carmen Hernández Rojas
                </Text>
                <Text style={styles.text}>
                  - Profesional en Computación e Informática, UCR
                </Text>
                <Text style={styles.text}>
                  Dra. Marielos Murillo Rojas
                </Text>
                <Text style={styles.text}>
                  - Profesional en Lingüística, UCR
                </Text>
                <Text style={styles.text}>
                  M. Esteban Aguilar Pérez
                </Text>
                <Text style={styles.text}>
                  - Asesor de Español, DRE, MEP
                </Text>
              </View>
            </View>
            <Image source="logo_1" size={144} />
            <Image source="logo_2" size={144} />
            <Image source="logo_3" size={144} />
            <Image source="logo_4" size={144} />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container_1: {
    alignItems: 'center',
    backgroundColor: Colors['background-1'],
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  container_2: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 24,
    width: '100%',
  },
  container_3: {
    alignItems: 'center',
    flex: 11,
    justifyContent: 'center',
    width: '100%',
  },
  container_4: {
    alignItems: 'center',
    gap: 24,
    justifyContent: 'center',
    marginVertical: 24,
    width: '100%',
  },
  header: {
    fontSize: 20,
    marginBottom: 12,
    textDecorationLine: 'underline',
  },
  text: {
    fontFamily: 'PatrickHand',
    fontSize: 16,
    marginLeft: 24,
    maxWidth: 312,
    width: '100%',
  },
});
