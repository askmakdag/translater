import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface HeaderProps {
  left?: JSX.Element;
  title?: string;
  right?: JSX.Element;
}

export default function Header({
  left,
  title = 'Translater',
  right,
}: HeaderProps) {
  return (
    <View style={style.container}>
      <View style={style.left}>{left}</View>

      <Text style={style.title}>{title}</Text>

      <View style={style.right}>{right}</View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 45,
    width: '100%',
    paddingHorizontal: 8,
    backgroundColor: '#1973E7',
  },
  left: {
    flex: 1,
  },
  title: {
    flex: 1,
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
