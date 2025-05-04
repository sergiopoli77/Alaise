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

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    
  },
  backButton: {
    padding: 8,
    marginRight: 16,
  },
  icon: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
    tintColor: '#000000', // Optional: ubah warna icon
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    marginRight: 40, // Kompensasi posisi tombol back
  },
});
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
