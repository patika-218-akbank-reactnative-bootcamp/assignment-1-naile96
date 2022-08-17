import React from 'react';
import {ScrollView} from 'react-native';
import Story from './Story';
import {StoriesData} from './MockData';

const Stories = () => {
  return (
    <ScrollView horizontal={true} style={{height: 150}}>
      <Story data={StoriesData[0]} />
      <Story data={StoriesData[1]} />
      <Story data={StoriesData[2]} />
      <Story data={StoriesData[3]} />
      <Story data={StoriesData[4]} />
      <Story data={StoriesData[5]} />
    </ScrollView>
  );
};

export default Stories;
