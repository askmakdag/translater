import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {target, translatedText} from '../redux/translate/selectors';
import {useTranslation} from 'react-i18next';
import {Colors} from '../theme/types';
import {useTheme} from '@react-navigation/native';

export default function OutputView() {
  const {t} = useTranslation();
  const targetLanguage = useSelector(target);
  const translated = useSelector(translatedText);
  const {colors} = useTheme();
  const style = styles(colors);

  return (
    <View style={[style.container, {display: translated ? 'flex' : 'none'}]}>
      <Text style={style.language}>{t(`languages:${targetLanguage}`)}</Text>
      <Text style={style.translatedText}>{translated}</Text>
    </View>
  );
}

const styles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.outputCard.background,
      paddingHorizontal: '5%',
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      marginTop: 4,
    },
    language: {
      color: colors.outputCard.text,
      fontSize: 14,
    },
    translatedText: {
      textAlignVertical: 'top',
      fontSize: 18,
      fontWeight: '500',
      marginVertical: 16,
      color: colors.outputCard.text,
      lineHeight: 18,
      height: 64,
    },
  });
