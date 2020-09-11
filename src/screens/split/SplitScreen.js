/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';

export class SplitScreen extends Component {
  //   componentDidMount = () => {
  //     setTimeout(() => {
  //       this.retrieveUser();
  //     }, 3000);
  //   };

  //   retrieveUser = () => {
  //     AsyncStorage.getItem('userData', (error, data) => {
  //       const userData = JSON.parse(data);

  //       if (userData !== null) {
  //         this.props.navigation.replace('Signup');
  //       } else {
  //         this.props.navigation.replace('WelcomeScreen');
  //       }
  //     });
  //   };

  render() {
    return (
      <View style={styles.Container}>
        <ImageBackground
          style={styles.imgContainer}
          source={require('../../assets/split.png')}>
          <View style={styles.txtContainer}>
            <Image
              style={styles.img}
              source={require('../../assets/logo2.png')}
            />
            <Text style={styles.txt}>Blood Bank</Text>
          </View>
          <View style={styles.loading}>
            <ActivityIndicator
              style={{marginRight: h('3%')}}
              size="large"
              color="#ea5455"
            />
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
  },
  imgContainer: {height: '100%', width: w('110%')},
  loading: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: -h('45%'),
  },
  txtContainer: {
    // backgroundColor: 'red',
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  txt: {
    color: 'white',
    fontSize: h('4%'),
    fontWeight: 'bold',
    marginRight: h('5%'),
  },
  img: {
    width: '30%',
    height: '50%',
    resizeMode: 'contain',
    marginRight: h('6%'),
    marginBottom: h('2%'),
  },
});
