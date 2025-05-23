import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Home, Pesanan, Menu, Profil} from '../../../assets/icon';

const MenuButton = ({}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <View style={styles.iconContainer}>
            <Image source={Home} style={styles.icon} />
            <Text style={[styles.label, styles.activeLabel]}>Beranda</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Signature')}>
          <View style={styles.iconContainer}>
            <Image source={Menu} style={styles.icon} />
            <Text style={[styles.label, styles.labelbaru]}>Menu</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Pesanan')}>
          <View style={styles.iconContainer}>
            <Image source={Pesanan} style={styles.icon} />
            <Text style={[styles.label, styles.labelbaru]}>Pesanan</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Profile')}>
          <View style={styles.iconContainer}>
            <Image source={Profil} style={styles.icon} />
            <Text style={[styles.label, styles.labelbaru]}>Profil</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderTopStartRadius: 15,
    borderTopEndRadius: 10,
    width: '100%',
    height: 100,
    position: 'absolute',
    bottom: 0, // Ensures it stays at the bottom
    left: 0,
    right: 0,
    zIndex: 999, // Makes sure it's on top of other elements
  },
  wrapper: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%',
    marginHorizontal: -30
  },
  button: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  label: {
    marginTop: 4,
    fontSize: 12,
    color: '#000000',
    fontFamily: 'Poppins-Regular',
  },
  activeLabel: {
    color: '#DE8F5F', // Warna coklat untuk teks "Beranda"
  },
  labelbaru: {
    color: '#AAAAAA', // Warna coklat untuk teks "Beranda"
  },
  
});

export default MenuButton;