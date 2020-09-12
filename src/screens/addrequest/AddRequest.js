/* eslint-disable no-sparse-arrays */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable handle-callback-err */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {AppButton, NavHeader, AppTextinput} from '../../components';

export class AddRequest extends Component {
  state = {blood: ''};
  render() {
    return (
      <View style={styles.Container}>
        <NavHeader title={'Add Request'} />
        <Text style={styles.detail}>DETAILS</Text>
        <View style={styles.ContainerView}>
          <AppTextinput name={'Email'} />
          <AppTextinput name={'Phone No'} />
          <AppTextinput name={'Address'} />
        </View>

        {/* add */}
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
                  backgroundColor: this.state.blood === 'A+' ? '#ff7171' : null,
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
                  backgroundColor: this.state.blood === 'A-' ? '#ff7171' : null,
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
                  backgroundColor: this.state.blood === 'B+' ? '#ff7171' : null,
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
                  backgroundColor: this.state.blood === 'B-' ? '#ff7171' : null,
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
                  backgroundColor: this.state.blood === 'O+' ? '#ff7171' : null,
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
                  backgroundColor: this.state.blood === 'O-' ? '#ff7171' : null,
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
        <View style={styles.btn}>
          <AppButton
            title={'Submit'}
            onPress={() => {
              console.warn(this.state.blood);
            }}
          />
        </View>

        {/* end */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ContainerView: {
    alignItems: 'center',
    marginTop: h('1%'),
  },
  detail: {
    marginLeft: h('6%'),
    marginTop: h('3%'),
    fontWeight: 'bold',
    fontSize: h('3%'),
  },
  botmContainer: {
    // backgroundColor: 'tomato',
    width: '100%',
    height: h('30%'),
    // flexDirection: 'row',
  },
  gtxt: {
    fontSize: h('2.5%'),
    fontWeight: 'bold',
    color: 'black',
    marginLeft: h('7%'),
    marginTop: h('1%'),
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
  BotomContainerView: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn: {alignItems: 'center', width: '100%'},
});
