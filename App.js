/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { TextInput, Provider as PaperProvider } from 'react-native-paper';

import Email from './components/EntradaDEmail';
import Tel from './components/EntradaDeTelefons';


function nom(nombre, style1) {
  return (
    <Text style={style1}>{nombre}</Text>
  )
}

const App = () => {
  return (
    <PaperProvider>
      {nom('Manel Viel', styles.estilDeText)}
      <Email label={"Email"} placeholder={"Escriu un email"}/>
      <Tel label={"Telèfon"} placeholder={"Format: +xx xxxxxxxxx ó xxxxxxxxx"}/>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  estilDeText: {
    color: 'blue',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default App;
