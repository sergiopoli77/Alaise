import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Header, TextInput} from '../../components/molecules/';
import {Button, Gap} from '../../components/atoms/';

const SignIn = () => {
  return (
    <View style={styles.pageContainer}>
      {/* Tambahkan Logo */}
      <Image
        source={require('../../assets/Logo.png')} // Pastikan jalur logo benar
        style={styles.logo}
        resizeMode="contain"
      />
      <Gap height={1} />
      <Text style={styles.header}>À L’AISE</Text>
      <Gap height={107} />

      <View style={styles.contentContainer}>
        <Gap height={26} />
        <TextInput label="Username" placeholder="Enter your username" />
        <Gap height={20} />
        <TextInput label="Password" placeholder="Enter your password" />
        <Gap height={24} />
        <View style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </View>
        <Gap height={12} />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: 412,
    height: 917,
  },

  logo: {
    width: 79, // Atur ukuran logo
    height: 106,
    alignSelf: 'center', // Posisikan logo di tengah
    marginTop: 34, // Tambahkan jarak dari atas
  },
  header: {
    fontFamily: 'Poppins-Bold',
    fontSize: 36,
    color: '#C25733', // Warna teks hitam
    textAlign: 'center', // Posisikan teks di tengah
    marginTop: 16,
  },

  contentContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
  },

  signInButton: {
    backgroundColor: '#BB5F09', // Warna tombol
    paddingVertical: 14, // Padding atas dan bawah
    borderRadius: 8, // Radius sudut tombol
    alignItems: 'center', // Posisikan teks di tengah
    shadowColor: '#000', // Warna bayangan
    shadowOffset: {width: 0, height: 2}, // Offset bayangan
    shadowOpacity: 0.25, // Opasitas bayangan
    shadowRadius: 3.84, // Radius bayangan
    elevation: 5, // Tinggi bayangan (untuk Android)
  },
  signInButtonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#FFFFFF', // Warna teks
    textAlign: 'center',
  },
});