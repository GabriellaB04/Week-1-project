import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Pokedex from './src/components/Pokedex.tsx';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    Pokedex()
    // <View style={styles.container}>
    //   <Text>Hello Gabriella!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
  
}



