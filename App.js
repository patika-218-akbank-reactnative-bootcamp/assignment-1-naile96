

import React from 'react';
import {
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

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" barStyle="dark-content" animated={true} />
      <Home />
      <ProfileImage />
    </SafeAreaView>
  )
};


  
export default App;
