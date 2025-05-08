import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
  ActivityIndicator, // Ditambahkan
  ImageSourcePropType, // Ditambahkan
} from 'react-native';
import { useNavigation, useRoute, RouteProp, CommonActions } from '@react-navigation/native'; // Import useRoute and RouteProp
import { Header3 } from '../../components/molecules';
import {QRIS, Mandiri, BNI, BCA, BRI } from '../../assets/icon';
import { auth, db } from '../../config/Firebase'; // Ditambahkan
import { ref as databaseRef, push, serverTimestamp, set } from 'firebase/database'; // Ditambahkan

// Definisikan tipe untuk item keranjang (konsisten dengan Checkout.tsx)
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: ImageSourcePropType;
  description?: string;
  imageName?: string;
}

// Definisikan tipe untuk parameter route

type PembayaranRouteParams = {
  Pembayaran: {
    totalAmount: number; // Diubah menjadi wajib
    cartItems: CartItem[]; // Ditambahkan cartItems
  };
};


type PembayaranScreenRouteProp = RouteProp<PembayaranRouteParams, 'Pembayaran'>;
const Pembayaran = () => {
  const navigation = useNavigation();

  console.log('Pembayaran RENDER: Komponen Pembayaran dirender.');
  const route = useRoute<PembayaranScreenRouteProp>();
  // Log route.params in more detail
  if (route.params) {
    console.log('Pembayaran RENDER: route.params DITERIMA:', JSON.stringify(route.params, null, 2));
    console.log('Pembayaran RENDER: route.params.cartItems ADA? :', route.params.hasOwnProperty('cartItems'));
    console.log('Pembayaran RENDER: Tipe route.params.cartItems:', typeof route.params.cartItems);
  } else {
    console.log('Pembayaran RENDER: route.params adalah undefined');
  }

  // Ambil totalAmount dan cartItems dari parameter route, default jika tidak ada
  const { totalAmount, cartItems } = route.params || { totalAmount: 0, cartItems: [] };

  console.log('Pembayaran RENDER: totalAmount setelah destrukturisasi:', totalAmount);
  console.log('Pembayaran RENDER: cartItems setelah destrukturisasi:', JSON.stringify(cartItems, null, 2));

  const [loading, setLoading] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);

  const handlePaymentMethodSelection = (metode: string) => {
    setSelectedPaymentMethod(metode);
    // Alert.alert('Pembayaran', `Metode dipilih: ${metode}`); // Bisa di-uncomment jika perlu untuk debugging
  };

  const handleConfirmAndPay = async () => {
    console.log('Pembayaran handleConfirmAndPay: Tombol "Bayar Sekarang" ditekan. cartItems saat ini:', JSON.stringify(cartItems, null, 2));
    if (!auth.currentUser) {
      Alert.alert("Error", "Anda harus login untuk membuat pesanan.", [
        { text: "OK", onPress: () => navigation.navigate('SignIn' as never) }
      ]);
      return;
    }

    if (!cartItems || cartItems.length === 0) {
      Alert.alert("Error", "Keranjang Anda kosong.", [
        { text: "OK", onPress: () => navigation.goBack() }
      ]);
      return;
    }

    // Opsional: Validasi apakah metode pembayaran sudah dipilih
    // if (!selectedPaymentMethod) {
    //   Alert.alert("Info", "Silakan pilih metode pembayaran terlebih dahulu.");
    //   return;
    // }

    setLoading(true);
    const userId = auth.currentUser.uid;
    const ordersRefPath = `orders/${userId}`;
    const newOrderRef = push(databaseRef(db, ordersRefPath));

    const orderData = {
      items: cartItems,
      totalAmount: totalAmount,
      orderDate: serverTimestamp(),
      status: 'pending', // Status awal
      orderId: newOrderRef.key,
      userId: userId,
      paymentMethod: selectedPaymentMethod || 'Belum Dipilih', // Simpan metode pembayaran
    };

    // Logika penyimpanan ke Firebase, dijalankan karena fungsi ini dipanggil oleh tombol "Bayar Sekarang"
    try {
      await set(newOrderRef, orderData);
      Alert.alert("Sukses", "Pesanan Anda telah berhasil dibuat!");
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: 'Home' as never }, { name: 'Pesanan' as never }],
        })
      );
    } catch (error) {
      console.error("Error saving order to Firebase:", error);
      Alert.alert("Error", "Gagal menyimpan pesanan. Silakan coba lagi.");
    } finally {
      setLoading(false);
      }
  };


  return (
    <View style={styles.container}>
      <Header3
        title="Pembayaran"
        onPress={() => navigation.goBack()} // Diubah menjadi goBack()
      />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.totalText}>Rp. {totalAmount.toLocaleString('id-ID')}</Text>

        <View style={styles.paymentMethodsContainer}>
          <Text style={styles.sectionTitle}>Metode Pembayaran</Text>

          <TouchableOpacity
            style={[styles.paymentItem, selectedPaymentMethod === 'QRIS' && styles.selectedPaymentItem]}
            onPress={() => handlePaymentMethodSelection('QRIS')}
          >
            <Image source={QRIS} style={styles.icon} />
            <Text style={styles.paymentText}>QRIS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.paymentItem, selectedPaymentMethod === 'Mandiri' && styles.selectedPaymentItem]}
            onPress={() => handlePaymentMethodSelection('Mandiri')}
          >
            <Image source={Mandiri} style={styles.icon} />
            <Text style={styles.paymentText}>Mandiri</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.paymentItem, selectedPaymentMethod === 'BCA' && styles.selectedPaymentItem]}
            onPress={() => handlePaymentMethodSelection('BCA')}
          >
            <Image source={BCA} style={styles.icon} />
            <Text style={styles.paymentText}>BCA</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.paymentItem, selectedPaymentMethod === 'BRI' && styles.selectedPaymentItem]}
            onPress={() => handlePaymentMethodSelection('BRI')}
          >
            <Image source={BRI} style={styles.icon} />
            <Text style={styles.paymentText}>BRI</Text>
          </TouchableOpacity>

          <TouchableOpacity
             style={[styles.paymentItem, selectedPaymentMethod === 'BNI' && styles.selectedPaymentItem]}
             onPress={() => handlePaymentMethodSelection('BNI')}
          >
            <Image source={BNI} style={styles.icon} />
            <Text style={styles.paymentText}>BNI</Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.paymentButton, loading && styles.paymentButtonDisabled]}
          onPress={handleConfirmAndPay} // Tidak perlu mengirim argumen jika fungsi tidak menggunakannya
          disabled={loading}
        >
          {loading ? <ActivityIndicator color="#FFFFFF" /> : <Text style={styles.paymentButtonText}>Bayar Sekarang</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 80,
  },
  totalText: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#000000',
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    marginBottom: 12,
    color: '#000000',
  },
  paymentMethodsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
  },
  paymentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10, // Sedikit padding untuk tampilan lebih baik
    paddingHorizontal: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EEE', // Border default
    marginBottom: 12,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 12,
  },
  paymentText: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#000000',
  },
  selectedPaymentItem: { // Style untuk item yang dipilih
    borderColor: '#BB5F09', // Warna border sesuai tombol
    backgroundColor: '#FFF5EE', // Warna latar belakang lembut
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  paymentButton: {
    flex: 1,
    backgroundColor: '#BB5F09',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
  },
});

export default Pembayaran;
