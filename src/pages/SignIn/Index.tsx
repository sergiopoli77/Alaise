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
      <Header title="" />
      <View style={styles.contentContainer}>
        <Gap height={26} />
        <TextInput label="Username" placeholder="Enter your username" />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Enter your password" />
        <Gap height={24} />
        <Button label="Sign In" />
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
  },
  logo: {
    width: 150, // Atur ukuran logo
    height: 150,
    alignSelf: 'center', // Posisikan logo di tengah
    marginTop: 40, // Tambahkan jarak dari atas
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
  },
});