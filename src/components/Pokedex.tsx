import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import React from 'react';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const pokemonList = require("../../assets/kanto.json")

type ItemProps = {title: string, id:number};


const Item = ({title,id}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{`${id} : ${title}`}</Text>
  </View>
);


export default function Pokedex() {
  return (
    <View style={styles.container}>
      <Text>Hello Gabriella!</Text>
      <StatusBar style="auto" />
      <FlatList
        data={pokemonList}
        renderItem={({item}) => <Item title={item.name} id={item.id}/>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
    margin: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});