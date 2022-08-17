import React from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={{fontFamily: 'Billabong', fontSize: 40, paddingLeft: 10}}>
        Instagram
      </Text>
      <View style={{flexDirection: 'row', paddingRight: 15}}>
        <Ionicons
          size={25}
          style={{paddingRight: 15}}
          name="add-circle-outline"
        />
        <Ionicons size={25} style={{paddingRight: 15}} name="heart-outline" />
        <Ionicons
          size={25}
          style={{paddingRight: 15}}
          name="chatbubble-ellipses-outline"
        />
      </View>
    </View>
  );
};

export default Home;
