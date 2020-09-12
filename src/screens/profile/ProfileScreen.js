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

              <Text style={styles.nametxt}>Umer Aftab</Text>
              <View style={styles.lowContainer}>
                {/* lower */}
                <View style={[styles.lowerContainerview, {marginTop: h('7%')}]}>
                  <View style={styles.left}>
                    <Text style={styles.txt}>Email:</Text>
                  </View>
                  <View style={styles.Right}>
                    <Text style={styles.Etxt}>umer@g.com</Text>
                  </View>
                </View>
                {/* lwer2 */}

                <View style={styles.lowerContainerview}>
                  <View style={styles.left}>
                    <Text style={styles.txt}>Phone:</Text>
                  </View>
                  <View style={styles.Right}>
                    <Text style={styles.Etxt}>+9202020212</Text>
                  </View>
                </View>
                {/* logout */}
                <TouchableOpacity style={styles.logout}>
                  <Text style={styles.ltxt}>logout</Text>
                </TouchableOpacity>
              </View>
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
  nametxt: {
    fontSize: h('2.5%'),
    marginTop: h('2%'),
    fontWeight: 'bold',
    color: '#000',
  },
  lowContainer: {
    // backgroundColor: 'red',
    width: '100%',
    height: '75%',

    alignItems: 'center',
  },
  lowerContainerview: {
    backgroundColor: '#FF215D',
    width: '70%',
    height: '15%',
    marginTop: h('2%'),
    flexDirection: 'row',
    borderRadius: h('1%'),
  },
  txt: {
    color: '#Ffff',
    fontWeight: 'bold',
    fontSize: h('2.5%'),
  },
  left: {
    // backgroundColor: 'red',
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Right: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'red',
  },
  Etxt: {
    color: '#fff',
    fontSize: h('2.2%'),
  },
  logout: {
    backgroundColor: '#FF215D',
    width: '30%',
    height: '8%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: h('7%'),
    borderRadius: h('10%'),
  },
  ltxt: {color: '#fff', fontSize: h('2.2%')},
});
