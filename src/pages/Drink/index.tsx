import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { MenuButton2, Header } from '../../components/molecules';
import MenuItem from '../../components/molecules/MenuItem';
import { espressoAvocado, caramelMacchiato, chocolateBanana} from '../../assets/images';

const Drink = () => {
  return (
    <View style={styles.container}>
      {/* Bagian atas dengan ikon */}
      <Header />

      {/* Title */}
      <Text style={styles.title}>Drink</Text>

      {/* Daftar Menu */}
      <ScrollView contentContainerStyle={styles.menuList}>
        <MenuItem
          image={espressoAvocado}
          title="ESPRESSO AVOCADO"
          description="A creamy blend of avocado juice, vanilla ice cream, and a shot of espresso."
          price="Rp. 58.000"
        />
        <MenuItem
          image={caramelMacchiato}
          title="CARAMEL MACCHIATO"
          description="Rich espresso layered with steamed milk and topped with caramel drizzle."
          price="Rp. 48.000"
        />
       
      </ScrollView>

      {/* Menu Button */}
      <View style={styles.bottomMenu}>
        <MenuButton2 />
      </View>
    </View>
  );
};

export default Drink;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#DE8F5F',
    textAlign: 'left', 
    marginVertical: 20,
    marginLeft: 20, 
    fontFamily: 'Poppins-Bold',
  },
  menuList: {
    paddingHorizontal: 20,
    paddingBottom: 100,
    paddingTop: 10
  },
  bottomMenu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },
});