import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
//import{Button} from 'react-native-paper';

type ItemProps = { title: string; id: number };

const Item = ({ title, id }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{`${id} : ${title}`}</Text>
  </View>
);

const getPokemon = async () => {
  // fetch the api - put in a try catch statement in case it fails
  // must use await to wait for the data
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=898"
    );
    const json = await response.json();
    const json_pokemon = json.results;
    //console.log(json_pokemon)
    return json_pokemon;
  } catch (error) {
    console.error(error);
  }
};

export default function Pokedex({ navigation }) {
  //create a state to keep the "variable" and not delete it when the page refreshes
  const [pokemonList, setPokemon] = useState<{ name: string; url: string }[]>(
    []
  );

  // use a useEffect to tell React that the component needs to do something after render
  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonResponse = await getPokemon();
      setPokemon(pokemonResponse);
    };
    fetchPokemon();
  }, []);

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <StatusBar style="auto" />

      {
        // check that the list isnt undefined
        pokemonList.length > 0 && (
          // print the list of information onto the screen
          <FlatList
            data={pokemonList}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("SpecificPokemon", {
                    name: item.name,
                    url: item.url,
                  })
                }
              >
                <Item title={item.name} id={index} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{ padding: 10 }}
          />
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
    margin: 10,
  },
  item: {
    backgroundColor: "#3692DC",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
