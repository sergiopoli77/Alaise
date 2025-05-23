import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Alert, ImageSourcePropType } from 'react-native';
import { Header3 } from '../../components/molecules';
import { Button2 } from '../../components/atoms';
import Gap from '../../components/atoms/Gap';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';

//DONE
// Definisikan tipe untuk item keranjang
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: ImageSourcePropType;
  description?: string; // Tambahkan deskripsi untuk item
  imageName?: string;
}

// Definisikan tipe untuk parameter route
type CheckoutRouteParams = {
  Checkout: {
    newItem?: CartItem;
  };
};

type CheckoutScreenRouteProp = RouteProp<CheckoutRouteParams, 'Checkout'>;

// Contoh data untuk item di keranjang
// Kosongkan initialMockCartItems agar dimulai dengan keranjang kosong,
// item akan ditambahkan dari parameter navigasi.
const initialMockCartItems: CartItem[] = [];

const Checkout = () => {
  const route = useRoute<CheckoutScreenRouteProp>();
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState<CartItem[]>(initialMockCartItems);
  // Log saat komponen render/re-render untuk melihat state cartItems awal
  console.log('Checkout RENDER: cartItems state:', JSON.stringify(cartItems, null, 2));

  useEffect(() => {
    console.log('Checkout useEffect: route.params:', JSON.stringify(route.params, null, 2));
    if (route.params?.newItem) {      
      const newItem = route.params.newItem;
      setCartItems(prevItems => {
        const existingItemIndex = prevItems.findIndex(item => item.id === newItem.id);
        if (existingItemIndex > -1) {
          const updatedItems = [...prevItems];
          updatedItems[existingItemIndex].quantity += newItem.quantity || 1;
          console.log('Checkout useEffect: Updated item, new cartItems:', JSON.stringify(updatedItems, null, 2));
          return updatedItems;
        } else {
          const newItems = [...prevItems, { ...newItem, quantity: newItem.quantity || 1 }];
          console.log('Checkout useEffect: Added new item, new cartItems:', JSON.stringify(newItems, null, 2));
          return newItems;
        }
      });
      // Setelah newItem diproses, bersihkan dari route.params
      // untuk mencegah pemrosesan ulang jika komponen re-render atau mendapat fokus kembali
      // dengan params yang sama.
      navigation.setParams({ newItem: undefined } as never); // 'as never' untuk type safety jika params lain tidak ada
    }
  }, [route.params?.newItem, navigation]); // Tambahkan navigation ke dependency array karena digunakan di setParams

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const total = calculateTotal();

  const handlePaymentSelect = () => {
    console.log('Checkout handlePaymentSelect: Tombol "Pilih Pembayaran" ditekan.');
    console.log('Checkout handlePaymentSelect: Mengirim totalAmount:', total);
    console.log('Checkout handlePaymentSelect: Mengirim cartItems:', JSON.stringify(cartItems, null, 2));
    navigation.navigate('Pembayaran', { totalAmount: total, cartItems: cartItems }); // Kirim total dan cartItems
  };

  return (
    <View style={styles.container}>
      <Header3 
        title="Checkout" 
        onPress={() => navigation.goBack()} 
      />
      
      <View style={styles.content}>
        <ScrollView contentContainerStyle={styles.orderList}>
          <Text style={styles.sectionTitle}>Pesanan</Text> 
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <View key={item.id} style={styles.cartItem}>
                <Image 
                  source={item.image} 
                  style={styles.itemImage} 
                  // defaultSource={require('../../assets/images/food-placeholder.jpg')} // Opsional: placeholder jika gambar utama gagal dimuat
                />
                <View style={styles.itemDetails}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemDescription}>{item.description}</Text>
                  <Text style={styles.itemPrice}>Rp. {item.price.toLocaleString('id-ID')}</Text>
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.emptyCartText}>Keranjang Anda kosong.</Text>
          )}
          {/* Pindahkan totalSection ke dalam ScrollView */}
          <View style={styles.totalSection}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalAmount}>Rp. {total.toLocaleString('id-ID')}</Text>
          </View>
        </ScrollView>
        
      </View>
      
      <View style={styles.footer}>
        <View style={styles.priceSection}>
          <Text style={styles.footerTotal}>Rp. {total.toLocaleString('id-ID')}</Text>
        </View>
        <TouchableOpacity 
          style={styles.paymentButton}
          onPress={handlePaymentSelect}
        >
          <Text style={styles.paymentButtonText}>Pilih Pembayaran</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  content: {
    flex: 1,
    paddingHorizontal: 0,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#333333',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  orderList: {
    paddingBottom: 16,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 10, // Memberi jarak antar item jika ada lebih dari satu
  },
  itemImage: {
    width: 180,
    height: 140,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#E0E0E0',
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#333333',
  },
  itemDescription: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#DE8F5F',
    marginTop: 2,
  },
  itemPrice: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: '#333333',
    marginTop: 4,
  },
  emptyCartText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#777777',
    marginTop: 20,
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: 10, // Jarak dari daftar item ke total
  },
  totalLabel: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#333333',
  },
  totalAmount: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#333333',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    
  },
  priceSection: {
    flex: 1,
    justifyContent: 'center',
  },
  footerTotal: {
    fontSize: 16,
    fontFamily: 'Poppins-regular',
    color: '#000000',
    marginLeft: 16,
  },
  paymentButton: {
    backgroundColor: '#BB5F09',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
});
