

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
import Stories from './src/components/Stories';
import InstagramPost from './src/components/InstagramPost';

const App = () => {
  return (
    <SafeAreaView>
      
      <StatusBar backgroundColor="white" barStyle="dark-content" animated={true} />
      <Stories> </Stories>
      <View style = {styles.lineStyle} />
      <ScrollView>
      <InstagramPost url={'https://avatars.githubusercontent.com/u/98233503?v=4'} name={"naile"} 
      postUrl={'https://pratikbilgievi.com/wp-content/uploads/2021/03/telefonlar-icin-harika-doga-resimleri-1.jpg'}/>

<InstagramPost url={'https://avatars.githubusercontent.com/u/98233503?v=4'} name={"naile"} 
      postUrl={'https://pratikbilgievi.com/wp-content/uploads/2021/03/telefonlar-icin-harika-doga-resimleri-1.jpg'}/>

<InstagramPost url={'https://avatars.githubusercontent.com/u/98233503?v=4'} name={"naile"} 
      postUrl={'https://pratikbilgievi.com/wp-content/uploads/2021/03/telefonlar-icin-harika-doga-resimleri-1.jpg'}/>

<InstagramPost url={'https://avatars.githubusercontent.com/u/98233503?v=4'} name={"naile"} 
      postUrl={'https://pratikbilgievi.com/wp-content/uploads/2021/03/telefonlar-icin-harika-doga-resimleri-1.jpg'}/>
  </ScrollView>
    </SafeAreaView>
  )
};
const styles = StyleSheet.create({
  lineStyle:{
        borderWidth: 0.5,
        borderColor:'black',
        margin:1,
        marginBottom:20
   }
 });

  
export default App;
