import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { MenuButton2, Header } from '../../components/molecules';
import MenuItem from '../../components/molecules/MenuItem';
import { mujairPepes, fishChips, chochoDouble, espressoAvocado } from '../../assets/images';

const Signature = () => {
  return (
    <View style={styles.container}>
      {/* Bagian atas dengan ikon */}
      <Header />

      {/* Daftar Menu */}
      <ScrollView contentContainerStyle={styles.menuList}>
        <MenuItem
          image={mujairPepes}
          title="MUJAIR PEPES"
          description="Mujair fish cooked in banana leaf served with rice"
          price="Rp. 70.000"
        />
        <MenuItem
          image={fishChips}
          title="FISH AND CHIPS"
          description="Dori dish, fries, served with salad"
          price="Rp. 65.000"
        />
        <MenuItem
          image={chochoDouble}
          title="PAIN AU CHOCO DOUBLE"
          description="Delicious chocolate pastry"
          price="Rp. 45.000"
        />

      </ScrollView>

      {/* Menu Button */}
      <View style={styles.bottomMenu}>
        <MenuButton2 />
      </View>
    </View>
  );
};

export default Signature;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  menuList: {
    paddingHorizontal: 20,
    paddingTop: 10,
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