import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import React from 'react';

const CustomButton = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{...styles.button, ...style}}
      onPress={onPress}>
      <Text style={styles.label}> {buttonLabel} </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    maxHeight: 80,
    maxWidth: 450,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.green,
    borderRadius: moderateScale(10),
    paddingVertical: verticalScale(8),
  },
  label: {
    color: Colors.white,
    fontSize: verticalScale(16),
  },
});
