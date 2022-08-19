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
        <View style={styles.headerLeft}>
          <ProfileImage size={50} url={data.profile.avatarUrl} />
          <Text style={styles.headerName}>{data.profile.name}</Text>
        </View>

        <View style={styles.headerRight}>
          <Ionicons size={30} name="ellipsis-horizontal-outline" />
        </View>
      </View>

      {/* body */}
      <View style={styles.body}>
        <Image style={styles.bodyImage} source={{uri: data.postUrl}} />
      </View>

      {/* footer */}
      <View style={styles.footerView}>
        <View style={styles.iconsView}>
          <Ionicons style={styles.icons} name="heart-outline" />
          <Ionicons style={styles.icons} name="chatbubble-outline" />
          <Ionicons style={styles.icons} name="paper-plane-outline" />
        </View>
        {/* <Text>{likes}</Text> */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            {data.likedProfiles.length} Likes
          </Text>
          <Text style={styles.footerText}>
            {data.likedProfiles[0].name} and other people liked
          </Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>{data.profile.name}</Text>
          <Text>{data.description}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  footerText: {
    paddingRight: 5,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 7,
  },
  header: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
  },
  headerLeft: {
    flexDirection: 'row',
  },
  headerRight: {
    padding: 10,
    marginTop: 7,
  },
  headerName: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  body: {
    width: '100%',
    height: 400,
  },
  bodyImage: {
    height: '100%',
    width: Dimensions.get('screen').width,
  },
  footerView: {
    padding: 8,
  },
  iconsView: {
    flexDirection: 'row',
  },
  icons: {
    paddingRight: 10,
    fontSize: 25,
  },
});

export default InstagramPost;
