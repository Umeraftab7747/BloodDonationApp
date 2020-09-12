/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
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
import {Surface} from 'react-native-paper';
export class NavHeader extends Component {
  render() {
    return (
      <Surface style={styles.surface}>
        <View style={styles.Container}>
          <TouchableOpacity onPress={this.props.onPress} style={styles.left}>
            <Image
              style={{width: '40%', height: '30%', resizeMode: 'contain'}}
              source={require('../assets/arrow.png')}
            />
          </TouchableOpacity>
          <View style={styles.middle}>
            <Text style={styles.txt}>{this.props.title}</Text>
          </View>
          <View style={styles.right}></View>
        </View>
      </Surface>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    height: h('8%'),
    width: w('100%'),
    flexDirection: 'row',
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: h('0.1%'),
    elevation: 6,
  },
  left: {
    // backgroundColor: 'red',
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    // backgroundColor: 'green',
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    // backgroundColor: 'gold',
    width: '15%',
    height: '100%',
  },
  txt: {
    color: 'black',
    fontSize: h('2.5%'),
    fontWeight: 'bold',
  },
  surface: {
    padding: 8,
    width: '100%',
    height: h('8%'),
    alignItems: 'center',
    justifyContent: 'center',
    // elevation: 5,
    // backgroundColor: 'red',
    borderRadius: h('10%'),
  },
});
