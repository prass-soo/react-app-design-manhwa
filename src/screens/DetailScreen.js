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
        <View style={styles.textContainer}>
          <Text style={styles.penulis}>Penulis: {manhwa.author}</Text>
          <Text style={styles.label}>Sinopsis:</Text>
          <Text style={styles.sinopsis}>{manhwa.sinopsis}</Text>
        </View>
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
    color: '#fff',
  },
  content: {
    flexDirection: 'row',
    padding: 16,
  },
  manhwaImage: {
    width: 120,
    height: 180,
    borderRadius: 8,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  penulis: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  sinopsis: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#fff',
  },
});

export default DetailScreen;
