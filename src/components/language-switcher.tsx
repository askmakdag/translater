import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ArrowsLeftRight} from 'phosphor-react-native';
import {useDispatch, useSelector} from 'react-redux';
import {switchLanguagesAction} from '../redux/main/actions';
import {source, target} from '../redux/main/selectors';
import {useTranslation} from 'react-i18next';

export default function LanguageSwitcher() {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const sourceLanguage = useSelector(source);
  const targetLanguage = useSelector(target);

  function switchLanguages() {
    dispatch(switchLanguagesAction());
  }

  return (
    <View style={styles.container}>
      <Text style={styles.source}>{t(`languages:${sourceLanguage}`)}</Text>

      <TouchableOpacity onPress={switchLanguages} style={styles.switcher}>
        <ArrowsLeftRight size={22} color={'gray'} weight={'bold'} />
      </TouchableOpacity>

      <Text style={styles.target}>{t(`languages:${targetLanguage}`)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    width: '100%',
    paddingHorizontal: '10%',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
  },
  source: {
    flex: 1,
    color: '#0065E5',
    fontSize: 17,
  },
  switcher: {
    flex: 1,
    alignItems: 'center',
  },
  target: {
    flex: 1,
    color: '#0065E5',
    fontSize: 17,
    textAlign: 'right',
  },
});
