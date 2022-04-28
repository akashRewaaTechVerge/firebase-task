import React from 'react';
import { Image, View, StyleSheet, Button } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logoStyle} source={require('../images/logo.png')} />
      <Button style={styles.loginStyle} color="orange" title="Login" />
      <Button style={styles.loginStyle} color="blue" title="Register" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    width: 300,
    height: 300,
    alignItems: 'center',
  },
  loginStyle: {
    paddingTop: 300,
  },
});
export default LoginScreen;
