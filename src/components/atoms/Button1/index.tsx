import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button1 = ({label, color = '#C25733', textColor = '#FFFFFF', onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={[styles.label, {color: textColor}]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button1;

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
});