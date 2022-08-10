import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {SpeakerHigh, X} from 'phosphor-react-native';

export default function InputView() {
  const [input, setInput] = useState<string>();
  const style = styles();

  function clearInput() {
    setInput('');
  }

  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={style.headerLeft}>
          <SpeakerHigh size={22} weight={'fill'} color={'#5F6369'} />
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
