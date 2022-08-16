import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProfileImage from './ProfileImage'

const Story = ({url, name}) => {
    return (
        <View>
            <ProfileImage url={url} />
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:  {
        textAlign: 'center',
    }
})

export default Story
