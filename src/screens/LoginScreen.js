import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({navigation, route}) => {
  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };
  const Dashboard = () => {
    navigation.navigate('Main');

    navigation.reset({
      index: 0,
      routes: [{name: 'Main'}],
    });
  };

  return (
    <View style={styles.container}>
      <Icon
        name="person-circle"
        size={80}
        color="#355a9c"
        style={styles.icon}
      />
      <Text style={styles.title}>Manhwa Reader</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.loginButton} onPress={Dashboard}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={handleRegisterPress}>
          <Text style={styles.registerButton}>Register</Text>
        </TouchableOpacity>
      </View>
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
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    marginBottom: 20,
    fontFamily: 'Satisfy-Regular',
  },
  input: {
    height: 40,
    width: '90%',
    borderColor: '#333',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#355a9c',
    paddingVertical: 10,
    paddingHorizontal: 150,
    borderRadius: 5,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'DidactGothic-Regular',
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  registerText: {
    marginRight: 5,
    color: '#888',
    fontFamily: 'DidactGothic-Regular',
  },
  registerButton: {
    color: '#355a9c',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
