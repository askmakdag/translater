import React from 'react';
import {TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {searchHistory} from '../redux/main/selectors';
import {SearchHistoryItem} from '../redux/main/types';
import {Colors} from '../theme/types';
import {useTheme} from '@react-navigation/native';

export default function HistoryList() {
  const {t} = useTranslation();
  const history = useSelector(searchHistory);

  const {colors} = useTheme();
  const style = styles(colors);

  function onPressed() {}

  function renderItem({item}: {item: SearchHistoryItem}) {
    return (
      <TouchableOpacity style={style.row} onPress={onPressed}>
        <Text style={style.source}>{item.q}</Text>
        <Text style={style.target}>{item.translatedText}</Text>
      </TouchableOpacity>
    );
  }

  function renderHeader() {
    return <Text style={style.header}>{t('history:searchHistory')}</Text>;
  }

  return (
    <FlatList
      data={history}
      renderItem={renderItem}
      ListHeaderComponent={renderHeader}
      keyExtractor={(item, index) => index.toString()}
      style={style.container}
    />
  );
}

const styles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0.4,
        height: 0.4,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,

      elevation: 1,
    },
    header: {
      padding: 12,
      color: colors.historyCard.header,
    },
    row: {
      width: '96%',
      alignSelf: 'center',
      padding: 8,
      backgroundColor: colors.historyCard.background,
      borderBottomWidth: 0.6,
      borderBottomColor: '#dedede',
    },
    source: {
      color: colors.historyCard.source,
      fontSize: 16,
    },
    target: {
      color: colors.historyCard.target,
      fontSize: 15,
      paddingVertical: 4,
    },
  });
