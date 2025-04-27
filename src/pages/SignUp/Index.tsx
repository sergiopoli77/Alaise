import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker'; // Impor dari library baru
import {Header, TextInput} from '../../components/molecules/';
import {Button, Gap} from '../../components/atoms/';

const SignUp = () => {
  const [selectedGender, setSelectedGender] = useState(''); // State untuk gender

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

      <View style={styles.contentContainer}>
        <Text style={styles.createAccountText}>Create Account</Text>
        <Gap height={10} />
        <TextInput label="Username" placeholder="Enter your username" />
    
        <Gap height={12} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: 412,
    height: 917,
  },

  logo: {
    width: 79,
    height: 106,
    alignSelf: 'center',
    marginTop: 34,
  },
  header: {
    fontFamily: 'Poppins-Bold',
    fontSize: 36,
    color: '#C25733',
    textAlign: 'center',
    marginTop: 16,
  },

  createAccountText: {
    fontFamily: 'Poppins-medium',
    fontSize: 30,
    color: '#C25733',
    textAlign: 'left',
  },

  contentContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
  },

  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#000000', // Warna label
    marginBottom: 6, // Jarak antara label dan elemen di bawahnya
  },

  pickerContainer: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#020202',
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
