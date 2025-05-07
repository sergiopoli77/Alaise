import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
// import { GapRow } from '../../components/atoms'; // GapRow tidak digunakan
import { MenuButton4, Header3 } from '../../components/molecules';
import {LogOut} from '../../assets/icon'; // Import icon di bagian atas

const Pengaturan = () => {
  const navigation = useNavigation(); // Dapatkan objek navigasi

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'SignIn' }], // Arahkan ke SignIn dan reset stack
    });
  };
  return (
    <View style={styles.container}>
      <Header3 title="Pengaturan" />
      
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Section Informasi */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Informasi</Text>
          <Text style={styles.versionText}>Version 1.0</Text>
        </View>

        <View style={styles.divider} />

        {/* Tombol Logout */}
        <TouchableOpacity
          style={styles.logoutButton}
          activeOpacity={0.7}
          onPress={handleLogout} >
          <Image
            source={LogOut} // Gunakan import icon
            style={styles.logoutIcon}
          />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>

      <MenuButton4 />
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
    paddingBottom: 80,
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 15,
    fontFamily: 'Poppins-medium',
    color: 'black',
    fontWeight: 'bold',
  },
  versionText: {
    fontSize: 14,
    fontFamily: 'poppins-medium',
    color: '#666666',
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginVertical: -13, // Jarak lebih rapat
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    marginTop: 8, // Jarak lebih rapat dari divider
  },
  logoutIcon: {
    width: 15,
    height: 15,
    marginRight: 16,
    tintColor: '#000000', // Warna hitam
  },
  logoutText: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: '#000000', // Warna hitam
  },
});

export default Pengaturan;