import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Icon} from 'react-native-elements';
import {Surface} from 'react-native-paper';
export class ProfilePic extends Component {
  render() {
    return (
      <TouchableOpacity {...this.props} style={styles.imgbox}>
        <Surface style={styles.surface}>
          {/* <Icon name="pluscircle" type="antdesign" color="#5b5656" size={30} /> */}
        </Surface>
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
    // backgroundColor: 'white',
    width: '35%',
    height: h('20%'),
    borderRadius: h('10%'),
    marginTop: h('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  surface: {
    padding: 8,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    // backgroundColor: 'red',
    borderRadius: h('10%'),
  },
});
