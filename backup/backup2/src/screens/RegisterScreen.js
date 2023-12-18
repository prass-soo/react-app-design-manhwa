// RegisterScreen.js
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const RegisterScreen = ({navigation}) => {
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manhwa Reader</Text>
      <Text style={styles.subtitle}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        // Anda dapat menambahkan properti lainnya sesuai kebutuhan
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        // Anda dapat menambahkan properti lainnya sesuai kebutuhan
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        // Anda dapat menambahkan properti lainnya sesuai kebutuhan
      />
      <TouchableOpacity
        style={styles.registerButton}
        onPress={handleLoginPress}>
        <Text style={styles.registerButtonText}>Register</Text>
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

  title: {
    fontSize: 36,
    marginBottom: 20,
    fontFamily: 'Satisfy-Regular',
  },

  subtitle: {
    fontSize: 22,
    marginBottom: 20,
    color: '#000',
    fontFamily: 'DidactGothic-Regular',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
    color: '#333',
  },
  registerButton: {
    backgroundColor: '#355a9c',
    paddingVertical: 10,
    paddingHorizontal: 125,
    borderRadius: 5,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'DidactGothic-Regular',
  },
});

export default RegisterScreen;
