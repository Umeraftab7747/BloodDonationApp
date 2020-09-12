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
import {AnimatedFlatList, AnimationType} from 'flatlist-intro-animations';

export class MyRequest extends Component {
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
          <Text style={styles.addresstxt}>Address</Text>
          <View style={styles.noConatiner}>
            <Text style={styles.notxt}>03040506753</Text>
          </View>
        </View>
        <View style={styles.LastContainer}>
          <View style={styles.requestContainr}>
            <Text style={styles.requestTxt}>Requested</Text>
          </View>
          <View style={styles.circlebLood}>
            <Text style={styles.circelTxt}>A+</Text>
          </View>
        </View>
      </View>
    </View>
  );

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
          {/* flat */}
        </ImageBackground>
        <View style={styles.flatlistContainerView}>
          <AnimatedFlatList
            contentContainerStyle={{marginTop: -h('1%')}}
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
    marginTop: h('4%'),
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
    marginTop: h('2%'),
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
    marginTop: h('3%'),
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
    marginTop: h('2%'),
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
    backgroundColor: 'white',
    width: '100%',
    height: h('35.1%'),
    // marginTop: -h('50%'),
  },
});
