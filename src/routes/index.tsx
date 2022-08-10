import React, {FC} from 'react';
import Dashboard from '../views/dashboard';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

type RootStackParamList = {
  Dashboard: undefined;
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
    </RootStack.Navigator>
  );
};
