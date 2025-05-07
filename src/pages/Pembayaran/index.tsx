import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import {MenuButton4, Header3} from '../../components/molecules';
import {QRIS, Mandiri, BCA, BNI, BRI} from '../../../assets/icon';

const Pembayaran = () => {
  const navigation = useNavigation(); // Dapatkan objek navigasi

  return (
    <View style={styles.container}>
      <Header3
        title="Pembayaran"
        onPress={() => navigation.navigate('Checkout')} // Tambahkan onPress untuk navigasi ke Checkout
      />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        
      </ScrollView>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 80, // Untuk bottom navigation
  },
  languageOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  languageText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#333333',
  },
  radioSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F87D3A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#F87D3A',

  },
  radioUnselected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
});

export default Pembayaran;