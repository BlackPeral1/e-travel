import React, {Component} from 'react';
import {Text} from 'reat-native';
import {
  SafeAreaView,
  ScrollView,
  Section,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View>
        <Section title="Chamath Jayasekara"></Section>
      </View>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({});
export default App;
