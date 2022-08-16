import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const ProfileImage = () => {
    
    return (
        <View  style={styles.view}>
            <Image style={styles.image} source={{ uri: 'https://avatars.githubusercontent.com/u/98233503?v=4'}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width: 80,
        height:80
    },
    image: {
        height: "100%",
        wıdth: "100%",
        borderRadius:50,
    }
})

export default ProfileImage;
