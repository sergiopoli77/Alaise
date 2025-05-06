import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { MenuButton2, Header } from '../../components/molecules';
import MenuItem from '../../components/molecules/MenuItem';
import { mujairPepes, fishChips, tinutuan, creamyKatsu } from '../../assets/images';

const Signature = () => {
  return (
    <View style={styles.container}>
      {/* Bagian atas dengan ikon */}
      <Header />

      {/* Title */}
      <Text style={styles.title}>Food</Text>

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
          image={tinutuan}
          title="TINUTUAN"
          description="Comgee made from rice, pumkin and vegetables"
          price="Rp. 35.000"
        />
        <MenuItem
          image={creamyKatsu}
          title="CREAMY KATSU"
          description="Chicken breast, carrot, yellow egg, creamy pasta"
          price="Rp. 85.000"
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#DE8F5F',
    textAlign: 'left', // Ubah dari 'center' ke 'left'
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