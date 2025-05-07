import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { MenuButton2, Header } from '../../components/molecules';
import MenuItem from '../../components/molecules/MenuItem';
import { chochoDouble, croissantIceCream, butterCroissant, milkToast} from '../../assets/images';

const Pastries = () => {
  const handleAddToCart = (item) => {
    // Di sini nantinya kita akan menambahkan logika untuk menyimpan item ke keranjang
    console.log('Added to cart:', item.title, item.price);
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
          onAddToCart={() => handleAddToCart({ title: "PAIN AU CHOCO DOUBLE", price: "Rp. 45.000" })}
        />
        <MenuItem
          image={croissantIceCream}
          title="CROISSANT ICE CREAM"
          description=""
          price="Rp. 40.000"
          onAddToCart={() => handleAddToCart({ title: "CROISSANT ICE CREAM", price: "Rp. 40.000" })}
        />
        <MenuItem
          image={butterCroissant}
          title="BUTTER CROISSANT"
          description=""
          price="Rp. 35.000"
          onAddToCart={() => handleAddToCart({ title: "BUTTER CROISSANT", price: "Rp. 35.000" })}
        />
        <MenuItem
          image={milkToast}
          title="MILK TOAST"
          description="Vanilla ice cream with nutella"
          price="Rp. 38.000"
          onAddToCart={() => handleAddToCart({ title: "MILK TOAST", price: "Rp. 38.000" })}
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