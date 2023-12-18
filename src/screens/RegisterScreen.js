import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RegisterScreen = ({navigation}) => {
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="user-plus" size={30} color="#355a9c" style={styles.icon} />
        <Text style={styles.title}>Manhwa Reader</Text>
      </View>
      <Text style={styles.subtitle}>Register</Text>
      <TextInput style={styles.input} placeholder="Full Name" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 36,
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
