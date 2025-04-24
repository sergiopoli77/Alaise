import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Illustration from '../../assets/illustration.png';

const Start = () => {
  return (
    <View style={styles.container}>
      <Image source={Illustration} style={styles.illustration} />

      {/* Bagian Konten */}
      <View style={styles.content}>
        <View style={styles.pagination}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>
          Halo, Pelanggan{'\n'}
          Kami senang bertemu{'\n'}
          Anda! Di À L’AISE
        </Text>

        {/* Tombol Next */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: 412, // Perbesar ukuran lebar logo
    height: 917, // Perbesar ukuran tinggi logo
  },
  buttonContainer: {
    flexDirection: 'row', // Membuat tombol sejajar secara horizontal
    justifyContent: 'space-between', // Memberikan jarak antara tombol
    marginTop: 20, // Jarak dari elemen sebelumnya
    width: '60%', // Lebar container tombol
  },
  illustration: {
    width: '100%',
    height: '55%',
    resizeMode: 'cover',
    borderBottomRightRadius: 150,
  },
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Tetap putih untuk konten
    marginTop: -30, // Tetap gunakan margin untuk menutupi ilustrasi
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    color: '#C25733',
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 24,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 20,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#C4C4C4',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#C25733',
  },
  loginButton: {
    backgroundColor: '#C35834',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  signupButton: {
    backgroundColor: '#C35834',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontFamily: 'Poppins-bold',
    fontSize: 15,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
