import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {isMountedRef, navigationRef} from './routes/navigationUtils';
import {enableScreens} from 'react-native-screens';
import {RootStackScreen} from './routes';

enableScreens();

const App = () => {
  useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaView style={{flex: 1}}>
        <RootStackScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
