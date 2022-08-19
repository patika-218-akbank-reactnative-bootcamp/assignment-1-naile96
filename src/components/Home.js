import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Instagram</Text>
      <View style={styles.iconsView}>
        <Ionicons style={styles.icons} name="duplicate-outline" />
        <Ionicons style={styles.icons} name="heart-outline" />
        <Ionicons style={styles.icons} name="chatbubble-ellipses-outline" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerName: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  text: {
    fontFamily: 'Billabong',
    fontSize: 40,
    paddingLeft: 10,
  },
  iconsView: {
    flexDirection: 'row',
    paddingRight: 15,
    size: 25,
  },
  icons: {
    paddingRight: 15,
    fontSize: 25,
  },
});

export default Home;
