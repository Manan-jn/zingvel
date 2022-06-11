import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import Myheading from './src/components/Myheading';
import LoginScreen from './src/screens/LoginScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      {/* THIS IS FOR REGISTER SCREEN */}
      <Myheading
        text1="Create Account"
        text2="Enter your Name and Phone number to register"
      />
      <SignInScreen />

      {/* THIS IS THE COMPONENT FOR LOGIN SCREEN */}
      {/* <LoginScreen /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
