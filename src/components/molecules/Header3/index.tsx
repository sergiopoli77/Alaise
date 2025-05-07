import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {IconBack} from '../../../assets/icon';

const Header3 = ({ title, onPress }) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    if (onPress) {
      onPress(); // Jalankan fungsi onPress dari parent jika ada
    } else {
      navigation.navigate('Profile'); // Default navigasi ke halaman Profile
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={handleBackPress} // Gunakan handler baru
        style={styles.backButton}
        activeOpacity={0.7} // Efek saat ditekan
      >
        <Image 
          source={IconBack} // Gunakan variabel yang diimpor
          style={styles.icon}
        />
      </TouchableOpacity>
      
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header3;

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