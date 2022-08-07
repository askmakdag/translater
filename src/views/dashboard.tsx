import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function Dashboard() {
  return (
    <View style={style.container}>
      <Text>Merhaba Dashboard</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});
