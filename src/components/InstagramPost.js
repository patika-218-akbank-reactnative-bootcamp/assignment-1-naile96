import React from 'react'
import { StyleSheet, Text, View, Image, Pressable, Dimensions} from 'react-native'
import ProfileImage from './ProfileImage'
import Ionicons from 'react-native-vector-icons/Ionicons';


const InstagramPost = ({url, name, postUrl, likes, caption}) => {
    return (
        <Pressable>
            {/* header */}
            <View style={styles.header}>
                <ProfileImage size={60} url={url} />
                <Text style={styles.headerName}>{name}</Text>
            </View>

            {/* body */}
            <View style={styles.view}>
                <Image style={styles.image} source={{ uri:postUrl}}/>
            </View>

            {/* footer */}
            <View>
                <View style={{flexDirection:"row"}}>
                    <Ionicons size={30} name="heart-outline"></Ionicons>
                    <Ionicons size={30} name="chatbubble-outline"></Ionicons>
                    <Ionicons size={30} name="paper-plane-outline"></Ionicons>
                </View>
                <Text>{likes}</Text>
                <Text>fggs</Text>
                
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    header:  {
        display: 'flex',
        flexDirection: 'row',
    },
    headerName:  {
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    image: {
        height: "100%",
        wıdth: Dimensions.get("screen").width,
        },
        view: {
            width: "100%",
            height:400,
            
        }
    
})

export default InstagramPost
