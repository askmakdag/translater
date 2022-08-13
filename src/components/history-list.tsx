import React from 'react';
import {TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';

export default function HistoryList() {
  function onPressed() {}

  function renderItem({item, index}) {
    return (
      <TouchableOpacity style={style.row} onPress={onPressed}>
        <Text style={style.source}>Hello</Text>
        <Text style={style.target}>Merhaba</Text>
      </TouchableOpacity>
    );
  }

  function renderHeader() {
    return <Text style={{padding: 8}}> History List </Text>;
  }

  return (
    <FlatList
      data={[1, 2, 3]}
      renderItem={renderItem}
      ListHeaderComponent={renderHeader}
      keyExtractor={(item, index) => index.toString()}
      style={style.container}
    />
  );
}

const style = StyleSheet.create({
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
  row: {
    width: '96%',
    alignSelf: 'center',
    padding: 8,
    backgroundColor: '#fff',
    borderBottomWidth: 0.6,
    borderBottomColor: '#dedede',
  },
  source: {
    color: '#000',
    fontSize: 16,
  },
  target: {
    color: '#51565C',
    fontSize: 15,
    paddingVertical: 4,
  },
});
