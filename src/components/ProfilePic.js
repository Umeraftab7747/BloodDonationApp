/* eslint-disable handle-callback-err */
import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Icon} from 'react-native-elements';
import {Surface} from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import {instanceAxios, Url} from '../screens/Api';
import AsyncStorage from '@react-native-community/async-storage';

export class ProfilePic extends Component {
  state = {img: ''};

  capture = () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.setState({img: response.uri});
        const params = {
          Photo: response.uri,
        };
        instanceAxios
          .post(Url + 'img', params)
          .then((res) => {
            const data = res.data;
            if (data.status === '200') {
              console.warn(data.msg);
            } else if (data.status === '404') {
              alert(data.msg);
            }
          })
          .catch((err) => {
            console.warn('network error');
          });
      }
    });
  };

  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.capture();
        }}
        {...this.props}
        style={styles.imgbox}>
        <Surface style={styles.surface}>
          {/* <Image source={{uri: this.state.Photo}} /> */}
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
