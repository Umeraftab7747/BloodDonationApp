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
import {AppButton, NavHeader, AppTextinput} from '../../components';
var validator = require('email-validator');

export class Signup extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmpassword: '',
    gender: '',
    blood: '',
  };

  validate = () => {
    const {
      name,
      email,
      phone,
      password,
      confirmpassword,
      gender,
      blood,
    } = this.state;
    const check = validator.validate(this.state.email);
    if (check === true) {
      if (password !== '') {
        if (password.length > 8) {
          if (name !== '') {
            if (phone !== '') {
              if (confirmpassword !== '') {
                if (password === confirmpassword) {
                  if (gender !== '') {
                    if (blood !== '') {
                      const parms = {
                        name,
                        email,
                        phone,
                        password,
                        confirmpassword,
                        gender,
                        blood,
                      };
                      console.warn(parms);
                      // addonsas
                      // d
                      // asd
                      // a
                      // sd
                      // a
                      // sd
                      // as
                      // d
                    } else {
                      alert('Blood Type is Required');
                    }
                  } else {
                    alert('Gender is Required');
                  }
                } else {
                  alert('Password and Cofirm password is not same');
                }
              } else {
                alert('Confirm password is Required');
              }
            } else {
              alert('Phone No is Required');
            }
          } else {
            alert('Name is Required');
          }
        } else {
          alert('Password should be of 8 Characters');
        }
      } else {
        alert('password is Required');
      }
    } else {
      console.warn(email);
    }
  };

  render() {
    return (
      <View style={styles.Container}>
        <NavHeader
          title={'Signup'}
          onPress={() => this.props.navigation.goBack()}
        />
        {/* top */}
        <KeyboardAwareScrollView>
          <View style={styles.topContainer}>
            <Text style={styles.gtxt}>Details</Text>

            <View style={styles.txtinputContainer}>
              <AppTextinput
                name={'Name'}
                onChangeText={(name) => this.setState({name})}
              />
              <AppTextinput
                name={'Email'}
                onChangeText={(email) => this.setState({email})}
              />
              <AppTextinput
                name={'Phone'}
                onChangeText={(phone) => this.setState({phone})}
              />
              <AppTextinput
                name={'Password'}
                onChangeText={(password) => this.setState({password})}
              />
              <AppTextinput
                name={'Confirm Password'}
                onChangeText={(confirmpassword) =>
                  this.setState({confirmpassword})
                }
              />
            </View>
          </View>
          <View style={styles.midContainer}>
            <Text style={styles.gtxt}>Gender</Text>
            <View style={styles.imgContainer}>
              <TouchableOpacity
                onPress={() => {
                  const g = 'male';
                  this.setState({gender: g});
                }}
                style={styles.img}>
                {this.state.gender === 'male' ? (
                  <Image
                    style={styles.imgs}
                    source={require('../../assets/men2.png')}
                  />
                ) : (
                  <Image
                    style={styles.imgs}
                    source={require('../../assets/men.png')}
                  />
                )}
                <Text
                  style={[
                    styles.txtm,
                    ,
                    {
                      color: this.state.gender === 'male' ? '#ea5455' : '#000',
                    },
                  ]}>
                  MALE
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({gender: 'Female'})}
                style={styles.img2}>
                {this.state.gender === 'Female' ? (
                  <Image
                    style={styles.imgs}
                    source={require('../../assets/women2.png')}
                  />
                ) : (
                  <Image
                    style={styles.imgs}
                    source={require('../../assets/woman.png')}
                  />
                )}
                <Text
                  style={[
                    styles.txtf,
                    {
                      color:
                        this.state.gender === 'Female' ? '#ff7171' : '#000',
                    },
                  ]}>
                  FEMALE
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.botmContainer}>
            <Text style={styles.gtxt}>Select Blood Group</Text>
            {/* circle */}

            <View style={styles.BotomContainerView}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({blood: 'A+'});
                }}
                style={[
                  styles.circle,
                  {
                    backgroundColor:
                      this.state.blood === 'A+' ? '#ff7171' : null,
                  },
                ]}>
                <Text
                  style={[
                    styles.txta,
                    ,
                    {
                      color: this.state.blood === 'A+' ? '#fff' : '#000',
                    },
                  ]}>
                  A+
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.setState({blood: 'A-'});
                }}
                style={[
                  styles.circle,
                  {
                    backgroundColor:
                      this.state.blood === 'A-' ? '#ff7171' : null,
                  },
                ]}>
                <Text
                  style={[
                    styles.txta,
                    ,
                    {
                      color: this.state.blood === 'A-' ? '#fff' : '#000',
                    },
                  ]}>
                  A-
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.setState({blood: 'B+'});
                }}
                style={[
                  styles.circle,
                  {
                    backgroundColor:
                      this.state.blood === 'B+' ? '#ff7171' : null,
                  },
                ]}>
                <Text
                  style={[
                    styles.txta,
                    ,
                    {
                      color: this.state.blood === 'B+' ? '#fff' : '#000',
                    },
                  ]}>
                  B+
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.setState({blood: 'B-'});
                }}
                style={[
                  styles.circle,
                  {
                    backgroundColor:
                      this.state.blood === 'B-' ? '#ff7171' : null,
                  },
                ]}>
                <Text
                  style={[
                    styles.txta,
                    ,
                    {
                      color: this.state.blood === 'B-' ? '#fff' : '#000',
                    },
                  ]}>
                  B-
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.setState({blood: 'O+'});
                }}
                style={[
                  styles.circle,
                  {
                    backgroundColor:
                      this.state.blood === 'O+' ? '#ff7171' : null,
                  },
                ]}>
                <Text
                  style={[
                    styles.txta,
                    ,
                    {
                      color: this.state.blood === 'O+' ? '#fff' : '#000',
                    },
                  ]}>
                  O+
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.setState({blood: 'O-'});
                }}
                style={[
                  styles.circle,
                  {
                    backgroundColor:
                      this.state.blood === 'O-' ? '#ff7171' : null,
                  },
                ]}>
                <Text
                  style={[
                    styles.txta,
                    ,
                    {
                      color: this.state.blood === 'O-' ? '#fff' : '#000',
                    },
                  ]}>
                  O-
                </Text>
              </TouchableOpacity>
            </View>
            {/* circle 2 */}
            <View style={styles.BottomContainerView}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({blood: 'AB+'});
                }}
                style={[
                  styles.circle,
                  {
                    backgroundColor:
                      this.state.blood === 'AB+' ? '#ff7171' : null,
                  },
                ]}>
                <Text
                  style={[
                    styles.txta,
                    ,
                    {
                      color: this.state.blood === 'AB+' ? '#fff' : '#000',
                    },
                  ]}>
                  AB+
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.setState({blood: 'AB-'});
                }}
                style={[
                  styles.circle,
                  {
                    backgroundColor:
                      this.state.blood === 'AB-' ? '#ff7171' : null,
                  },
                ]}>
                <Text
                  style={[
                    styles.txta,
                    ,
                    {
                      color: this.state.blood === 'AB-' ? '#fff' : '#000',
                    },
                  ]}>
                  AB-
                </Text>
              </TouchableOpacity>
            </View>

            {/* end */}
          </View>
          <View style={styles.btnview}>
            <AppButton title={'Signup'} onPress={() => this.validate()} />

            <View style={{flexDirection: 'row', marginTop: h('2%')}}>
              <View
                style={{
                  // backgroundColor: 'green',
                  width: '35%',
                  height: h('5%'),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: h('2%'), color: 'black'}}>
                  Already a memeber ?
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  // backgroundColor: 'green',
                  width: '10%',
                  height: h('5%'),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: h('2%'),
                    fontWeight: 'bold',
                    color: '#ff7171',
                  }}>
                  Signin
                </Text>
              </TouchableOpacity>
            </View>
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
  topContainer: {
    // backgroundColor: 'red',
    width: '100%',
    height: h('50%'),
  },
  midContainer: {
    // backgroundColor: 'yellow',
    width: '100%',
    height: h('20%'),
  },
  botmContainer: {
    // backgroundColor: 'tomato',
    width: '100%',
    height: h('30%'),
  },
  gtxt: {
    fontSize: h('2.5%'),
    fontWeight: 'bold',
    color: 'black',
    marginLeft: h('7%'),
    marginTop: h('1%'),
  },
  txtinputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    flexDirection: 'row',
    // backgroundColor: 'red',

    height: h('15%'),
  },
  img: {
    width: '50%',
    height: '100%',
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightColor: 'rgba(0,0,0,0.2)',
    borderRightWidth: h('0.1%'),
  },
  img2: {
    width: '50%',
    height: '100%',
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftColor: 'rgba(0,0,0,0.2)',
    borderLeftWidth: h('0.1%'),
  },
  imgs: {
    height: h('8%'),
    width: '100%',
    resizeMode: 'contain',
  },
  txtf: {
    fontSize: h('2%'),
    marginTop: h('1.5%'),
  },
  txtm: {
    color: '#000',
    fontSize: h('2%'),
    marginTop: h('1.5%'),
  },
  BotomContainerView: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circle: {
    // backgroundColor: 'yellow',
    width: '10%',
    height: '20%',
    borderRadius: h('10%'),
    marginTop: h('3%'),
    marginLeft: h('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: h('0.1%'),
    borderColor: 'rgba(0,0,0,0.3)',
  },
  txta: {
    fontSize: h('2%'),
    // color: this.state.blood !== '' ? 'white' : 'black',
  },
  BottomContainerView: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    marginTop: -h('20%'),
    marginLeft: h('6%'),
    // justifyContent: 'center',
  },
  btnview: {
    // backgroundColor: 'red',
    width: '100%',
    height: h('20%'),
    alignItems: 'center',
    marginTop: -h('5%'),
  },
});
