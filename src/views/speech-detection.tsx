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
import {translationRequestAction} from '../redux/main/actions';
import {useDispatch, useSelector} from 'react-redux';
import {source} from '../redux/main/selectors';

export default function SpeechDetection() {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const sourceLanguage = useSelector(source);
  const animationRef = useRef<Lottie>(null);

  const {colors} = useTheme();
  const style = styles(colors);

  const [text, setText] = useState<string>('...');
  const [pitch, setPitch] = useState('');
  const [error, setError] = useState('');
  const [end, setEnd] = useState('');
  const [started, setStarted] = useState('');
  const [results, setResults] = useState([]);
  const [partialResults, setPartialResults] = useState([]);

  useEffect(() => {
    animationRef.current?.play();

    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;

    startRecognizing().then();
    return () => {
      //destroy the process after switching the screen
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  useEffect(() => {
    if (error) {
      console.log('Error occured: ', error);
    }
  }, [error]);

  useEffect(() => {
    if (results.length > 0) {
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

  const onSpeechStart = e => {
    //Invoked when .start() is called without error
    console.log('onSpeechStart: ', e);
    setStarted('√');
  };

  const onSpeechEnd = e => {
    //Invoked when SpeechRecognizer stops recognition
    console.log('onSpeechEnd: ', e);
    setEnd('√');
  };

  const onSpeechError = e => {
    //Invoked when an error occurs.
    console.log('onSpeechError: ', e);
    setError(JSON.stringify(e.error));
  };

  const onSpeechResults = e => {
    //Invoked when SpeechRecognizer is finished recognizing
    console.log('onSpeechResults: ', e);
    setResults(e.value);
  };

  const onSpeechPartialResults = e => {
    //Invoked when any results are computed
    console.log('onSpeechPartialResults: ', e);
    setPartialResults(e.value);
  };

  const onSpeechVolumeChanged = e => {
    //Invoked when pitch that is recognized changed
    console.log('onSpeechVolumeChanged: ', e);
    setPitch(e.value);
  };

  const startRecognizing = async () => {
    //Starts listening for speech for a specific locale
    try {
      console.log('startRecognizing içinde...');
      await Voice.start(sourceLanguage);
      setPitch('');
      setError('');
      setStarted('');
      setResults([]);
      setPartialResults([]);
      setEnd('');
    } catch (e) {
      console.error(e);
    }
  };

  const stopRecognizing = async () => {
    //Stops listening for speech
    try {
      await Voice.stop();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  const cancelRecognizing = async () => {
    //Cancels the speech recognition
    try {
      await Voice.cancel();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  const destroyRecognizer = async () => {
    //Destroys the current SpeechRecognizer instance
    try {
      await Voice.destroy();
      setPitch('');
      setError('');
      setStarted('');
      setResults([]);
      setPartialResults([]);
      setEnd('');
    } catch (e) {
      console.error(e);
    }
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
            style={{height: 150, width: 150, alignSelf: 'center'}}
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
      textAlign: 'center',
      color: colors.text,
    },
  });
