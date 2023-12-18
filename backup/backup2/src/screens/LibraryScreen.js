// LibraryScreen.js

import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';

// Import file index images
import {PicLookism, PicWindBreaker, PicQuestism} from './../assets/images/';

const LibraryScreen = () => {
  const savedManhwa = [
    {id: 1, name: 'Lookism', image: PicLookism},
    {id: 2, name: 'Wind Breaker', image: PicWindBreaker},
    {id: 3, name: 'Questism', image: PicQuestism},
  ];

  const renderSavedManhwa = ({item}) => (
    <View style={styles.manhwaItemContainer}>
      <Image source={item.image} style={styles.manhwaImage} />
      <Text style={styles.manhwaName}>{item.name}</Text>
    </View>
  );

  const renderSeparator = () => <View style={styles.separatorLine} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={savedManhwa}
        renderItem={renderSavedManhwa}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={renderSeparator}
        numColumns={3}
        contentContainerStyle={styles.manhwaList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#355a9c',
  },
  manhwaList: {
    alignItems: 'center',
  },
  manhwaItemContainer: {
    marginRight: 18,
    marginBottom: 16,
  },
  manhwaImage: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginBottom: 5,
  },
  manhwaName: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  separatorLine: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 5,
  },
});

export default LibraryScreen;
