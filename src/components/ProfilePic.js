import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Icon} from 'react-native-elements';
export class ProfilePic extends Component {
  render() {
    return (
      <TouchableOpacity {...this.props} style={styles.imgbox}>
        <Icon name="pluscircle" type="antdesign" color="#5b5656" size={30} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btxt: {
    color: 'white',
    fontSize: h('3%'),
    fontWeight: 'bold',
    marginTop: h('1%'),
  },
  imgbox: {
    backgroundColor: 'white',
    width: '35%',
    height: h('20%'),
    borderRadius: h('10%'),
    marginTop: h('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
