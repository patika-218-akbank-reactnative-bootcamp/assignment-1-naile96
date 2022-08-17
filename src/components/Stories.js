import React from 'react'
import { ScrollView, View } from 'react-native'
import Story from './Story'

const Stories = () => {
    return (
        <ScrollView horizontal={true} style={{ height: 150 }}>
            <Story url={'https://avatars.githubusercontent.com/u/98233503?v=4'} name={"naile"}></Story>
            <Story url={'https://avatars.githubusercontent.com/u/98233503?v=4'} name={"naile"}></Story>

            <Story url={'https://avatars.githubusercontent.com/u/98233503?v=4'} name={"naile"}></Story>
            <Story url={'https://avatars.githubusercontent.com/u/98233503?v=4'} name={"naile"}></Story>
            <Story url={'https://avatars.githubusercontent.com/u/98233503?v=4'} name={"naile"}></Story>

            <Story url={'https://avatars.githubusercontent.com/u/98233503?v=4'} name={"naile"}></Story>
      </ScrollView>
       
    )
}

export default Stories
