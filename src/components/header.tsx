import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header() {
  const style = styles();
  return (
    <View style={style.container}>
      <Text style={style.title}>Translater</Text>
    </View>
  );
}

const styles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 45,
      width: '100%',
      backgroundColor: '#1973E7',
    },
    title: {
      color: 'white',
      fontSize: 17,
    },
  });
