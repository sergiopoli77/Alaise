import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Impor useNavigation
import { MenuButton2, Header } from '../../components/molecules';
import MenuItem from '../../components/molecules/MenuItem';
import { espressoAvocado, caramelMacchiato, chocolateBanana} from '../../assets/images';

const Drink = () => {
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
      <Text style={styles.title}>Drink</Text>

      {/* Daftar Menu */}
      <ScrollView contentContainerStyle={styles.menuList}>
        <MenuItem
          image={espressoAvocado}
          title="ESPRESSO AVOCADO"
          description="A creamy blend of avocado juice, vanilla ice cream, and a shot of espresso."
          price="Rp. 58.000"
          onAddToCart={() => handleAddItemToCheckout({ id: 'dri1', title: "ESPRESSO AVOCADO", price: "Rp. 58.000", image: espressoAvocado, description: "A creamy blend of avocado juice, vanilla ice cream, and a shot of espresso." })}
        />
        <MenuItem
          image={caramelMacchiato}
          title="CARAMEL MACCHIATO"
          description="Rich espresso layered with steamed milk and topped with caramel drizzle."
          price="Rp. 48.000"
          onAddToCart={() => handleAddItemToCheckout({ id: 'dri2', title: "CARAMEL MACCHIATO", price: "Rp. 48.000", image: caramelMacchiato, description: "Rich espresso layered with steamed milk and topped with caramel drizzle." })}
        />
        <MenuItem
          image={chocolateBanana}
          title="CHOCOLATE BANANA"
          description="A delightful mix of chocolate and banana, perfect for a sweet treat."
          price="Rp. 35.000"
          onAddToCart={() => handleAddItemToCheckout({ id: 'dri3', title: "CHOCOLATE BANANA", price: "Rp. 35.000", image: chocolateBanana, description: "A delightful mix of chocolate and banana, perfect for a sweet treat." })}
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