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

export class Signin extends Component {
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
            <AppTextinput name={'Email'} />
            <AppTextinput name={'Password'} password={true} />
            <TouchableOpacity style={styles.ftxtContainer}>
              <Text style={styles.ftxt}>Forgot Password ?</Text>
            </TouchableOpacity>
            <AppButton title={'Signin'} height={'5%'} />
          </View>
          {/* bottom */}
          <View style={styles.bottomContainer}>
            <View style={styles.BtoomContainer}>
              <Text style={styles.atxt}>Dont have a Account ! </Text>
            </View>
            <TouchableOpacity style={styles.SContainer}>
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
