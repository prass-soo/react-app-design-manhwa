// HistoryScreen.js

import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';

// Import file index images
import {
  PicLookism,
  PicWindBreaker,
  PicQuestism,
  PicManagerKim,
  PicHowToFight,
} from './../assets/images/';

const HistoryScreen = () => {
  const historyData = [
    {id: 1, name: 'Lookism', image: PicLookism, lastReadPage: 35},
    {id: 2, name: 'Wind Breaker', image: PicWindBreaker, lastReadPage: 15},
    {id: 3, name: 'Questism', image: PicQuestism, lastReadPage: 50},
    {id: 4, name: 'Manager Kim', image: PicManagerKim, lastReadPage: 10},
    {id: 5, name: 'How To Fight', image: PicHowToFight, lastReadPage: 22},
  ];

  const renderHistoryItem = ({item}) => (
    <View style={styles.historyItemContainer}>
      <Image source={item.image} style={styles.manhwaImage} />
      <View style={styles.textContainer}>
        <Text style={styles.manhwaName}>{item.name}</Text>
        <Text style={styles.lastReadPage}>
          Last Read: Page {item.lastReadPage}
        </Text>
      </View>
    </View>
  );

  const renderSeparator = () => <View style={styles.separatorLine} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={historyData}
        renderItem={renderHistoryItem}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  historyItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  manhwaImage: {
    width: 50,
    height: 75,
    borderRadius: 8,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  manhwaName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lastReadPage: {
    fontSize: 12,
    color: '#888',
  },
  separatorLine: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 8,
  },
});

export default HistoryScreen;
