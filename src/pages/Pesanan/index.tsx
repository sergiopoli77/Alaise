import React, { useState, useEffect } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  ImageSourcePropType, // Ditambahkan
} from 'react-native';
import Gap from '../../components/atoms/Gap';
import {MenuButton3, HeaderProfile } from '../../components/molecules'; // Header3 dan Button2 mungkin tidak diperlukan di sini
import { auth, db } from '../../config/Firebase'; // Impor Firebase
import { ref as databaseRef, onValue, off, query, orderByChild } from 'firebase/database'; // Impor fungsi database
import { useNavigation, useIsFocused } from '@react-navigation/native'; // Impor hook navigasi dan fokus

// Definisikan tipe untuk item dalam pesanan (mirip CartItem)
interface OrderItemDetail {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: ImageSourcePropType; // Sesuaikan dengan tipe CartItem
  description?: string;
  imageName?: string;
}

// Definisikan tipe untuk objek pesanan
interface Order {
  orderId: string;
  userId: string;
  items: OrderItemDetail[];
  totalAmount: number;
  orderDate: number; // Timestamp
  status: string;
  paymentMethod?: string; // Tambahkan jika Anda menyimpannya
}

const Pesanan = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused(); // Untuk memuat ulang data saat layar kembali fokus
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isFocused) {
      return; // Jangan fetch data jika layar tidak fokus
    }

    const currentUser = auth.currentUser;
    if (!currentUser) {
      setLoading(false);
      setError("Silakan login untuk melihat pesanan Anda.");
      // Pertimbangkan navigasi ke SignIn jika belum login
      // navigation.navigate('SignIn');
      return;
    }

    setLoading(true);
    const userId = currentUser.uid;
    const ordersQuery = query(databaseRef(db, `orders/${userId}`), orderByChild('orderDate'));

    const listener = onValue(ordersQuery, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedOrders: Order[] = Object.keys(data)
          .map(key => ({ ...data[key], orderId: key }))
          .sort((a, b) => b.orderDate - a.orderDate); // Urutkan dari terbaru ke terlama
        setOrders(loadedOrders);
        setError(null);
      } else {
        setOrders([]);
        setError("Anda belum memiliki pesanan."); // Atau "Tidak ada pesanan ditemukan."
      }
      setLoading(false);
    }, (err) => {
      console.error("Error fetching orders:", err);
      setError("Gagal memuat data pesanan. Silakan coba lagi nanti.");
      setLoading(false);
    });

    // Cleanup listener saat komponen unmount atau tidak fokus
    return () => off(ordersQuery, 'value', listener);
  }, [isFocused, navigation]); // Tambahkan navigation ke dependencies jika digunakan di dalam effect

  return (
    <View style={styles.container}>
      <HeaderProfile />
      <Text style={styles.text}>Pesanan Saya</Text>
      <Gap height={10} />
      {loading && <ActivityIndicator size="large" color="#DE8F5F" style={styles.loader} />}
      {!loading && error && !orders.length && <Text style={styles.messageText}>{error}</Text>}
      {!loading && !error && orders.length === 0 && (
        <Text style={styles.messageText}>Anda belum memiliki pesanan.</Text>
      )}
      {!loading && orders.length > 0 && (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.orderId}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.orderCard}
              onPress={() => navigation.navigate('DetailPesanan' as never, { orderId: item.orderId, orderDetails: item })}
            >
              <View style={styles.orderHeader}>
                <Text style={styles.orderIdText}>Order ID: #{item.orderId.substring(item.orderId.length - 6)}</Text>
                <Text style={styles.orderDateText}>
                  {new Date(item.orderDate).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                </Text>
              </View>
              <Text style={styles.orderStatusText}>Status: <Text style={styles.statusValue}>{item.status}</Text></Text>
              <Text style={styles.orderTotalText}>Total: Rp. {item.totalAmount.toLocaleString('id-ID')}</Text>
              <View style={styles.itemSummary}>
                <Text style={styles.itemSummaryText}>
                  {item.items.length} item: {item.items.map(i => i.name).slice(0, 2).join(', ')}{item.items.length > 2 ? '...' : ''}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.listContainer}
        />
      )}
      <MenuButton3 />
    </View>
  );
};

export default Pesanan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: '#333', // Warna lebih lembut
    marginLeft: 20,
    marginTop: 10, // Disesuaikan
  },
  loader: {
    marginTop: 50,
  },
  messageText: { // Untuk error atau pesan kosong
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#777',
    marginTop: 50,
    paddingHorizontal: 20,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 80, // Ruang untuk MenuButton3
  },
  orderCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  orderIdText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#DE8F5F',
  },
  orderDateText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#777',
  },
  orderStatusText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#555',
    marginBottom: 4,
  },
  statusValue: {
    fontFamily: 'Poppins-Medium',
    textTransform: 'capitalize', // Membuat huruf pertama status menjadi kapital
  },
  orderTotalText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  itemSummary: {
    marginTop: 5,
    paddingTop: 5,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  itemSummaryText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#666',
  },
});