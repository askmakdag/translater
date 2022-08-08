import React, {FC, Suspense, useEffect} from 'react';
import { SafeAreaView, StatusBar } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {isMountedRef, navigationRef} from './routes/navigationUtils';
import {enableScreens} from 'react-native-screens';
import {RootStackScreen} from './routes';
import '../src/i18n';
import {persistor, store} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import Splashscreen from '../src/components/Splashscreen';
import SplashScreen from 'react-native-splash-screen';

enableScreens();

const App: FC = () => {
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
          <NavigationContainer ref={navigationRef}>
            <SafeAreaView style={{flex: 1}}>
              <StatusBar barStyle="light-content" backgroundColor={'#1973E7'} />
              <RootStackScreen />
            </SafeAreaView>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </Suspense>
  );
};

export default App;
