import { StyleSheet, View, Image } from 'react-native';
import React from 'react';

const HeaderProfile = () => {
  return (
    <View style={styles.container}>
      {/* Icon on the right */}
      <Image
        source={require('../../../assets/icon/logo.png')} // Replace with your icon path
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
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'relative', // So that the icon can be positioned absolutely
  },
  icon: {
    position: 'absolute',
    right: 25, // Adjust the distance from the right edge
    top: 0, // Adjust the vertical position if needed
    width: 120, // Adjust the width of the icon
    height: 150, // Adjust the height of the icon
  },
});
