import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ProfileImage from './ProfileImage';

const Story = ({data}) => {
  return (
    <View>
      <ProfileImage url={data.avatarUrl} />
      <Text style={styles.text}>{data.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
});

export default Story;
