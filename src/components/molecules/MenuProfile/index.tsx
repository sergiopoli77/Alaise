import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const MenuProfile = () => {
  const navigation = useNavigation();
  // Data menu
  const menuItems = [
    { text: "Profile Saya", route: "ProfileSaya" },
    { text: "Pengaturan Bahasa", route: "PengaturanBahasa" },
    { text: "Tentang Kami", route: "TentangKami" },
    { text: "Pengaturan", route: "Pengaturan" }
  ];

  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <View key={item.text}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              if (item.route) {
                navigation.navigate(item.route);
              }
            }}>
            <Text style={styles.menuText}>{item.text}</Text>
            <Text style={styles.arrowIcon}>{'>'}</Text>
          </TouchableOpacity>
          {index !== menuItems.length - 1 && (
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
  menuText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Poppins-Medium',
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 20,
  },
  arrowIcon: {
    color: '#888',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    transform: [{ scaleY: 1.5 }],
  },
});