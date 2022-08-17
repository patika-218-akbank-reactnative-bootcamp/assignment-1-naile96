import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

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
      <Stories> </Stories>
      <View style={styles.lineStyle} />
      <Timeline />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    margin: 1,
    marginBottom: 20,
  },
});

export default App;
