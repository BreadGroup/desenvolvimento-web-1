export const themes = {
  light: {
    primary: '#7FFFD4',
    'background-color': '#F5F5F5',
    hover: '#90EE90',
  },
  dark: {
    primary: '#5F9EA0',
    'background-color': '#808080',
    hover: '#006400',
  }
}

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.light | typeof themes.dark;
