import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'; // Import useRoute and RouteProp
import { Header3 } from '../../components/molecules';
import {QRIS, Mandiri, BNI, BCA, BRI } from '../../assets/icon';

// Definisikan tipe untuk parameter route
type PembayaranRouteParams = { Pembayaran: { totalAmount?: number } };
type PembayaranScreenRouteProp = RouteProp<PembayaranRouteParams, 'Pembayaran'>;
const Pembayaran = () => {
  const navigation = useNavigation();

  const handlePaymentSelect = (metode) => {
    if (metode === 'Bayar Sekarang') {
      // Navigate to Pesanan screen when "Bayar Sekarang" is pressed
      navigation.navigate('Pesanan');
    } else {
      Alert.alert('Pembayaran', `Metode dipilih: ${metode}`);
    }
  };

  const route = useRoute<PembayaranScreenRouteProp>();
  // Ambil totalAmount dari parameter route, default ke 0 jika tidak ada
  const total = route.params?.totalAmount || 0;

  return (
    <View style={styles.container}>
      <Header3
        title="Pembayaran"
        onPress={() => navigation.navigate('Checkout')}
      />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.totalText}>Rp. {total.toLocaleString('id-ID')}</Text>

        <View style={styles.paymentMethodsContainer}>
          <Text style={styles.sectionTitle}>Metode Pembayaran</Text>

          <TouchableOpacity
            style={styles.paymentItem}
            onPress={() => handlePaymentSelect('QRIS')}
          >
            <Image source={QRIS} style={styles.icon} />
            <Text style={styles.paymentText}>QRIS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.paymentItem}
            onPress={() => handlePaymentSelect('Mandiri')}
          >
            <Image source={Mandiri} style={styles.icon} />
            <Text style={styles.paymentText}>Mandiri</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.paymentItem}
            onPress={() => handlePaymentSelect('BCA')}
          >
            <Image source={BCA} style={styles.icon} />
            <Text style={styles.paymentText}>BCA</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.paymentItem}
            onPress={() => handlePaymentSelect('BRI')}
          >
            <Image source={BRI} style={styles.icon} />
            <Text style={styles.paymentText}>BRI</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.paymentItem}
            onPress={() => handlePaymentSelect('BNI')}
          >
            <Image source={BNI} style={styles.icon} />
            <Text style={styles.paymentText}>BNI</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.paymentButton}
          onPress={() => handlePaymentSelect('Bayar Sekarang')}
        >
          <Text style={styles.paymentButtonText}>Bayar Sekarang</Text>
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
