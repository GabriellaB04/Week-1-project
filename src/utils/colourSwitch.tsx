// type ColourType = {
//   background: string;
//   pokeType: string;
//   infoBars: string;
// };

const colourSwitch = (type) => {
  switch (type) {
    case "water":
      const waterColours = {
        background: "#03C3FF",
        pokeType: "#3692DC",
        infoBars: "#C5E7F5",
      };
      return waterColours;
    case "fire":
      const fireColours = {
        background: "#F9B146",
        pokeType: "#F1A162",
        infoBars: "#F5DFC5",
      };
      return fireColours;
    case "grass":
      const grassColours = {
        background: "#5ACC31",
        pokeType: "#79B966",
        infoBars: "#E0F5C5",
      };
      return grassColours;
    case "bug":
      const bugColours = {
        background: "#F9B146",
        pokeType: "3692DC",
        infoBars: "C5E7F5",
      };
      return bugColours;
    case "dark":
      const darkColours = {
        background: "#595365",
        pokeType: "#767180",
        infoBars: "#A5A4A8",
      };
      return darkColours;
    case "dragon":
      const dragonColours = {
        background: "#5B2AE7",
        pokeType: "#306BBE",
        infoBars: "#BDB2EC",
      };
      return dragonColours;
    case "electric":
      const electricColours = {
        background: "#FFE605",
        pokeType: "#EED35A",
        infoBars: "#F8EFA3",
      };
      return electricColours;
    case "normal":
      const normalColours = {
        background: "#C6C6AA",
        pokeType: "#9299A0",
        infoBars: "#D2D5D9",
      };
      return normalColours;
    case "rock":
      const rockColours = {
        background: "#978E63",
        pokeType: "#C4B890",
        infoBars: "#F2ECCB",
      };
      return rockColours;
    case "fairy":
      const fairyColours = {
        background: "#F99AB0",
        pokeType: "#DF93E1",
        infoBars: "#F5DBE1",
      };
      return fairyColours;
    case "flying":
      const flyingColours = {
        background: "#B8CEF0",
        pokeType: "#94A7D9",
        infoBars: "#C6CBD9",
      };
      return flyingColours;
    case "ground":
      const groundColours = {
        background: "#CDB04F",
        pokeType: "#CC7C50",
        infoBars: "#E7D7A4",
      };
      return groundColours;
    case "poison":
      const poisonColours = {
        background: "#B886BD",
        pokeType: "#A26DC3",
        infoBars: "#E6C5F5",
      };
      return poisonColours;
    case "steel":
      const steelColours = {
        background: "#959FA4",
        pokeType: "#668D9F",
        infoBars: "#D1D1D7",
      };
      return steelColours;
    case "fighting":
      const fightingColours = {
        background: "#C77857",
        pokeType: "#BE4B6A",
        infoBars: "#E4CEC4",
      };
      return fightingColours;
    case "ghost":
      const ghostColours = {
        background: "#9F93B9",
        pokeType: "#5768A7",
        infoBars: "#D0CCDA",
      };
      return ghostColours;
    case "ice":
      const iceColours = {
        background: "#C6E7F6",
        pokeType: "#8ACCC0",
        infoBars: "#C5E7F5",
      };
      return iceColours;
    case "psychic":
      const psychicColours = {
        background: "#EC97B2",
        pokeType: "#E8797A",
        infoBars: "#EACED6",
      };
      return psychicColours;
  }
};

export default colourSwitch;
