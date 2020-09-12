import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
import {Icon} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';

// screen
import {Dashboard} from '../screens/dasboard';
import {Signup} from '../screens/signup';

export class BottomTab extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#ea5455"
        inactiveColor="#000"
        barStyle={{backgroundColor: '#fff'}}>
        <Tab.Screen
          name="Feed"
          component={Dashboard}
          options={{
            tabBarLabel: 'Dashboard',
            tabBarIcon: ({color}) => (
              <AntDesign name="user" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Signup"
          component={Signup}
          options={{
            tabBarLabel: 'Signup',
            tabBarIcon: ({color}) => (
              <AntDesign name="setting" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
