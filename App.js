import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import Home from './src/components/Home';

import Stories from './src/components/Stories';
import Timeline from './src/components/Timeline';

const App = () => {
  return (
    <SafeAreaView>
      {/* Header Part */}
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <Home />
      <Stories> </Stories>
      <View style={styles.lineStyle} />
      <Timeline />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  lineStyle: {
    borderWidth: 0.3,
    borderColor: 'gray',
    margin: 1,
    marginBottom: 2,
  },
});

export default App;
