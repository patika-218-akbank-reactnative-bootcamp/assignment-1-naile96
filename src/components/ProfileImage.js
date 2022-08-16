import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const ProfileImage = ({ url }) => {
    
    return (
        <View  style={styles.view}>
            <Image style={styles.image} source={{ uri: url}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width: 90,
        height:90,
        margin: 10,
        borderRadius:50,
        borderWidth: 3,
        borderColor: "#CD3DC0",
        
    },
    image: {
        height: "100%",
        wıdth: "100%",
        borderRadius:40,
        borderWidth: 3,
        borderColor: "#FFFFFF",

        }
})

export default ProfileImage;
