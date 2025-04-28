import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {GapRow} from '../../atoms';
import {Home, Pesanan, Menu, Profil} from '../../../assets/icon';

const MenuButton = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <View style={styles.iconContainer}>
          <Image source={Home} style={styles.icon} />
          <Text style={styles.label}>Beranda</Text>
        </View>
      </TouchableOpacity>
      <GapRow width={60} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Menu')}>
        <View style={styles.iconContainer}>
          <Image source={Menu} style={styles.icon} />
          <Text style={styles.label}>Menu</Text>
        </View>
      </TouchableOpacity>
      <GapRow width={60} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Pesanan')}>
        <View style={styles.iconContainer}>
          <Image source={Pesanan} style={styles.icon} />
          <Text style={styles.label}>Pesanan</Text>
        </View>
      </TouchableOpacity>
      <GapRow width={60} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Profil')}>
        <View style={styles.iconContainer}>
          <Image source={Profil} style={styles.icon} />
          <Text style={styles.label}>Profil</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderTopStartRadius: 15,
    borderTopEndRadius: 10,
    flexDirection: 'row',
    width: '100%',
    height: 100, // Increase height for more space
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0, // Ensures it stays at the bottom
    left: 0,
    right: 0,
    zIndex: 999, // Makes sure it's on top of other elements
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
    width: 40, // Icon size
    height: 40, // Icon size
    resizeMode: 'contain',
  },
  label: {
    marginTop: 4,
    fontSize: 12,
    color: '#000000',
  },
});

export default MenuButton;
