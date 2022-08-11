import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {GenericNavigationProps} from '../routes/types';
import {SpeakerHigh, X} from 'phosphor-react-native';
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
          <TouchableOpacity onPress={pressedToSpeak}>
            <SpeakerHigh size={22} weight={'fill'} color={'#5F6369'} />
          </TouchableOpacity>

          <Text style={style.language}>İNGİLİZCE</Text>
        </View>

        <TouchableOpacity onPress={clearInput}>
          <X size={22} weight={'bold'} color={'#62646A'} />
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder={'Metin giriniz...'}
        value={input}
        onChangeText={setInput}
        style={style.textInput}
        multiline={true}
        numberOfLines={4}
      />
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
      alignItems: 'center',
      marginVertical: 4,
    },
    headerLeft: {
      flexDirection: 'row',
      alignItems: 'center',
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
