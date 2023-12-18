import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';

const Boot = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default Boot;
