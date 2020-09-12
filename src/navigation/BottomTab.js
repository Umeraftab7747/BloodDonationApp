import React, {Component} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
import AntDesign from 'react-native-vector-icons/AntDesign';

// screen
import {Dashboard} from '../screens/dasboard';
import {MyRequest} from '../screens/request';

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
          name="MyRequest"
          component={MyRequest}
          options={{
            tabBarLabel: 'My Request',
            tabBarIcon: ({color}) => (
              <AntDesign name="staro" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
