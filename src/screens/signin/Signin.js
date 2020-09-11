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

export class Signin extends Component {
  state = {email: '', password: ''};

  validata = () => {
    const {email, password} = this.state;
    if (email !== '') {
      if (password !== '') {
        AsyncStorage.getItem('userdata', (err, data) => {
          const Userdata = JSON.parse(data);
          if (Userdata !== null) {
            if (email === Userdata.email) {
              if (password === Userdata.password) {
                this.props.navigation.replace('Dashboard');
              } else {
                alert('Password is wrong');
              }
            } else {
              alert('Invalid email');
            }
          } else {
            console.warn('no data');
          }
        });
      } else {
        alert('Password is Required');
      }
    } else {
      alert('Email is Required');
    }
  };

  render() {
    return (
      <View style={styles.Container}>
        <NavHeader
          title={'Signin'}
          onPress={() => this.props.navigation.goBack()}
        />
        <KeyboardAwareScrollView>
          {/* top */}
          <View style={styles.bgContainer}>
            <AppTextinput
              name={'Email'}
              onChangeText={(email) => this.setState({email})}
            />
            <AppTextinput
              name={'Password'}
              password={true}
              onChangeText={(password) => this.setState({password})}
            />
            <TouchableOpacity style={styles.ftxtContainer}>
              <Text style={styles.ftxt}>Forgot Password ?</Text>
            </TouchableOpacity>
            <AppButton title={'Signin'} onPress={() => this.validata()} />
          </View>
          {/* bottom */}
          <View style={styles.bottomContainer}>
            <View style={styles.BtoomContainer}>
              <Text style={styles.atxt}>Dont have a Account ! </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Signup');
              }}
              style={styles.SContainer}>
              <Text style={styles.stxt}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: h('10%'),
    // backgroundColor: 'red',
    width: w('100%'),
    height: h('70%'),
  },
  ftxtContainer: {
    marginRight: h('27%'),
    marginTop: h('2%'),
  },
  ftxt: {
    color: '#ea5455',
    fontSize: h('2.2%'),
  },
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  BtoomContainer: {
    // backgroundColor: 'gold',
    height: h('7%'),
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SContainer: {
    // backgroundColor: 'green',
    height: h('7%'),
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  atxt: {
    color: 'black',
    fontSize: h('2%'),
  },
  stxt: {
    color: '#ea5455',
    fontSize: h('2%'),
    fontWeight: 'bold',
  },
});
