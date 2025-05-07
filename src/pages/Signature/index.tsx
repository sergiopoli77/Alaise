import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { MenuButton2, Header } from '../../components/molecules';
import MenuItem from '../../components/molecules/MenuItem';
import { mujairPepes, fishChips, chochoDouble, espressoAvocado } from '../../assets/images';
import { useNavigation } from '@react-navigation/native'; // Impor useNavigation

const Signature = () => {
  const navigation = useNavigation(); // Dapatkan objek navigasi

  const handleAddItemToCheckout = (itemDetails: { id: string, title: string; price: string; image: any }) => {
    // Mengonversi harga dari string "Rp. XX.XXX" menjadi angka
    const priceNumber = parseInt(itemDetails.price.replace(/[^0-9]/g, ''), 10);

    const itemToAdd = {
      id: itemDetails.id, // Pastikan setiap item punya ID unik
      name: itemDetails.title,
      price: priceNumber,
      quantity: 1, // Default quantity saat pertama kali ditambah
      image: itemDetails.image, // Ini adalah ImageSourcePropType untuk tampilan di Checkout
      description: itemDetails.description || '', // Tambahkan deskripsi jika ada
      imageName: `${itemDetails.id}.png` // Atau nama file asli jika Anda tahu, misal 'mujairPepes.png'
    };

    console.log('Navigating to Checkout with item:', itemToAdd);
    // Pastikan 'Checkout' adalah nama screen yang benar di navigator Anda
    // dan halaman Checkout sudah siap menerima parameter 'newItem'
    navigation.navigate('Checkout', { newItem: itemToAdd });
  };

  return (
    <View style={styles.container}>
      {/* Bagian atas dengan ikon */}
      <Header />

      {/* Title */}
      <Text style={styles.title}>SIGNATURE</Text>

      {/* Daftar Menu */}
      <ScrollView contentContainerStyle={styles.menuList}>
        <MenuItem
          image={mujairPepes}
          title="MUJAIR PEPES"
          description="Mujair fish cooked in banana leaf served with rice"
          price="Rp. 70.000"
          onAddToCart={() => handleAddItemToCheckout({ id: 'sig1', title: "MUJAIR PEPES", price: "Rp. 70.000", image: mujairPepes })}
        />
        <MenuItem
          image={fishChips}
          title="FISH AND CHIPS"
          description="Dori dish, fries, served with salad"
          price="Rp. 65.000"
          onAddToCart={() => handleAddItemToCheckout({ id: 'sig2', title: "FISH AND CHIPS", price: "Rp. 65.000", image: fishChips })}
        />
        <MenuItem
          image={chochoDouble}
          title="PAIN AU CHOCO DOUBLE"
          description="Delicious chocolate pastry"
          price="Rp. 45.000"
          onAddToCart={() => handleAddItemToCheckout({ id: 'sig3', title: "PAIN AU CHOCO DOUBLE", price: "Rp. 45.000", image: chochoDouble })}
        />
        <MenuItem
          image={espressoAvocado}
          title="ESPRESSO AVOCADO"
          description="Avocado juice, vanilla ice cream, poured with espresso"
          price="Rp. 58.000"
          onAddToCart={() => handleAddItemToCheckout({ id: 'sig4', title: "ESPRESSO AVOCADO", price: "Rp. 58.000", image: espressoAvocado })}
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