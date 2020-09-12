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
import {AppButton, NavHeader, AppTextinput} from '../../components';
var validator = require('email-validator');
import AsyncStorage from '@react-native-community/async-storage';
import {AnimatedFlatList, AnimationType} from 'flatlist-intro-animations';

export class Donarscreen extends Component {
  state = {
    data: [
      {
        name: 'Umer',
        fName: 'Irfan',
        dob: '17-08-1999',
        city: 'Sargodha',
      },
      {
        name: 'Umers',
        fName: 'Irfan',
        dob: '17-08-1999',
        city: 'Sargodha',
      },
      {
        name: 'Umes',
        fName: 'Irfan',
        dob: '17-08-1999',
        city: 'Sargodha',
      },
      {
        name: 'Uers',
        fName: 'Irfan',
        dob: '17-08-1999',
        city: 'Sargodha',
      },
      {
        name: 'Urs',
        fName: 'Irfan',
        dob: '17-08-1999',
        city: 'Sargodha',
      },
    ],
  };
  RenderItem = (item) => (
    <View style={styles.flatlistContainer}>
      <View style={styles.flatlistItem}>
        <View style={styles.leftContainer}>
          {/* img */}
          <View style={styles.imgcontainer}></View>
        </View>
        <View style={styles.RightContainer}>
          <Text style={styles.nametxt}>NAME</Text>

          <View style={styles.noConatiner}>
            <Text style={styles.notxt}>Ask for Help?</Text>
          </View>
        </View>
        <View style={styles.LastContainer}>
          <View style={styles.circlebLood}>
            <Text style={styles.circelTxt}>A+</Text>
          </View>
        </View>
      </View>
    </View>
  );

  render() {
    return (
      <ScrollView>
        <View style={styles.Container}>
          <NavHeader
            title={'Donar List'}
            onPress={() => this.props.navigation.goBack()}
          />
          <View style={styles.flatlistContainerView}>
            <AnimatedFlatList
              contentContainerStyle={{
                marginTop: -h('1%'),
              }}
              data={this.state.data}
              renderItem={({item}) => this.RenderItem(item)}
              animationType={AnimationType.Dive}
              keyExtractor={(item) => item.name}
              animationDuration={1000}
              focused={true}
            />
            <View style={styles.frespace}></View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },

  flatlistItem: {
    backgroundColor: '#fff',
    width: '90%',
    height: h('19%'),
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: h('1%'),
  },
  flatlistContainer: {
    alignItems: 'center',
    marginTop: h('4%'),
  },
  flatlistContainerView: {
    backgroundColor: '#E6DDDD',
    height: '100%',
  },
  leftContainer: {
    // backgroundColor: '#000',
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  RightContainer: {
    // backgroundColor: 'red',
    width: '40%',
    height: '100%',
  },
  imgcontainer: {
    backgroundColor: '#ea5455',
    borderRadius: h('100%'),
    width: '80%',
    height: '70%',
  },
  LastContainer: {
    // backgroundColor: 'yellow',
    width: '30%',
    alignItems: 'flex-end',
  },
  nametxt: {
    color: 'black',
    fontSize: h('2%'),
    marginTop: h('7%'),
  },
  addresstxt: {
    color: 'silver',
    fontSize: h('2%'),
    // marginTop: h('1%'),
  },
  noConatiner: {
    // backgroundColor: 'red',
    width: '80%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: h('10%'),
    marginTop: h('3%'),
    borderColor: '#ea5455',
    borderWidth: 1,
    marginLeft: h('4%'),
  },
  requestContainr: {
    backgroundColor: '#FF215D',
    width: '80%',
    height: '25%',
    justifyContent: 'center',
    paddingLeft: h('2%'),
    // borderRadius: h('10%'),
    marginTop: h('3%'),

    borderTopLeftRadius: h('10%'),
    borderBottomLeftRadius: h('10%'),
  },
  circlebLood: {
    width: '50%',
    height: '42%',
    borderRadius: h('10%'),
    // backgroundColor: 'red',
    marginTop: h('5%'),
    marginRight: h('3%'),
    borderColor: 'silver',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circelTxt: {
    color: '#FF215D',
    fontSize: h('2.5%'),
  },
  requestTxt: {
    color: '#Ffff',
    fontSize: h('2%'),
  },
  frespace: {
    // backgroundColor: 'white',
    width: '100%',
    height: h('5%'),
    // marginTop: -h('50%'),
  },
});
