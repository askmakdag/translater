import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/header';
import LanguageSwitcher from '../components/language-switcher';
import InputView from '../components/input-view';
import OutputView from '../components/output-view';
import HistoryList from '../components/history-list';

export default function Dashboard() {
  return (
    <View style={style.container}>
      <Header />
      <LanguageSwitcher />
      <InputView />
      <OutputView />
      <HistoryList />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F1F6',
  },
});
