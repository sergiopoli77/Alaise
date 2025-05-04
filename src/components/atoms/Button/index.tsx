import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({label, color = '#02CF8E', textColor = '#020202', onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={[styles.label, {color: textColor}]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 30, // Mengambil dari Bravey
    paddingVertical: 14, // Mengambil dari master (lebih tebal)
    alignItems: 'center',
  },
  label: {
    textAlign: 'center', // Dari Bravey
    fontFamily: 'Poppins-Medium',
    fontSize: 16, // Lebih besar dari Bravey (lebih readable)
  },
});
