import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Alert, ImageSourcePropType } from 'react-native';
import {MenuButton4, Header3} from '../../components/molecules';
import { Button2 } from '../../components/atoms'; // Asumsi Anda punya komponen Button2
import Gap from '../../components/atoms/Gap'; // Asumsi Anda punya komponen Gap
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native'; // Untuk mendapatkan parameter dan navigasi

// Definisikan tipe untuk item keranjang
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: ImageSourcePropType; // Bisa URL string atau aset lokal
  imageName?: string; // Opsional, untuk menyimpan nama file jika diperlukan untuk DB
}

// Definisikan tipe untuk parameter route
type CheckoutRouteParams = {
  Checkout: {
    newItem?: CartItem; // newItem bersifat opsional
  };
};

type CheckoutScreenRouteProp = RouteProp<CheckoutRouteParams, 'Checkout'>;

// Mock data awal untuk item di keranjang (bisa dikosongkan jika Anda ingin memulai dari keranjang kosong)
const initialMockCartItems: CartItem[] = [
  // Contoh item awal, bisa dihapus atau dikosongkan:
  // { id: '1', name: 'Kopi Susu Gula Aren', price: 25000, quantity: 1, image: {uri: 'https://via.placeholder.com/50?text=Kopi'} },
  // { id: '2', name: 'Croissant Cokelat', price: 18000, quantity: 1, image: {uri: 'https://via.placeholder.com/50?text=Croissant'} },
];

const Checkout = () => {
  const route = useRoute<CheckoutScreenRouteProp>();
  const navigation = useNavigation(); // Untuk navigasi setelah order
  const [cartItems, setCartItems] = useState<CartItem[]>(initialMockCartItems);

  useEffect(() => {
    if (route.params?.newItem) {
      const newItem = route.params.newItem;
      setCartItems(prevItems => {
        const existingItemIndex = prevItems.findIndex(item => item.id === newItem.id);
        if (existingItemIndex > -1) {
          const updatedItems = [...prevItems];
          updatedItems[existingItemIndex].quantity += newItem.quantity || 1;
          return updatedItems;
        } else {
          return [...prevItems, { ...newItem, quantity: newItem.quantity || 1 }];
        }
      });
      // Membersihkan parameter setelah digunakan agar tidak ditambahkan lagi jika pengguna kembali
      // Ini opsional, tergantung bagaimana Anda ingin state keranjang dikelola
      // navigation.setParams({ newItem: undefined }); 
    }
  }, [route.params?.newItem]);


  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const deliveryFee = 10000; // Contoh ongkos kirim
  const subtotal = calculateSubtotal();
  const total = subtotal + deliveryFee;

  const handlePlaceOrder = () => {
    // Di sini Anda akan menambahkan logika untuk mengirim pesanan ke Firebase Realtime Database
    // Contoh data yang mungkin disimpan:
    const orderData = {
      userId: auth.currentUser?.uid, // Pastikan pengguna sudah login
      items: cartItems.map(item => ({ // Simpan detail item yang relevan
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        imageName: item.imageName, // Jika Anda menyimpan nama file untuk referensi
        // Jangan simpan ImageSourcePropType secara langsung jika itu objek kompleks
      })),
      subtotal: subtotal,
      deliveryFee: deliveryFee,
      totalAmount: total,
      shippingAddress: { // Ambil dari state atau input pengguna
        name: "Sergio Poli",
        phone: "(+62) 812-3456-7890",
        address: "Jl. Kembang Sepatu No. 123, Kel. Melati, Kec. Mawar, Kota Kembang, 12345"
      },
      paymentMethod: "Bayar di Tempat (Cash on Delivery)", // Ambil dari state atau input pengguna
      orderDate: new Date().toISOString(),
      status: "Pending" // Status awal pesanan
    };

    console.log("Order Data to be saved:", orderData);

    // Contoh penyimpanan ke Firebase (Anda perlu mengimplementasikan ini lebih lanjut)
    // const newOrderRef = push(ref(db, 'orders'));
    // set(newOrderRef, orderData)
    //   .then(() => {
    //     Alert.alert("Pesanan Dibuat!", "Terima kasih telah melakukan pemesanan.");
    //     setCartItems([]); // Kosongkan keranjang setelah berhasil
    //     navigation.navigate('Pesanan'); // Arahkan ke halaman daftar pesanan
    //   })
    //   .catch((error) => {
    //     console.error("Error placing order: ", error);
    //     Alert.alert("Gagal Membuat Pesanan", "Terjadi kesalahan, silakan coba lagi.");
    //   });

    // Untuk sekarang, kita hanya tampilkan alert
    Alert.alert("Pesanan Dibuat!", "Terima kasih telah melakukan pemesanan.\n(Logika penyimpanan ke Firebase belum diimplementasikan sepenuhnya)");
    // setCartItems([]); // Kosongkan keranjang setelah berhasil (jika diinginkan)
    // navigation.navigate('Pesanan'); // Arahkan ke halaman daftar pesanan (jika diinginkan)
  };

  return (
    <View style={styles.container}>
      <Header3 
        title="Checkout" 
        onPress={() => navigation.goBack()} // Arahkan kembali ke layar sebelumnya (Signature)
      />
      
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Detail Pesanan */}
        <Text style={styles.sectionTitle}>Detail Pesanan</Text>
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <View key={item.id} style={styles.cartItem}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>Rp {item.price.toLocaleString('id-ID')}</Text>
              </View>
              <Text style={styles.itemQuantity}>x {item.quantity}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.emptyCartText}>Keranjang Anda kosong.</Text>
        )}
        <Gap height={20} />

        {/* Alamat Pengiriman (Contoh) */}
        <Text style={styles.sectionTitle}>Alamat Pengiriman</Text>
        <View style={styles.addressCard}>
          <Text style={styles.addressText}>Sergio Poli</Text>
          <Text style={styles.addressText}>(+62) 812-3456-7890</Text>
          <Text style={styles.addressText}>Jl. Kembang Sepatu No. 123, Kel. Melati, Kec. Mawar, Kota Kembang, 12345</Text>
          <TouchableOpacity onPress={() => console.log('Ubah Alamat')}>
            <Text style={styles.changeAddressText}>Ubah Alamat</Text>
          </TouchableOpacity>
        </View>
        <Gap height={20} />

        {/* Metode Pembayaran (Contoh) */}
        <Text style={styles.sectionTitle}>Metode Pembayaran</Text>
        <View style={styles.paymentCard}>
          <Text style={styles.paymentText}>Bayar di Tempat (Cash on Delivery)</Text>
          <TouchableOpacity onPress={() => console.log('Ubah Metode Pembayaran')}>
            <Text style={styles.changePaymentText}>Ubah</Text>
          </TouchableOpacity>
        </View>
        <Gap height={20} />

        {/* Ringkasan Pembayaran */}
        <Text style={styles.sectionTitle}>Ringkasan Pembayaran</Text>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Subtotal</Text>
          <Text style={styles.summaryText}>Rp {subtotal.toLocaleString('id-ID')}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Ongkos Kirim</Text>
          <Text style={styles.summaryText}>Rp {deliveryFee.toLocaleString('id-ID')}</Text>
        </View>
        <View style={[styles.summaryRow, styles.totalRow]}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalText}>Rp {total.toLocaleString('id-ID')}</Text>
        </View>
        <Gap height={30} />

        {/* Tombol Pesan */}
        <Button2
          label="Pesan Sekarang"
          textColor="white"
          color="#F87D3A"
          onPress={handlePlaceOrder}
          disabled={cartItems.length === 0} // Nonaktifkan jika keranjang kosong
        />

      </ScrollView>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 100, // Beri ruang lebih untuk tombol dan menu
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#333333',
    marginBottom: 12,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#E0E0E0', // Placeholder background
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: '#333333',
  },
  itemPrice: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#777777',
  },
  itemQuantity: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: '#333333',
    marginLeft: 10,
  },
  emptyCartText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#777777',
    marginTop: 20,
    marginBottom: 20,
  },
  addressCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    elevation: 2,
  },
  addressText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#333333',
    marginBottom: 4,
  },
  changeAddressText: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: '#F87D3A',
    marginTop: 8,
    textAlign: 'right',
  },
  paymentCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  paymentText: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: '#333333',
  },
  changePaymentText: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: '#F87D3A',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: '#555555',
  },
  totalRow: {
    marginTop: 8,
    paddingTop: 8,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#EEEEEE',
  },
  totalText: {
    fontSize: 17,
    fontFamily: 'Poppins-Bold',
    color: '#333333',
  },
});
