import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../components/header';
import LanguageSwitcher from '../components/language-switcher';
import InputView from '../components/input-view';
import OutputView from '../components/output-view';
import HistoryList from '../components/history-list';
import {useTheme} from '@react-navigation/native';
import {Colors} from '../theme/types';
import {translatedText} from '../redux/main/selectors';
import {useSelector} from 'react-redux';

export default function Dashboard() {
  const {colors} = useTheme();
  const style = styles(colors);
  const translatedResult = useSelector(translatedText);

  return (
    <SafeAreaView style={style.container}>
      <Header />
      <LanguageSwitcher />
      <InputView />
      {translatedResult && <OutputView />}
      <HistoryList />
    </SafeAreaView>
  );
}

const styles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
    },
  });
