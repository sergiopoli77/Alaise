import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {MenuButton} from '../../components/molecules';
import {Slider1} from '../../assets/images';
import {Qr,pickup,takeaway,foods,drinks,pastries} from '../../assets/icon';



const {width} = Dimensions.get('window');

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Image source={Slider1} style={styles.sliderImage} />
        <View style={styles.pagination}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>

      <ScrollView>
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

              <Text style={styles.iconTextRight}>Pickup</Text>
            </View>
            
          </View>
          <View style={styles.iconRow}>
          
      

          </View>
        </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>Content 3 about Alaise</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Menu */}
      <View style={styles.bottomMenu}>
        <MenuButton />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
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
    flexDirection: 'row',
    alignSelf: 'flex-end',
    right: 16,
    zIndex: 1,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 4,
    opacity: 0.5,
    marginRight: 20,
    marginBottom: 20,
  },
  activeDot: {
    opacity: 1,
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
  bottomMenu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});