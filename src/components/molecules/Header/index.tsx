import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.topIcons}>
      <View style={styles.iconContainer}>
        <Text style={styles.iconText}>SIGNATURE</Text>
      </View>
      <View style={styles.iconContainer}>
        <Text style={styles.iconText}>FOOD</Text>
      </View>
      <View style={styles.iconContainer}>
        <Text style={styles.iconText}>DRINK</Text>
      </View>
      <View style={styles.iconContainer}>
        <Text style={styles.iconText}>PASTRIES</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000000',
  },
});

export default Header;