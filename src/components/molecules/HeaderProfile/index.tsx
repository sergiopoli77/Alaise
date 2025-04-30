import { StyleSheet, View, Image } from 'react-native';
import React from 'react';

const HeaderProfile = ({ borderright = 0, borderleft = 0 }) => {
  return (
    <View style={[
      styles.container,
      {
        borderBottomRightRadius: borderright,
        borderBottomLeftRadius: borderleft,
      }
    ]}>
      <Image
        source={require('../../../assets/icon/logo.png')}
        style={styles.icon}
      />
    </View>
  );
};

export default HeaderProfile;

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: '#F9E7DD',
    position: 'relative',
    overflow: 'hidden', // INI penting agar radius bekerja
  },
  icon: {
    position: 'absolute',
    right: 25,
    top: 0,
    width: 120,
    height: 150,
    resizeMode: 'contain',
  },
});
