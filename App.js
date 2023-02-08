import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Pokedex from './src/components/Pokedex.tsx';

export default function App() {
  return (
    Pokedex()
    // <View style={styles.container}>
    //   <Text>Hello Gabriella!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
  
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 30,
//     marginVertical: 30,
//     marginHorizontal: 30,
//     padding: 30,
//     margin: 10,
//   },
// });

