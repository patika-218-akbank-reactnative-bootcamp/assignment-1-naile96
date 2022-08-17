import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
} from 'react-native';
import ProfileImage from './ProfileImage';
import Ionicons from 'react-native-vector-icons/Ionicons';

const InstagramPost = ({data}) => {
  return (
    <Pressable>
      {/* header */}
      <View style={styles.header}>
        <ProfileImage size={60} url={data.profile.avatarUrl} />
        <Text style={styles.headerName}>{data.profile.name}</Text>
      </View>

      {/* body */}
      <View style={styles.view}>
        <Image style={styles.image} source={{uri: data.postUrl}} />
      </View>

      {/* footer */}
      <View>
        <View style={{flexDirection: 'row'}}>
          <Ionicons size={30} name="heart-outline" />
          <Ionicons size={30} name="chatbubble-outline" />
          <Ionicons size={30} name="paper-plane-outline" />
        </View>
        {/* <Text>{likes}</Text> */}
        <Text>{data.likedProfiles.length} Likes</Text>
        <Text>{data.likedProfiles[0].name} and other people liked</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
  },
  headerName: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  image: {
    height: '100%',
    wıdth: Dimensions.get('screen').width,
  },
  view: {
    width: '100%',
    height: 400,
  },
});

export default InstagramPost;
