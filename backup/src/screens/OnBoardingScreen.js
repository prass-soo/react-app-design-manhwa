import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Logo} from './../assets/images/';

const OnBoardingScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.image} />
      <Text style={styles.title}>Manhwa Reader</Text>
      <Text style={styles.subtitle}>Enjoy our app.</Text>
      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.getStartedButtonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 36,
    fontFamily: 'Satisfy-Regular',
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'DidactGothic-Regular',
    textAlign: 'center',
    marginTop: 5,
    color: '#888',
  },
  getStartedButton: {
    backgroundColor: '#355a9c',
    marginTop: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  getStartedButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'IndieFlower-Regular',
  },
});

export default OnBoardingScreen;
