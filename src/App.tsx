import React, {FC, Suspense, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {isMountedRef, navigationRef} from './routes/navigationUtils';
import {enableScreens} from 'react-native-screens';
import {RootStackScreen} from './routes';
import {persistor, store} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import Splashscreen from '../src/components/Splashscreen';

enableScreens();

const App: FC = () => {
  useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  return (
    <Suspense fallback={<Splashscreen />}>
      <Provider store={store}>
        <PersistGate loading={<Splashscreen />} persistor={persistor}>
          <NavigationContainer ref={navigationRef}>
            <SafeAreaView style={{flex: 1}}>
              <RootStackScreen />
            </SafeAreaView>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </Suspense>
  );
};

export default App;
