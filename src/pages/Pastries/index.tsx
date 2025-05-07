import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Impor useNavigation
import { MenuButton2, Header } from '../../components/molecules';
import MenuItem from '../../components/molecules/MenuItem';
import { chochoDouble, croissantIceCream, butterCroissant, milkToast} from '../../assets/images';

const Pastries = () => {
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
      <Text style={styles.title}>Pastries</Text>

      {/* Daftar Menu */}
      <ScrollView contentContainerStyle={styles.menuList}>
        <MenuItem
          image={chochoDouble}
          title="PAIN AU CHOCO DOUBLE"
          description=""
          price="Rp. 45.000"
          onAddToCart={() => handleAddItemToCheckout({ id: 'pas1', title: "PAIN AU CHOCO DOUBLE", price: "Rp. 45.000", image: chochoDouble, description: "" })}
        />
        <MenuItem
          image={croissantIceCream}
          title="CROISSANT ICE CREAM"
          description=""
          price="Rp. 40.000"
          onAddToCart={() => handleAddItemToCheckout({ id: 'pas2', title: "CROISSANT ICE CREAM", price: "Rp. 40.000", image: croissantIceCream, description: "" })}
        />
        <MenuItem
          image={butterCroissant}
          title="BUTTER CROISSANT"
          description=""
          price="Rp. 35.000"
          onAddToCart={() => handleAddItemToCheckout({ id: 'pas3', title: "BUTTER CROISSANT", price: "Rp. 35.000", image: butterCroissant, description: "" })}
        />
        <MenuItem
          image={milkToast}
          title="MILK TOAST"
          description="Vanilla ice cream with nutella"
          price="Rp. 38.000"
          onAddToCart={() => handleAddItemToCheckout({ id: 'pas4', title: "MILK TOAST", price: "Rp. 38.000", image: milkToast, description: "Vanilla ice cream with nutella" })}
        />
        
      </ScrollView>

      {/* Menu Button */}
      <View style={styles.bottomMenu}>
        <MenuButton2 />
      </View>
    </View>
  );
};

export default Pastries;

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