import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Logo from '../../assets/Logo.png'; // Pastikan path ini benar

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.title}></Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 412, // Perbesar ukuran lebar logo
    height: 917, // Perbesar ukuran tinggi logo
  },
  logo: {
    width: 169, // Perbesar ukuran lebar logo
    height: 226, // Perbesar ukuran tinggi logo
    resizeMode: 'contain', // Pastikan logo tetap proporsional
    marginBottom: 20, // Tambahkan jarak antara logo dan teks
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    color: '#000000', // Warna teks hitam
  },
});
