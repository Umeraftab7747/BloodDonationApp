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
import {AppButton, NavHeader, AppTextinput} from '../../components';
import AsyncStorage from '@react-native-community/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';

export class MyRequest extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <ImageBackground
          source={require('../../assets/dash.png')}
          style={styles.ImageBackground}>
          <Text style={styles.imgtxt}>MY REQUEST</Text>
          <View style={styles.newRequest}>
            <View style={styles.left}>
              <Text style={styles.no}>9</Text>
              <Text style={styles.Requst}>No of Request</Text>
            </View>
            <View style={styles.right}>
              <TouchableOpacity style={styles.btn}>
                <AntDesign name="pluscircleo" color={'#ea5455'} size={20} />
                <Text style={styles.btntxt}>Add Request</Text>
              </TouchableOpacity>
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
  },
  ImageBackground: {
    // backgroundColor: 'red',
    width: '100%',
    height: h('35%'),
    alignItems: 'center',
  },
  imgtxt: {
    color: 'white',
    fontSize: h('4%'),
    fontWeight: 'bold',
    marginTop: h('3%'),
  },
  newRequest: {
    backgroundColor: '#fff2',
    width: '80%',
    height: h('15%'),
    flexDirection: 'row',
    borderRadius: h('1%'),
  },
  left: {
    // backgroundColor: 'green',
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    // backgroundColor: 'yellow',
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'white',
    width: '85%',
    height: h('5%'),
    borderRadius: h('10%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btntxt: {
    color: '#ea5455',
    fontWeight: 'bold',
    fontSize: h('2%'),
    marginLeft: h('1%'),
  },
  no: {
    color: 'white',
    fontSize: h('4%'),
  },
  Requst: {color: 'white', fontSize: h('2%'), fontWeight: 'bold'},
});
