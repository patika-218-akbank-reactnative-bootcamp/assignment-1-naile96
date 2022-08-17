import React from 'react';
import {ScrollView, View} from 'react-native';
import InstagramPost from './InstagramPost';
import {Posts} from './MockData';

const Timeline = () => {
  return (
    <ScrollView>
      <InstagramPost data={Posts[0]} />
      <InstagramPost data={Posts[1]} />
      <InstagramPost data={Posts[2]} />
      {/* <InstagramPost data={Posts[3]} />
      <InstagramPost data={Posts[4]} />
      <InstagramPost data={Posts[5]} />
      <InstagramPost data={Posts[6]} /> */}
    </ScrollView>
  );
};

export default Timeline;
