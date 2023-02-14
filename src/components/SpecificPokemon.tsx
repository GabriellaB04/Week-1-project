import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

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
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text>{`Name : ${pokemonName}`}</Text>
      <Image
        source={{ uri: detailsResponse?.sprites.front_default }}
        style={{ width: 400, height: 400 }}
      />
      <Text>{`Height : ${detailsResponse?.height} metres`}</Text>
      <Text>{`Weight : ${detailsResponse?.weight} lbs`}</Text>
      <Text>
        {"Type : "}
        {pokeTypeList?.map((pokemonType) => (
          <Text>{` ${pokemonType}`}</Text>
        ))}
      </Text>
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
});
