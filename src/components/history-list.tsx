import React from 'react';
import {TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {searchHistory} from '../redux/translate/selectors';
import {SearchHistoryItem} from '../redux/translate/types';
import {Colors} from '../theme/types';
import {useTheme} from '@react-navigation/native';
import {triggerHistoryItemAction} from '../redux/translate/actions';

export default function HistoryList() {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const history = useSelector(searchHistory);

  const {colors} = useTheme();
  const style = styles(colors);

  function onPressed({q, target, source, translatedText}: SearchHistoryItem) {
    dispatch(
      triggerHistoryItemAction({
        q,
        target,
        source,
        translatedText,
      }),
    );
  }

  function renderItem({item}: {item: SearchHistoryItem}) {
    return (
      <TouchableOpacity style={style.row} onPress={() => onPressed(item)}>
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
      style={[style.container, {display: history.length > 0 ? 'flex' : 'none'}]}
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
      borderBottomColor: colors.border,
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
