import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {SignatureIcon, FoodIcon, DrinkIcon, PastriesIcon} from '../../../assets/icon';

const Header = () => {
  return (
    <View style={styles.topIcons}>
      <View style={styles.iconContainer}>
        <Image source={SignatureIcon} style={styles.icon} />
        <Text style={styles.iconText}>SIGNATURE</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image source={FoodIcon} style={styles.icon} />
        <Text style={styles.iconText}>FOOD</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image source={DrinkIcon} style={styles.icon} />
        <Text style={styles.iconText}>DRINK</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image source={PastriesIcon} style={styles.icon} />
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
    elevation: 10,
  },
  iconContainer: {
    alignItems: 'center',
    height: 100,
  },
  icon: {
    width: 40, // Sesuaikan ukuran ikon
    height: 40,
    marginBottom: 8,
    marginTop: 20,
  },
  iconText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    marginTop: 8,
  },
});

export default Header;
