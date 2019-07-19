const color = {
  black: "#2E2E2E",
  gray: "#6C6C6C",
  lightGray: "#B4B4B4",
  red: "#F62F5E",
  white: "#FFFFFF",
  lightWhite: "#F7F7F7",
  blue: "#6EB2FB",
  yellow: "#F1AD3D",
  green: "#00D3CA",
  orange: "#EFFC90"
};

const theme = {
  colors: {
    tBlack: color.black,
    tGray: color.gray,
    tLightGray: color.lightGray,
    tRed: color.red,
    tWhite: color.white,

    dBlack: color.black,
    dRed: color.red,
    dBlue: color.blue,
    dYellow: color.yellow,
    dLightWhite: color.lightWhite,
    dWhite: color.white,
    dGreen: color.green,
    dOrange: color.orange
  }
};

export default theme;

export type ThemeType = typeof theme;
