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
  // const spriteURL: string = detailsResponse?.sprites.front_default;

  const colourSwitch = (type) => {
    switch (type) {
      case "water":
        return styles.colouredRectangleWater;
      case "fire":
        return styles.colouredRectangleFire;
    }
  };

  return (
    <>
      <View style={colourSwitch(pokeTypeList[0])}>
        <View style={styles.pokemonNameContainer}>
          <Text style={styles.pokemonName}>{pokemonName}</Text>
        </View>
      </View>
      <View style={styles.statsRectangle}>
        <View style={styles.typesContainer}>
          {pokeTypeList?.map((pokemonType, index) => (
            <View key={index} style={styles.pokeTypeIndivid}>
              <Text>{` ${pokemonType}`}</Text>
            </View>
          ))}
        </View>
        <View style={styles.infoBars}>
          <Text>{`Height : ${detailsResponse?.height} metres`}</Text>
        </View>
        <View style={styles.infoBars}>
          <Text>{`Weight : ${detailsResponse?.weight} lbs`}</Text>
        </View>
      </View>
      <View style={styles.pokemonSprite}>
        <Image
          source={{ uri: detailsResponse?.sprites.front_default }}
          style={{ width: 300, height: 300 }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  colouredRectangleWater: {
    // display: "flex",
    // justifyContent: "flex-start",
    // flexDirection: "column",
    height: "100%",
    // width: "100%",
    backgroundColor: "#90E4FF",
  },
  colouredRectangleFire: {
    // display: "flex",
    // justifyContent: "flex-start",
    // flexDirection: "column",
    height: "100%",
    // width: "100%",
    backgroundColor: "#F9B146",
  },
  statsRectangle: {
    // display: "flex",
    // // justifyContent: "flex-end",
    // flexDirection: "column",
    // flexGrow: 4,
    position: "absolute",
    top: 250,
    height: 600,
    width: "100%",
    backgroundColor: "#FFFEFD",
    borderRadius: 60,
  },
  pokemonNameContainer: {
    padding: 15,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  pokemonName: {
    color: "white",
    fontSize: 50,
  },
  pokemonSprite: {
    position: "absolute",
    top: 70,
    left: 70,
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
  pokeTypeIndivid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    top: "5%",
    left: "7%",
    padding: 10,
    marginHorizontal: 10,
    height: 42,
    width: "20%",
    backgroundColor: "#3692DC",
    borderRadius: 35,
  },
  typesContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "nowrap",
    // marginVertical: 50,
    paddingTop: 150,
  },
});
