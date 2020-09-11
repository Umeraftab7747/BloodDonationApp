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
import {AppButton, NavHeader, AppTextinput} from '../../components';

export class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.Container}>
        {/* top */}
        <View style={styles.imgContiner}>
          <ImageBackground
            style={styles.bg}
            source={require('../../assets/tbg.png')}>
            <Image
              style={styles.hand}
              source={require('../../assets/hand.png')}
            />
          </ImageBackground>
        </View>
        <View style={styles.loginContainer}>
          <ImageBackground
            style={styles.login}
            resizeMode={'contain'}
            source={require('../../assets/login.png')}>
            <Text style={styles.txt}>Register or Login</Text>
          </ImageBackground>
        </View>
        {/* middle */}
        <View style={styles.midleContainer}>
          <View style={styles.emptyContainer}></View>
          <AppButton
            title={'Login'}
            height={'5%'}
            onPress={() => this.props.navigation.navigate('Signin')}
          />
          <AppButton
            title={'Signin'}
            height={'5%'}
            onPress={() => this.props.navigation.navigate('Signup')}
          />
          <View style={styles.Ctext}>
            <Text style={styles.txtc}>
              Donate your blood for a reason, let the reason to be life
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imgContiner: {
    // backgroundColor: 'red',
    width: w('100%'),
    height: h('50%'),
  },
  bg: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  login: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    // backgroundColor: 'red',
    marginTop: -h('13%'),

    width: w('100%'),
    height: h('15%'),
  },
  hand: {
    resizeMode: 'contain',
    height: h('40%'),
  },
  txt: {
    color: 'black',
    fontSize: h('3.5%'),
    fontWeight: 'bold',
  },
  midleContainer: {
    // backgroundColor: 'tomato',
    width: '100%',
    height: h('40%'),
    alignItems: 'center',
  },
  btnContainer: {
    backgroundColor: 'tomato',
    height: h('7%'),
    width: '50%',
    borderRadius: h('7%'),
    overflow: 'hidden',
    marginTop: h('2%'),
  },
  btn: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btntxt: {color: 'white', fontWeight: 'bold', fontSize: h('2.8%')},
  emptyContainer: {
    // backgroundColor: 'tomato',
    height: '20%',
    width: w('100%'),
  },
  Ctext: {
    // backgroundColor: 'red',
    width: '100%',
    height: '42%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  txtc: {
    color: '#ea5455',
    fontSize: h('2.3%'),
    fontWeight: 'bold',
  },
});
