import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Impor useNavigation
import { MenuButton2, Header } from '../../components/molecules';
import MenuItem from '../../components/molecules/MenuItem';
import { mujairPepes, fishChips, tinutuan, creamyKatsu } from '../../assets/images';

const Food = () => {
  const navigation = useNavigation(); // Dapatkan objek navigasi

  const handleAddItemToCheckout = (itemDetails: { id: string, title: string; price: string; image: any, description?: string }) => {
    // Mengonversi harga dari string "Rp. XX.XXX" menjadi angka
    const priceNumber = parseInt(itemDetails.price.replace(/[^0-9]/g, ''), 10);

    const itemToAdd = {
      id: itemDetails.id, // Pastikan setiap item punya ID unik
      name: itemDetails.title,
      price: priceNumber,
      quantity: 1, // Default quantity saat pertama kali ditambah
      image: itemDetails.image,
      description: itemDetails.description || '', // Tambahkan deskripsi jika ada
      imageName: `${itemDetails.id}.png` // Nama file gambar bisa disesuaikan
    };
    navigation.navigate('Checkout', { newItem: itemToAdd });
  };
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
          onAddToCart={() => handleAddItemToCheckout({ id: 'foo1', title: "MUJAIR PEPES", price: "Rp. 70.000", image: mujairPepes, description: "Mujair fish cooked in banana leaf served with rice" })}
        />
        <MenuItem
          image={fishChips}
          title="FISH AND CHIPS"
          description="Dori dish, fries, served with salad"
          price="Rp. 65.000"
          onAddToCart={() => handleAddItemToCheckout({ id: 'foo2', title: "FISH AND CHIPS", price: "Rp. 65.000", image: fishChips, description: "Dori dish, fries, served with salad" })}
        />
        <MenuItem
          image={tinutuan}
          title="TINUTUAN"
          description="Comgee made from rice, pumkin and vegetables"
          price="Rp. 35.000"
          onAddToCart={() => handleAddItemToCheckout({ id: 'foo3', title: "TINUTUAN", price: "Rp. 35.000", image: tinutuan, description: "Comgee made from rice, pumkin and vegetables" })}
        />
        <MenuItem
          image={creamyKatsu}
          title="CREAMY KATSU"
          description="Chicken breast, carrot, yellow egg, creamy pasta"
          price="Rp. 85.000"
          onAddToCart={() => handleAddItemToCheckout({ id: 'foo4', title: "CREAMY KATSU", price: "Rp. 85.000", image: creamyKatsu, description: "Chicken breast, carrot, yellow egg, creamy pasta" })}
        />
      </ScrollView>

      {/* Menu Button */}
      <View style={styles.bottomMenu}>
        <MenuButton2 />
      </View>
    </View>
  );
};

export default Food;

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