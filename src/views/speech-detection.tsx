import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {X} from 'phosphor-react-native';
import {useNavigation} from '@react-navigation/core';
import {useTheme} from '@react-navigation/native';
import {Colors} from '../theme/types';
import {useTranslation} from 'react-i18next';
import VoiceRecognizer from '../components/voice-recognizer';

export default function SpeechDetection() {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const [input, setInput] = useState(t('speechDetection:speakNow'));

  const {colors} = useTheme();
  const style = styles(colors);

  function cancelDetection() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.textInput}>{input}</Text>

      <View>
        <VoiceRecognizer />

        <View style={style.bottom}>
          <TouchableOpacity style={{flex: 1}} onPress={cancelDetection}>
            <X weight={'bold'} color={colors.text} style={style.x} />
          </TouchableOpacity>
          <Text style={style.target}>English</Text>
          <View style={{flex: 1}} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: colors.background,
    },
    textInput: {
      color: colors.placeholder,
      textAlignVertical: 'top',
      fontSize: 18,
      fontWeight: '500',
      margin: 24,
      lineHeight: 18,
      height: 80,
    },
    bottom: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    x: {
      margin: 8,
    },
    target: {
      flex: 1,
      textAlign: 'center',
      color: colors.text,
    },
  });
