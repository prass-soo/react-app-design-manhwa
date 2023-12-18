import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {Logo} from './../assets/images/';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('Login'));
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={Logo} style={styles.image} />
        <Text style={styles.title}>Manhwa Reader</Text>
      </View>
    );
  }
}
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
});

export default Home;
