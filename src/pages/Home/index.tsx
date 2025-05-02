import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {MenuButton} from '../../components/molecules';
import {Slider1, Slider2, Slider3, About} from '../../assets/images';
import {Qr, pickup, takeaway, foods, drinks, pastries} from '../../assets/icon';

const {width} = Dimensions.get('window');

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.sliderContainer}>
          <Swiper
            autoplay
            autoplayTimeout={4} // Slider berpindah otomatis setiap 2 detik
            showsPagination
            dotStyle={styles.dot}
            activeDotStyle={[styles.dot, styles.activeDot]}
          >
            <Image source={Slider1} style={styles.sliderImage} />
            <Image source={Slider2} style={styles.sliderImage} />
            <Image source={Slider3} style={styles.sliderImage} />
          </Swiper>
        </View>

        <View style={styles.content}>
          <View style={[styles.card, styles.firstCard]}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Hi, Pelanggan</Text>
              <View style={styles.qrContainer}>
                <Image source={Qr} style={styles.qrIcon} />
                <Text style={styles.qrText}>QR</Text>
              </View>
            </View>
          </View>

          <View style={styles.secondcard}>
            <View style={styles.iconRow}>
              <View style={styles.iconContainer}>
                <Image source={pickup} style={styles.iconImage} />
                <Text style={styles.iconTextRight}>Pickup</Text>
              </View>
              <View style={styles.iconContainer}>
                <Image source={takeaway} style={styles.iconImage} />
                <Text style={styles.iconTextRight}>Takeaway</Text>
              </View>
            </View>
            <View style={styles.iconRow}>
              <View style={styles.iconContainerColumn}>
                <Image source={foods} style={styles.iconImage} />
                <Text style={styles.iconText}>Foods</Text>
              </View>
              <View style={styles.iconContainerColumn}>
                <Image source={drinks} style={styles.iconImage} />
                <Text style={styles.iconText}>Drinks</Text>
              </View>
              <View style={styles.iconContainerColumn}>
                <Image source={pastries} style={styles.iconImage} />
                <Text style={styles.iconText}>Pastries</Text>
              </View>
            </View>
          </View>
          <Image source={About} style={styles.Aboutimage} />
        </View>

        <View style={styles.bottomMenu}>
          <MenuButton />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, 
    backgroundColor: '#F6F6F6',
  },
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    
  },
  sliderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 0, // Changed to lower value
  },
  sliderImage: {
    width: '100%',
    height: 265,
    backgroundColor: '#F6F6F6',
    resizeMode: 'cover',
    borderBottomLeftRadius: 27,
    borderBottomRightRadius: 27,
  },
  pagination: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    flexDirection: 'row',
    
  },
  dot: {
    backgroundColor: 'transparent', // Buat lingkaran transparan
    borderWidth: 1, // Tambahkan border
    borderColor: '#FFFFFF', // Warna border putih
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
    marginRight: 20,
    marginBottom: 20,
  },
  activeDot: {
    backgroundColor: '#FFFFFF', // Lingkaran aktif berwarna putih
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  content: {
    marginTop: 150, // Adjusted to move content up
    paddingHorizontal: 16,
    paddingBottom: 80,
    zIndex: 5, // Increased zIndex
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 16,
    width: width - 32,
  },
  firstCard: {
    marginTop: 100,
    backgroundColor: '#FFFFFF',
    width: 388,
    height: 82,
  },
  cardHeader: {
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'space-between', // Space between text and icon
    alignItems: 'center', // Align items vertically
  },
  qrContainer: {
    flexDirection: 'row', // Align QR icon and text horizontally
    alignItems: 'center', // Center vertically
  },
  qrIcon: {
    width: 54,
    height: 54,
    marginRight: 8, // Add spacing between QR icon and text
  },
  qrText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
    fontFamily: 'Poppins-Bold',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    marginLeft: 10,
    marginTop: -2,
  },
  cardText: {
    fontSize: 14,
    color: '#666666',
  },
  secondcard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 16,
    width: width - 32,
    marginTop: 24,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  iconContainer: {
    flexDirection: 'row', // Atur ikon dan teks secara horizontal
    alignItems: 'center',
  },
  iconContainerColumn: {
    alignItems: 'center', // Untuk ikon dan teks vertikal
    marginTop: 10, // Spasi antara ikon dan teks
  },
  iconImage: {
    width: 50,
    height: 50,
    marginRight: 8, // Spasi antara ikon dan teks
  },
  iconText: {
    fontSize: 14,
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    marginLeft: -7, // Spasi antara ikon dan teks
  },
  iconTextRight: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    marginLeft: 8, // Spasi antara ikon dan teks
  },
  Aboutimage: {
    marginTop: 20,
    marginBottom: 100,
  },
  bottomMenu: {
    position: 'absolute', // Tetap di posisi tetap
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5, // Tambahkan bayangan untuk efek mengambang
  },
});