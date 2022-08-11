import React, {useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {GenericNavigationProps} from '../routes/types';
import {Microphone, X} from 'phosphor-react-native';
import {useNavigation} from '@react-navigation/core';

export default function InputView() {
  const navigation = useNavigation<GenericNavigationProps>();
  const [input, setInput] = useState<string>();
  const style = styles();

  function clearInput() {
    setInput('');
  }

  function pressedToSpeak() {
    navigation.push('SpeechDetection');
  }

  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={style.headerLeft}>
          <TextInput
            placeholder={'Metin giriniz...'}
            value={input}
            onChangeText={setInput}
            style={style.textInput}
            multiline={true}
            numberOfLines={4}
          />
        </View>

        <TouchableOpacity
          onPress={pressedToSpeak}
          style={{padding: 4, display: input ? 'none' : 'flex'}}>
          <Microphone size={23} weight={'duotone'} color={'#5F6369'} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={clearInput}
          style={{padding: 4, display: input ? 'flex' : 'none'}}>
          <X size={23} weight={'duotone'} color={'#5F6369'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: 'white',
      paddingHorizontal: '5%',
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#dedede',
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
      color: '#62646A',
      fontSize: 14,
      paddingHorizontal: 12,
    },
    textInput: {
      textAlignVertical: 'top',
      fontSize: 18,
      fontWeight: '500',
      marginVertical: 8,
      lineHeight: 18,
      height: 80,
    },
  });
