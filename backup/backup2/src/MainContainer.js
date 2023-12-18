import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  OnBoardingScreen,
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ProfileScreen,
  LibraryScreen,
  HistoryScreen,
  HelpScreen,
} from './screens';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const homeName = 'Home';
const libraryName = 'Library';
const profileName = 'Profile';

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      {/* Other screens for HomeStack */}
    </Stack.Navigator>
  );
}

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === libraryName) {
              iconName = focused ? 'library' : 'list-outline';
            } else if (rn === profileName) {
              iconName = focused ? 'profile' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#355a9c',
          inactiveTintColor: '#000',
          labelStyle: {paddingBottom: 10, fontSize: 10},
          style: {padding: 10, height: 70},
        }}>
        <Tab.Screen
          name={homeName}
          component={HomeStack}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name={libraryName}
          component={LibraryScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name={profileName}
          component={ProfileScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
