import React, {FC, Suspense, useEffect} from 'react';
import {StatusBar, View} from 'react-native';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import {isMountedRef, navigationRef} from './routes/navigationUtils';
import {enableScreens} from 'react-native-screens';
import {RootStackScreen} from './routes';
import '../src/i18n';
import {persistor, store} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import Splashscreen from '../src/components/Splashscreen';
import SplashScreen from 'react-native-splash-screen';
import useCustomTheme from './hooks/useCustomTheme';

enableScreens();

const App: FC = () => {
  const theme = useCustomTheme();
  const {colors} = useTheme();

  console.log('custom theme: ', theme);
  useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Suspense fallback={<Splashscreen />}>
      <Provider store={store}>
        <PersistGate loading={<Splashscreen />} persistor={persistor}>
          <NavigationContainer ref={navigationRef} theme={theme}>
            <StatusBar
              barStyle="light-content"
              backgroundColor={colors.header}
            />
            <View style={{flex: 1}}>
              <RootStackScreen />
            </View>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </Suspense>
  );
};

export default App;
