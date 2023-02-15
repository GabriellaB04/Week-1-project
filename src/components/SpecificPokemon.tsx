import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const getPokemonDetails = async (url: string) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

export default function SpecificPokemon({ route }) {
  const obj = route.params;
  const pokemonName = obj.name;
  const pokemonUrl = obj.url;

  // const [fontsLoaded] = useFonts({
  //   "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
  //   "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  // });
  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  type PokemonType = {
    type: {
      name: string;
    };
  };

  type Sprites = {
    front_default: string;
  };

  const [detailsResponse, setPokemonDetails] = useState<{
    name: string;
    sprites: Sprites;
    height: number;
    weight: number;
    types: PokemonType[];
  }>();

  useEffect(() => {
    const fetchDetails = async () => {
      const detailsResponse = await getPokemonDetails(pokemonUrl);
      setPokemonDetails(detailsResponse);
    };
    fetchDetails();
  }, []);

  const getSpecies = (typesList) => {
    if (typesList == undefined) {
      return [];
    } else {
      const pokeTypeList: string[] = [];
      typesList.forEach((element) => {
        pokeTypeList.push(element?.type.name);
      });
      return pokeTypeList;
    }
  };

  const pokeTypeList: string[] = getSpecies(detailsResponse?.types);
  const spriteURL: string = detailsResponse?.sprites.front_default;

  return (
    <View style={styles.colouredRectangle}>
      <Text style={styles.pokemonName}>{pokemonName}</Text>
      <Image
        source={{ uri: detailsResponse?.sprites.front_default }}
        style={{ width: 400, height: 400 }}
      />
      <View style={styles.statsRectangle}>
        {pokeTypeList?.map((pokemonType) => (
          <View style={styles.pokeTypeContainer}>
            <Text>{` ${pokemonType}`}</Text>
          </View>
        ))}
        <View style={styles.infoBars}>
          <Text>{`Height : ${detailsResponse?.height} metres`}</Text>
        </View>
        <View style={styles.infoBars}>
          <Text>{`Weight : ${detailsResponse?.weight} lbs`}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   borderRadius: 10,
  //   marginVertical: 10,
  //   marginHorizontal: 10,
  //   padding: 10,
  //   margin: 10,
  // },
  colouredRectangle: {
    justifyContent: "flex-start",
    height: "30%",
    width: "100%",
    backgroundColor: "#90E4FF",
  },
  statsRectangle: {
    justifyContent: "flex-end",
    height: "70%",
    width: "100%",
    backgroundColor: "#FFFEFD",
    borderRadius: 25,
  },
  infoBars: {
    position: "relative",
    top: "10%",
    left: "7%",
    backgroundColor: "#C5E7F5",
    width: 341,
    height: 42,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 35,
  },
  pokeTypeContainer: {
    top: "5%",
    left: "7%",
    padding: 10,
    height: 42,
    width: "20%",
    backgroundColor: "#3692DC",
    borderRadius: 35,
  },
});
