const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

const blueColorLight = '#4B5EFC';
const blueColorDark = '#4B5EFC';

const grayColorLight = '#D2D3DA';
const grayColorDark = '#4E505F'


export default {
  light: {
    text: '#000',
    bg: '#F6F5F5',
    blue:  blueColorLight ,
    gray: grayColorLight,
    keyColor: "#FFFFFF",

    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,

  },
  dark: {
    text: '#fff',
    bg: '#17171C',
    blue:  blueColorDark ,
    gray: grayColorDark,
    keyColor: "#2E2F38",

    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
