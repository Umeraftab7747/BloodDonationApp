import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

// screens
import {WelcomeScreen} from '../screens/welcome';
import {Signin} from '../screens/signin';
import {Signup} from '../screens/signup';
import {SplitScreen} from '../screens/split';

export class StackNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SplitScreen"
            component={SplitScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signin"
            component={Signin}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
