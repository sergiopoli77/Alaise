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
import { useNavigation } from '@react-navigation/native';
import { Header3 } from '../../components/molecules';
import {QRIS, Mandiri, BNI, BCA, BRI } from '../../assets/icon';

const Pembayaran = () => {
  const navigation = useNavigation();

  const handlePaymentSelect = (metode) => {
    Alert.alert('Pembayaran', `Metode dipilih: ${metode}`);
    // navigation.navigate('Pesanan'); // Tambahkan jika ingin pindah setelah pembayaran
  };

  return (
    <View style={styles.container}>
      <Header3
        title="Pembayaran"
        onPress={() => navigation.navigate('Checkout')}
      />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.totalText}>Rp. 70.000</Text>

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
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginBottom: 16,
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
