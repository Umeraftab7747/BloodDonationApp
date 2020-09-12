/* eslint-disable react/self-closing-comp */
/* eslint-disable handle-callback-err */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import {AppButton, NavHeader, AppTextinput, ProfilePic} from '../../components';
import AsyncStorage from '@react-native-community/async-storage';
import {Surface} from 'react-native-paper';

export class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <ImageBackground
          style={styles.Container}
          source={require('../../assets/dash.png')}>
          <View style={styles.ViewContainer}>
            <View style={styles.img}>
              <ProfilePic />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
    resizeMode: 'center',
    justifyContent: 'center',
  },
  ViewContainer: {
    backgroundColor: 'white',
    height: h('90%'),
    marginTop: h('40%'),
    borderRadius: h('4%'),
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    marginTop: -h('11%'),
  },
  surface: {
    padding: 8,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});
