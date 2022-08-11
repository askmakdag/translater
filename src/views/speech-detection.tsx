import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Lottie from 'lottie-react-native';
import {MICROPHONE2} from '../assets/lottie';
import {X} from 'phosphor-react-native';
import {useNavigation} from '@react-navigation/core';

export default function SpeechDetection() {
  const navigation = useNavigation();
  const animationRef = useRef<Lottie>(null);
  const [input, setInput] = useState();

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  function onDetect() {}

  function cancelDetection() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={style.container}>
      <TextInput
        placeholder={'Metin giriniz...'}
        value={input}
        style={style.textInput}
        multiline={true}
        numberOfLines={4}
      />

      <View>
        <TouchableOpacity onPress={onDetect}>
          <Lottie
            ref={animationRef}
            source={MICROPHONE2}
            style={{height: 150, width: 150, alignSelf: 'center'}}
          />
        </TouchableOpacity>

        <View style={style.bottom}>
          <TouchableOpacity style={{flex: 1}} onPress={cancelDetection}>
            <X weight={'bold'} style={{margin: 8}} />
          </TouchableOpacity>
          <Text style={{flex: 1, textAlign: 'center'}}>English</Text>
          <View style={{flex: 1}} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textInput: {
    textAlignVertical: 'top',
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 8,
    lineHeight: 18,
    height: 80,
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
