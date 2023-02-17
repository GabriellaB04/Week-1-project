import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import colourSwitch from "../utils/colourSwitch";

// fetch the details of the individual pokemon
const getPokemonDetails = async (url: string) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export default function SpecificPokemon({ route }) {
  const obj = route.params;
  const pokemonName = obj.name;
  const pokemonUrl = obj.url;

  // setting types
  // PokemonType is to get the name
  type PokemonType = {
    type: {
      name: string;
    };
  };

  //sprite is to get the image of the pokemon
  type Sprites = {
    front_default: string;
  };

  //set the items in detailsResponse
  const [detailsResponse, setPokemonDetails] = useState<{
    name: string;
    sprites: Sprites;
    height: number;
    weight: number;
    types: PokemonType[];
  }>();

  useEffect(() => {
    // fetch request for the details of the specific pokemon by calling getPokemonDetails
    const fetchDetails = async () => {
      const detailsResponse = await getPokemonDetails(pokemonUrl);
      setPokemonDetails(detailsResponse);
    };
    fetchDetails();
  }, []);

  // get the types of the pokemon e.g. grass, water, fire..
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

  // set the type of the pokemon by calling getSpecies
  const pokeTypeList: string[] = getSpecies(detailsResponse?.types);

  return (
    <>
      <View
        style={{
          backgroundColor: colourSwitch(pokeTypeList[0])?.background,
          height: "100%",
        }}
      >
        <View style={styles.pokemonNameContainer}>
          <Text style={styles.pokemonName}>{pokemonName}</Text>
        </View>
      </View>
      <View style={styles.statsRectangle}>
        <View style={styles.typesContainer}>
          {pokeTypeList?.map((pokemonType, index) => (
            <View
              key={index}
              style={{
                ...styles.pokeTypeIndivid,
                backgroundColor: colourSwitch(pokemonType)?.pokeType,
              }}
            >
              <Text>{` ${pokemonType}`}</Text>
            </View>
          ))}
        </View>
        <View
          style={{
            ...styles.infoBars,
            backgroundColor: colourSwitch(pokeTypeList[0])?.infoBars,
          }}
        >
          <Text>{"Height : "}</Text>
          <Text>{`${detailsResponse?.height} m`}</Text>
        </View>
        <View
          style={{
            ...styles.infoBars,
            backgroundColor: colourSwitch(pokeTypeList[0])?.infoBars,
          }}
        >
          <Text>{"Weight : "}</Text>
          <Text>{`${detailsResponse?.weight} lbs`}</Text>
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
  statsRectangle: {
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
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
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
    paddingTop: 110,
  },
});
