/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import CustomInput from '../../components/CustomInput';
import PhoneInput from '../../components/PhoneInput';
import SocialIcons from '../../components/SocialIcons';

import CustomButton from '../../components/CustomButton';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [phoneNum, setPhoneNum] = useState('');

  const onSignInPressed = () => {
    console.warn('Sign In');
  };

  return (
    <View style={styles.root}>
      <CustomInput
        placeholder="Full Name"
        value={username}
        setValue={setUsername}
      />
      <PhoneInput
        placeholder="Phone Number"
        value={phoneNum}
        setValue={setPhoneNum}
      />
      <View style={styles.checkb}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          style={styles.box}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <Text style={styles.checkbText}>I agree </Text>
        <Text style={styles.checkbLink}>Terms & Conditions</Text>
      </View>
      <CustomButton text="CREATE ACCOUNT" onPress={onSignInPressed} />
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <View>
          <Text style={styles.lineText}>OR</Text>
        </View>
        <View style={styles.line} />
      </View>
      <SocialIcons />
      <View style={styles.bottomText}>
        <Text style={[styles.toRegister]}>Already have an account? </Text>
        <Text style={styles.login}>Login</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 40,
  },
  line: {
    height: 1,
    backgroundColor: 'black',
    width: 121,
  },
  lineText: {
    textAlign: 'center',
    color: 'black',
    marginLeft: 21,
    marginRight: 21,
    width: 21,
  },
  box: {
    color: 'black',
    borderColor: 'black',
    borderWidth: 0.5,
    borderStyle: 'solid',
    tintColors: 'black',
  },
  checkb: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 35,
  },
  checkbText: {
    color: 'black',
    fontFamily: 'Roboto',
    fontWeight: '400',
    marginLeft: 10,
    fontSize: 12,
    lineHeight: 14.06,
    textAlign: 'center',
  },
  toRegister: {
    color: 'black',
    fontFamily: 'Roboto',
    fontWeight: '400',
    lineHeight: 16.41,
    fontSize: 14,
    marginTop: 54,
  },
  bottomText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbLink: {
    color: 'black',
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 14.06,
    textAlign: 'center',
  },
  login: {
    marginTop: 54,
    lineHeight: 16.41,
    color: 'black',
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '700',
  },
});

export default SignInScreen;
