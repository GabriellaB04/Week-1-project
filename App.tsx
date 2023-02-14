import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Pokedex from './src/components/Pokedex';
import Navigator from './src/navigation/navigation'
//import {createStackNavigator } from 'react-navigation-stack';
//import {createAppContainer } from 'react-navigation';


function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}



export default function App() {
  
    return (
    Navigator()

  );const screens = {
    Home: {
      screen: Pokedex 
    }
  }


}

  




