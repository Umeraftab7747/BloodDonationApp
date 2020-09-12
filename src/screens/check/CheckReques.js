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
import {AnimatedFlatList, AnimationType} from 'flatlist-intro-animations';

export class CheckReques extends Component {
  state = {
    data: [
      {user: 1},
      {user: 2},
      {user: 4},
      {user: 3},
      {user: 5},
      {user: 6},
      {user: 7},
    ],
  };

  RenderItem = (item) => (
    <TouchableOpacity style={styles.ViewContainer}>
      <View style={styles.left}>
        <View style={styles.img}></View>
      </View>
      <View style={styles.right}>
        <Text style={styles.name}>Umer Aftab</Text>
        <Text style={styles.city}>Sargodha</Text>
      </View>
      <View style={styles.last}>
        <Text style={styles.bloodGrup}>A+</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.Container}>
        <NavHeader
          title={'Check Request'}
          onPress={() => this.props.navigation.goBack()}
        />
        <AnimatedFlatList
          contentContainerStyle={{marginTop: -h('1%')}}
          data={this.state.data}
          renderItem={({item}) => this.RenderItem(item)}
          animationType={AnimationType.Dive}
          keyExtractor={(item) => item.name}
          animationDuration={1000}
          focused={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#E6DDDD',
    alignItems: 'center',
  },
  ViewContainer: {
    backgroundColor: 'white',
    width: w('85%'),
    height: h('20%'),
    marginTop: h('2%'),
    flexDirection: 'row',
    borderRadius: h('1%'),
  },
  left: {
    // backgroundColor: 'tomato',
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    // backgroundColor: 'gold',
    width: '40%',
    height: '100%',
    justifyContent: 'center',
  },
  img: {
    backgroundColor: 'tomato',
    width: '90%',
    height: '70%',
    borderRadius: h('10%'),
  },
  name: {
    color: 'black',
    fontSize: h('2.5%'),
    fontWeight: 'bold',
    marginLeft: h('2%'),
  },
  city: {
    fontSize: h('2%'),
    color: 'silver',
    marginLeft: h('2%'),
  },
  last: {
    // backgroundColor: 'red',
    width: '15%',
    height: '40%',
    borderRadius: h('10%'),
    borderColor: '#FF215D',
    borderWidth: 1,
    marginTop: h('5.8%'),
    marginLeft: h('4%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bloodGrup: {
    color: '#FF215D',
    fontSize: h('2%'),
  },
});
