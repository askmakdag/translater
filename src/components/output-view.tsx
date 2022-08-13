import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {IconWeight, SpeakerHigh, Star} from 'phosphor-react-native';
import {useSelector} from 'react-redux';
import {target} from '../redux/main/selectors';
import {useTranslation} from 'react-i18next';

export default function OutputView() {
  const {t} = useTranslation();
  const targetLanguage = useSelector(target);
  const style = styles();
  const [starWight, setStarWeight] = useState<IconWeight>('bold');

  function makeItFavorite() {
    setStarWeight(prev => {
      return prev === 'bold' ? 'duotone' : 'bold';
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
        defaultValue={'...'}
        style={style.textInput}
        multiline={true}
        numberOfLines={4}
      />

      <SpeakerHigh size={22} color={'#FFFFFF'} weight={'fill'} />
    </View>
  );
}

const styles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: '#1973E7',
      paddingHorizontal: '5%',
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#dedede',
      marginTop: 4,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 4,
    },
    language: {
      color: '#FFFFFF',
      fontSize: 14,
    },
    textInput: {
      textAlignVertical: 'top',
      fontSize: 18,
      fontWeight: '500',
      marginVertical: 16,
      color: '#FFFFFF',
      lineHeight: 18,
      height: 80,
    },
  });
