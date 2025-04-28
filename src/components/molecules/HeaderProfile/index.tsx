import { StyleSheet, View } from 'react-native';
import React from 'react';

const HeaderProfile = () => {
  return (
    <View style={styles.container} />
  );
};

export default HeaderProfile;

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: '#F9E7DD',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});
