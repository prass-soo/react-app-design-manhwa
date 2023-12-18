import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,
  LoginScreen,
  OnBoardingScreen,
  RegisterScreen,
  ProfileScreen,
  LibraryScreen,
  HistoryScreen,
  HelpScreen,
} from '../screens';
// import {MainTabNavigator} from '../components';
const Stack = createNativeStackNavigator();

function RootNav() {
  return (
    <Stack.Navigator>
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
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Library" component={LibraryScreen} />
      <Stack.Screen name="History" component={HistoryScreen} />
      <Stack.Screen name="Help" component={HelpScreen} />
      {/* <Stack.Screen name="Main" component={MainTabNavigator} /> */}
    </Stack.Navigator>
  );
}

export default RootNav;
