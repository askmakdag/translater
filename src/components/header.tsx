import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

interface HeaderProps {
  left?: JSX.Element;
  title?: string;
  right?: JSX.Element;
}

export default function Header({left, title, right}: HeaderProps) {
  const {t} = useTranslation();

  return (
    <View style={style.container}>
      <View style={style.left}>{left}</View>

      <Text style={style.title}>{title ?? t('common:appName')}</Text>

      <View style={style.right}>{right}</View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
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
