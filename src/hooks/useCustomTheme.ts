import {useMemo} from 'react';
import {darkTheme, lightTheme} from '../theme';
import {useColorScheme} from 'react-native';

export enum Mode {
  Dark = 'dark',
  Light = 'light',
}

export default function useCustomTheme() {
  const colorScheme = useColorScheme();

  return useMemo(() => {
    switch (colorScheme) {
      case Mode.Dark:
        return darkTheme;
      case Mode.Light:
        return lightTheme;
      default:
        return lightTheme;
    }
  }, [colorScheme]);
}
