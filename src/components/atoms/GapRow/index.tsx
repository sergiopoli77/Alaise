import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const GapRow = ({width}) => {
  return <View style={styles.gap(width)} />;
};

export default GapRow;

const styles = StyleSheet.create({
  gap: width => ({
    width: width,
  }),
});
