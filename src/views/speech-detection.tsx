import React, {useEffect, useRef, useState} from 'react';
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
import Lottie from 'lottie-react-native';
import Voice from '@react-native-voice/voice';
import {MICROPHONE2} from '../assets/lottie';
import {translationRequestAction} from '../redux/translate/actions';
import {useDispatch, useSelector} from 'react-redux';
import {source} from '../redux/translate/selectors';
import {SpeechResultsEvent} from '@react-native-voice/voice/src/VoiceModuleTypes';

export default function SpeechDetection() {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const sourceLanguage = useSelector(source);
  const animationRef = useRef<Lottie>(null);

  const {colors} = useTheme();
  const style = styles(colors);

  const [text, setText] = useState<string>('...');
  const [started, setStarted] = useState(false);
  const [results, setResults] = useState<string[] | undefined>([]);

  useEffect(() => {
    animationRef.current?.play();

    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechResults = onSpeechResults;

    startRecognizing().then();
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  useEffect(() => {
    if (results && results.length > 0) {
      setText(results[0]);
      navigation.goBack();
      dispatch(
        translationRequestAction({
          q: results[0],
        }),
      );
    } else if (started) {
      setText(t('speechDetection:speakNow'));
    }
  }, [results, started]);

  const onSpeechStart = () => {
    //Invoked when .start() is called without error
    setStarted(true);
  };

  const onSpeechResults = (e: SpeechResultsEvent) => {
    //Invoked when SpeechRecognizer is finished recognizing
    setResults(e.value);
  };

  const startRecognizing = async () => {
    //Starts listening for speech for a specific locale
    try {
      await Voice.start(sourceLanguage);
      setStarted(true);
      setResults([]);
    } catch (e) {}
  };

  function cancelDetection() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.textInput}>{text}</Text>

      <View>
        <TouchableOpacity onPress={startRecognizing}>
          <Lottie
            ref={animationRef}
            source={MICROPHONE2}
            style={style.lottie}
          />
        </TouchableOpacity>

        <View style={style.bottom}>
          <TouchableOpacity style={{flex: 1}} onPress={cancelDetection}>
            <X weight={'bold'} color={colors.text} style={style.x} />
          </TouchableOpacity>
          <Text style={style.target}>{t(`languages:${sourceLanguage}`)}</Text>
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
      fontSize: 16,
      textAlign: 'center',
      color: colors.text,
    },
    lottie: {
      height: 150,
      width: 150,
      alignSelf: 'center',
    },
  });
