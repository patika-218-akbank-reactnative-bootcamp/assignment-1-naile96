

import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Ionic from "react-native-vector-icons/Ionicons"
import Home from './src/components/Home';
import ProfileImage from './src/components/ProfileImage';
import Story from './src/components/Story';

const App = () => {
  return (
    <SafeAreaView>
      
      <StatusBar backgroundColor="white" barStyle="dark-content" animated={true} />
      <Home />
      {/* <ProfileImage url={'https://avatars.githubusercontent.com/u/98233503?v=4'}/> */}
      <ScrollView horizontal={true}>
        <Story url={'https://avatars.githubusercontent.com/u/98233503?v=4'} name={"naile"}></Story>
        <Story url={'https://avatars.githubusercontent.com/u/98233503?v=4'} name={"naile"}></Story>

        <Story url={'https://avatars.githubusercontent.com/u/98233503?v=4'} name={"naile"}></Story>
        <Story url={'https://avatars.githubusercontent.com/u/98233503?v=4'} name={"naile"}></Story>
        <Story url={'https://avatars.githubusercontent.com/u/98233503?v=4'} name={"naile"}></Story>

        <Story url={'https://avatars.githubusercontent.com/u/98233503?v=4'} name={"naile"}></Story>
      </ScrollView>

    </SafeAreaView>
  )
};


  
export default App;
