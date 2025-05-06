import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HeaderSign = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default HeaderSign;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingVertical: 38,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
  },
});