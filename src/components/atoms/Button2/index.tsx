import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button2 = ({label, color = '#02CF8E', textColor = '#020202', onPress}) => {
  return (
    <TouchableOpacity
      style={styles.button(color)}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text style={styles.label(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button2;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    borderRadius: 30,
    paddingVertical: 8,
  }),
  label: textColor => ({
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: textColor,
  }),
});