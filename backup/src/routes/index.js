import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  HomeScreen,
  LoginScreen,
  OnBoardingScreen,
  RegisterScreen,
  ProfileScreen,
  LibraryScreen,
  HistoryScreen,
  HelpScreen,
  SplashScreen,
  DetailScreen,
} from '../screens';
// import {MainTabNavigator} from '../components';

const Main = createBottomTabNavigator();

function MainMenu() {
  return (
    <Main.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home'; // FontAwesome icon name for home
          } else if (route.name === 'Library') {
            iconName = 'book'; // FontAwesome icon name for book
          } else if (route.name === 'Profile') {
            iconName = 'user'; // FontAwesome icon name for user
          }

          // Use the Icon component with FontAwesome icon name
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Main.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="Library"
        component={LibraryScreen}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Main.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function RootNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnBoarding"
        component={OnBoardingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main"
        component={MainMenu}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Library" component={LibraryScreen} /> */}
      <Stack.Screen name="History" component={HistoryScreen} />
      <Stack.Screen name="Help" component={HelpScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      {/* <Stack.Screen name="Main" component={MainTabNavigator} /> */}
    </Stack.Navigator>
  );
}

export default RootNav;
