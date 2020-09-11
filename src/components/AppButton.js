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

export class AppButton extends Component {
  render() {
    return (
      <TouchableOpacity {...this.props} style={styles.btnContainer}>
        <ImageBackground
          style={styles.btn}
          source={require('../assets/btn.png')}>
          <Text style={styles.btntxt}>{this.props.title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: 'tomato',
    height: h(this.props.hight),
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
  btntxt: {color: 'white', fontWeight: 'bold', fontSize: h('2.5%')},
});
