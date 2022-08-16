import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {IconWeight, Star} from 'phosphor-react-native';
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
  const [starWight, setStarWeight] = useState<IconWeight>('bold');

  function makeItFavorite() {
    setStarWeight(prev => {
      return prev === 'bold' ? 'fill' : 'bold';
    });
  }

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.language}>{t(`languages:${targetLanguage}`)}</Text>

        <TouchableOpacity onPress={makeItFavorite}>
          <Star size={22} weight={starWight} color={'#FFFFFF'} />
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder={'...'}
        placeholderTextColor={colors.outputCard.placeholder}
        value={translated}
        style={style.textInput}
        multiline={true}
        numberOfLines={4}
      />
    </View>
  );
}

const styles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.outputCard.background,
      paddingHorizontal: '5%',
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      marginTop: 4,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 4,
    },
    language: {
      color: colors.outputCard.text,
      fontSize: 14,
    },
    textInput: {
      textAlignVertical: 'top',
      fontSize: 18,
      fontWeight: '500',
      marginVertical: 16,
      color: colors.outputCard.text,
      lineHeight: 18,
      height: 80,
    },
  });
