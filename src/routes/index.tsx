import React, {FC} from 'react';
import Dashboard from '../views/dashboard';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SpeechDetection from '../views/speech-detection';

type RootStackParamList = {
  Dashboard: undefined;
  SpeechDetection: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootStackScreen: FC = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="SpeechDetection"
        component={SpeechDetection}
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};
