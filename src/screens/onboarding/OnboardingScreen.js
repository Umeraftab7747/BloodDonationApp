/* eslint-disable handle-callback-err */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-sparse-arrays */
import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

import AppIntroSlider from 'react-native-app-intro-slider';
import AsyncStorage from '@react-native-community/async-storage';

const slides = [
  {
    key: 'one',
    image: require('../../assets/s1.png'),
  },
  {
    key: 'two',
    image: require('../../assets/s2.png'),
  },
  {
    key: 'three',
    image: require('../../assets/s3.png'),
  },
];

export class OnboardingScreen extends Component {
  state = {
    home: true,
  };

  RenderItem = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <Image
          source={item.image}
          style={{height: h('100%'), width: w('100%'), resizeMode: 'cover'}}
        />
      </View>
    );
  };

  render() {
    return (
      <AppIntroSlider
        renderItem={this.RenderItem}
        data={slides}
        activeDotStyle={{backgroundColor: 'white', width: '10%'}}
        dotStyle={{backgroundColor: 'white'}}
        onDone={() => {
          const value = 'save';
          AsyncStorage.setItem('save', JSON.stringify(value), () => {
            this.props.navigation.replace('WelcomeScreen');
          });
        }}
      />
    );
  }
}
