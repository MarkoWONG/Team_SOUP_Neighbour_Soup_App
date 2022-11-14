import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Postcode from './pages/signin_signup/Postcode.js';
import Signin from './pages/signin_signup/Signin.js'
import Signup from './pages/signin_signup/Signup.js'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Signup" 
          component={Signup} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Signin" 
          component={Signin} 
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Postcode"
          component={Postcode}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

