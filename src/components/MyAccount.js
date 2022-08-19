import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MyAccount = ({url, size = 77, data}) => {
  return (
    <View style={[styles.view, {width: size, height: size}]}>
      <Image style={styles.image} source={{uri: data.avatarUrl}} />
      <View style={styles.viewIcon}>
        <Ionicons style={styles.icon} name="add-circle" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewIcon: {position: 'absolute', bottom: 0, right: 8, zIndex: 1},

  icon: {
    fontSize: 30,
    color: '#378FD9',
    backgroundColor: 'transparent',
    borderRadius: 40,
    borderColor: '#FFFFFF',
  },
  view: {
    margin: 5,
    borderRadius: 50,
  },
  image: {
    height: '100%',
    wıdth: '100%',
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
});

export default MyAccount;
