import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const MenuProfile = () => {
  // Data menu
  const menu = [
    "Profile Saya",
    "Pengaturan Bahasa", 
    "Tentang Kami",
    "Pengaturan"
  ];

  return (
    <View style={styles.container}>
      {menu.map((menu, index) => (
        <View key={menu}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.text}>{menu}</Text>
            <Icon name="chevron-forward" size={20} color="#888" />
          </TouchableOpacity>
          {index !== menu.length - 1 && (
            <View style={styles.divider} />
          )}
        </View>
      ))}
    </View>
  );
};

export default MenuProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginTop: 20,
    marginHorizontal: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Poppins-Medium',
  },
  divider: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 20,
  },
});