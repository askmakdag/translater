import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ArrowsLeftRight} from 'phosphor-react-native';

export default function LanguageSwitcher() {
  const [langs, setLangs] = useState({
    source: 'Türkçe',
    target: 'İngilizce',
  });

  function switchLanguages() {
    setLangs(prev => {
      return {
        source: prev.target,
        target: prev.source,
      };
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.source}>{langs.source}</Text>

      <TouchableOpacity onPress={switchLanguages} style={styles.switcher}>
        <ArrowsLeftRight size={22} color={'gray'} weight={'bold'} />
      </TouchableOpacity>

      <Text style={styles.target}>{langs.target}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    width: '100%',
    paddingHorizontal: '10%',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
  },
  source: {
    flex: 1,
    color: '#0065E5',
    fontSize: 17,
  },
  switcher: {
    flex: 1,
    alignItems: 'center',
  },
  target: {
    flex: 1,
    color: '#0065E5',
    fontSize: 17,
    textAlign: 'right',
  },
});
