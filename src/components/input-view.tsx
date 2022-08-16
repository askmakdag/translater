import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {GenericNavigationProps} from '../routes/types';
import {Microphone, X} from 'phosphor-react-native';
import {useNavigation} from '@react-navigation/core';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearQueryAction,
  translationRequestAction,
} from '../redux/translate/actions';
import {Colors} from '../theme/types';
import {useTheme} from '@react-navigation/native';
import {q} from '../redux/translate/selectors';

export default function InputView() {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const query = useSelector(q);
  const navigation = useNavigation<GenericNavigationProps>();
  const {colors} = useTheme();
  const style = styles(colors);

  const [input, setInput] = useState<string>();

  useEffect(() => {
    setInput(query);
  }, [query]);

  function clearInput() {
    dispatch(clearQueryAction());
    setInput('');
  }

  function pressedToSpeak() {
    navigation.push('SpeechDetection');
  }

  function doTranslate() {
    if (input) {
      dispatch(
        translationRequestAction({
          q: input,
        }),
      );
    }
  }

  return (
    <View style={style.container}>
      <View style={style.header}>
        <TextInput
          placeholder={t('input:enterText')}
          placeholderTextColor={colors.inputCard.placeholder}
          value={input}
          onChangeText={setInput}
          style={style.textInput}
          multiline={true}
          enablesReturnKeyAutomatically={true}
          numberOfLines={4}
          returnKeyType={'go'}
          onSubmitEditing={doTranslate}
        />

        <TouchableOpacity
          onPress={pressedToSpeak}
          style={{padding: 4, display: input || query ? 'none' : 'flex'}}>
          <Microphone size={23} weight={'duotone'} color={'#5F6369'} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={clearInput}
          style={{padding: 4, display: input || query ? 'flex' : 'none'}}>
          <X size={23} weight={'duotone'} color={'#5F6369'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.inputCard.background,
      paddingHorizontal: '5%',
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 4,
    },
    headerLeft: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerRight: {
      flexDirection: 'row',
      backgroundColor: 'red',
    },
    microphone: {
      marginRight: 16,
    },
    language: {
      color: colors.inputCard.text,
      fontSize: 14,
      paddingHorizontal: 12,
    },
    textInput: {
      flex: 1,
      textAlignVertical: 'top',
      fontSize: 16,
      fontWeight: '500',
      marginVertical: 8,
      lineHeight: 18,
      height: 80,
      color: colors.inputCard.text,
    },
  });
