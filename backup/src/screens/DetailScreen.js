// DetailScreen.js

import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const DetailScreen = ({route}) => {
  const {manhwa} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.manhwaName}>{manhwa.name}</Text>
      </View>
      <View style={styles.content}>
        <Image source={manhwa.image} style={styles.manhwaImage} />
        <Text style={styles.sinopsis}>{manhwa.sinopsis}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#355a9c',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  manhwaName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff', // Warna font diubah menjadi putih
  },
  content: {
    flexDirection: 'row',
    padding: 16,
  },
  manhwaImage: {
    width: 120,
    height: 180,
    borderRadius: 8,
  },
  sinopsis: {
    marginLeft: 16,
    flex: 1,
    fontSize: 16,
    textAlign: 'justify',
    color: '#fff',
  },
});

export default DetailScreen;
