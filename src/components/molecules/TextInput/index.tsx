import {StyleSheet, Text, TextInput as RNTextInput, View} from 'react-native';
import React from 'react';

const TextInput = ({label, placeholder, ...rest}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <RNTextInput style={styles.input} placeholder={placeholder} {...rest} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#000000',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    padding: 12,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#020202',
  },
});
