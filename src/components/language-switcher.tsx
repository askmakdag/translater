import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ArrowsLeftRight} from 'phosphor-react-native';
import {useDispatch, useSelector} from 'react-redux';
import {switchLanguagesAction} from '../redux/main/actions';
import {source, target} from '../redux/main/selectors';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@react-navigation/native';
import {Colors} from '../theme/types';

export default function LanguageSwitcher() {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const sourceLanguage = useSelector(source);
  const targetLanguage = useSelector(target);
  const {colors} = useTheme();
  const style = styles(colors);

  function switchLanguages() {
    dispatch(switchLanguagesAction());
  }

  return (
    <View style={style.container}>
      <Text style={style.source}>{t(`languages:${sourceLanguage}`)}</Text>

      <TouchableOpacity onPress={switchLanguages} style={style.switcher}>
        <ArrowsLeftRight size={22} color={'gray'} weight={'bold'} />
      </TouchableOpacity>

      <Text style={style.target}>{t(`languages:${targetLanguage}`)}</Text>
    </View>
  );
}

const styles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 50,
      width: '100%',
      paddingHorizontal: '10%',
      backgroundColor: colors.switchCard.background,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
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
