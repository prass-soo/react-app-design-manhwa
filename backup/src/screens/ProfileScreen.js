// ProfileScreen.js

import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {PicBackgroundProfileUser, PicProfileUser} from './../assets/images/';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={PicBackgroundProfileUser} style={styles.backgroundImage} />
      <View style={styles.profileContainer}>
        <View style={styles.profileImageContainer}>
          <Image source={PicProfileUser} style={styles.profileImage} />
        </View>
        <Text style={styles.userName}>Dhiva Prastya Mulya</Text>
        <Text style={styles.userName}>Kristina Andiani Dakhi</Text>
        <Text style={styles.userEmail}>example@example.com</Text>
        <Text style={styles.aboutMe}>About Me</Text>
        <Text style={styles.readingList}>Daftar Bacaan: ...</Text>
        {/* Daftar bacaan pengguna ditampilkan di sini */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#355a9c',
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  profileContainer: {
    position: 'absolute',
    top: 120,
    left: 16,
    right: 16,
    alignItems: 'center',
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    marginBottom: 16,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  userEmail: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 16,
  },
  aboutMe: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  readingList: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
});

export default ProfileScreen;
