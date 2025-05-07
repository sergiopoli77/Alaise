import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'; // Import TouchableOpacity
import React from 'react';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation
import {SignatureIcon, FoodIcon, DrinkIcon, PastriesIcon} from '../../../assets/icon';

const Header = () => {
  const navigation = useNavigation(); // Dapatkan objek navigasi
  return (
    <View style={styles.topIcons}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate('Signature')}>
        <View style={styles.innerIconContainer}>
          <Image source={SignatureIcon} style={styles.icon} />
          <Text style={styles.iconText}>SIGNATURE</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Food')}>
        <View style={styles.innerIconContainer}>
          <Image source={FoodIcon} style={styles.icon} />
          <Text style={styles.iconText}>FOOD</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Drink')}>
        <View style={styles.innerIconContainer}>
          <Image source={DrinkIcon} style={styles.icon} />
          <Text style={styles.iconText}>DRINK</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate('Pastries')}>
        <View style={styles.innerIconContainer}>
          <Image source={PastriesIcon} style={styles.icon} />
          <Text style={styles.iconText}>PASTRIES</Text>
        </View>
      </TouchableOpacity>
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
    flex: 1, // Agar setiap TouchableOpacity mengambil ruang yang sama
  },
  innerIconContainer: {
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