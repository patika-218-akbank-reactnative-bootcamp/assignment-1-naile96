import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Story from './Story';
import {StoriesData} from './MockData';
import MyAccount from './MyAccount';

const Stories = () => {
  return (
    <ScrollView horizontal={true} style={styles.view}>
      <MyAccount data={StoriesData[0]} />
      <Story data={StoriesData[1]} />
      <Story data={StoriesData[2]} />
      <Story data={StoriesData[3]} />
      <Story data={StoriesData[4]} />
      <Story data={StoriesData[5]} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 135,
  },
});

export default Stories;
