
import HomeScreen from './Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen2 from './Screens/Screen2';
import Screen3 from './Screens/Screen3';
import Login from './Screens/Login';
import MainScreen from './Screens/MainScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={
            {
              headerShown: false
            }
          }
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={
            {
              headerShown: false
            }
          }
        />
        <Stack.Screen
          name="Screen3"
          component={Screen3}
          options={
            {
              headerShown: false
            }
          }
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={
            {
              headerShown: false
            }
          }
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={
            {
              headerShown: false
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

