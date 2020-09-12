/* eslint-disable handle-callback-err */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-sparse-arrays */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import {AppButton, NavHeader, AppTextinput, ProfilePic} from '../../components';

import AsyncStorage from '@react-native-community/async-storage';
import {Icon} from 'react-native-elements';

export class Dashboard extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.Container}
        source={require('../../assets/dash.png')}>
        {/* top */}
        <View style={styles.logo}>
          <Text style={styles.btxt}>BLOOD BANK</Text>

          <ProfilePic
            onPress={() => {
              console.warn('IMAGE UPLOADED');
            }}
          />
          <View style={{flexDirection: 'row', marginTop: h('1%')}}>
            <Text style={styles.wtxt}>Welcome! </Text>
            {/* name here  */}
            <Text style={styles.nametxt}>Umer</Text>
          </View>
        </View>
        <View style={styles.topview}>
          <View style={styles.Donar}>
            <View style={styles.leftContianer}>
              <Text style={styles.numbertxt}>12,421</Text>
              <Text style={styles.donartxt}>Donar's</Text>
            </View>
            <View style={styles.rightContianer}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntxt}>Find Donar</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.Donar}>
            <View style={styles.leftContianer}>
              <Text style={styles.numbertxt}>51,492</Text>
              <Text style={styles.donartxt}>Request's</Text>
            </View>
            <View style={styles.rightContianer}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntxt}>See Request</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* bottom view */}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
    resizeMode: 'center',
  },
  Donar: {
    backgroundColor: '#fff2',
    width: w('80%'),
    height: h('20%'),
    borderRadius: h('1%'),
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
    marginTop: h('2%'),
  },
  topview: {
    alignItems: 'center',
    // marginTop: h('10%'),
    // backgroundColor: 'yellow',
  },
  bottomview: {
    alignItems: 'center',
    marginTop: h('3%'),
    // backgroundColor: 'yellow',
  },
  leftContianer: {
    // backgroundColor: 'red',
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContianer: {
    // backgroundColor: 'green',
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numbertxt: {
    color: 'white',
    fontSize: h('4%'),
    fontWeight: '600',
  },
  donartxt: {
    color: 'white',
    fontSize: h('2.5'),
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: 'white',
    height: h('6%'),
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: h('7%'),
  },
  btntxt: {
    color: '#ea5455',
    fontWeight: 'bold',
    fontSize: h('2%'),
  },
  logo: {
    // backgroundColor: 'yellow',
    width: '100%',
    height: h('35%'),
    alignItems: 'center',
  },
  btxt: {
    color: '#fff',
    fontSize: h('3%'),
    fontWeight: 'bold',
    marginTop: h('1%'),
  },
  imgbox: {
    backgroundColor: 'white',
    width: '35%',
    height: h('20%'),
    borderRadius: h('10%'),
    marginTop: h('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  wtxt: {
    color: 'white',
    fontSize: h('3%'),
  },
  nametxt: {
    color: 'white',
    fontSize: h('3%'),
    fontWeight: 'bold',
  },
});
