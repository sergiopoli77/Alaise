import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity, // Import TouchableOpacity
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation
import {MenuButton} from '../../components/molecules';
import {Slider1, Slider2, Slider3, About} from '../../assets/images';
import {Qr, pickup, takeaway, foods, drinks, pastries} from '../../assets/icon';
import { auth, db } from '../../config/Firebase'; // Impor auth dan db
import { onAuthStateChanged, User } from 'firebase/auth';
import { ref as databaseRef, get, child, DataSnapshot } from 'firebase/database';

const {width} = Dimensions.get('window');

const Home = () => {
  const navigation = useNavigation(); // Dapatkan objek navigasi
  const [displayName, setDisplayName] = useState('Pelanggan'); // Default name

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user: User | null) => {
      if (user) {
        // Pengguna login, coba ambil username dari Realtime Database
        try {
          const userRef = databaseRef(db, `users/${user.uid}`);
          const snapshot: DataSnapshot = await get(userRef);
          if (snapshot.exists() && snapshot.val().username) {
            setDisplayName(snapshot.val().username);
          } else {
            setDisplayName('Pelanggan'); // Fallback jika username tidak ada
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setDisplayName('Pelanggan'); // Fallback jika ada error
        }
      } else {
        // Tidak ada pengguna yang login
        setDisplayName('Pelanggan');
      }
    });

    // Cleanup listener saat komponen unmount
    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      {/* Slider */}
      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          autoplayTimeout={4}
          showsPagination
          dotStyle={styles.dot}
          activeDotStyle={[styles.dot, styles.activeDot]}
        >
          <Image source={Slider1} style={styles.sliderImage} />
          <Image source={Slider2} style={styles.sliderImage} />
          <Image source={Slider3} style={styles.sliderImage} />
        </Swiper>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* QR Card */}
        <View style={[styles.card, styles.firstCard]}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Hi, {displayName}</Text>
            <View style={styles.qrContainer}>
              <Image source={Qr} style={styles.qrIcon} />
              <Text style={styles.qrText}>QR</Text>
            </View>
          </View>
        </View>

        {/* Scrollable Content */}
        <ScrollView contentContainerStyle={[styles.scrollContainer, { paddingBottom: 250 }]}>
          <View style={styles.secondcard}>
            <View style={styles.iconRow}>
              <TouchableOpacity onPress={() => navigation.navigate('Signature')} style={styles.touchableIconContainer}>
                <View style={styles.iconContainer}>
                  <Image source={pickup} style={styles.iconImage} />
                  <Text style={styles.iconTextRight}>Pickup</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Signature')} style={styles.touchableIconContainer}>
                <View style={styles.iconContainer}>
                  <Image source={takeaway} style={styles.iconImage} />
                  <Text style={styles.iconTextRight}>Takeaway</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.iconRow}>
              <TouchableOpacity onPress={() => navigation.navigate('Food')} style={styles.touchableIconContainerColumn}>
                <View style={styles.iconContainerColumn}>
                  <Image source={foods} style={styles.iconImage} />
                  <Text style={styles.iconText}>Foods</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Drink')} style={styles.touchableIconContainerColumn}>
                <View style={styles.iconContainerColumn}>
                  <Image source={drinks} style={styles.iconImage} />
                  <Text style={styles.iconText}>Drinks</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Pastries')} style={styles.touchableIconContainerColumn}>
                <View style={styles.iconContainerColumn}>
                  <Image source={pastries} style={styles.iconImage} />
                  <Text style={styles.iconText}>Pastries</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Image source={About} style={styles.Aboutimage} />
        </ScrollView>
      </View>

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
    zIndex: 0,
  },
  sliderImage: {
    width: '100%',
    height: 265,
    backgroundColor: '#F6F6F6',
    resizeMode: 'cover',
    borderBottomLeftRadius: 27,
    borderBottomRightRadius: 27,
  },
  dot: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
    marginBottom: 20,
  },
  activeDot: {
    backgroundColor: '#FFFFFF',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  content: {
    marginTop: 150,
    paddingHorizontal: 16,
    zIndex: 5,
  },
  scrollContainer: {
    paddingBottom: 200, // Tambahkan ruang kosong di bawah konten
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  qrContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qrIcon: {
    width: 54,
    height: 54,
    marginRight: 8,
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  touchableIconContainer: { // Style untuk TouchableOpacity yang membungkus iconContainer
    // Bisa tambahkan padding jika area sentuh dirasa kurang luas
  },
  touchableIconContainerColumn: { // Style untuk TouchableOpacity yang membungkus iconContainerColumn
    // Bisa tambahkan padding jika area sentuh dirasa kurang luas
  },
  iconContainerColumn: {
    alignItems: 'center',
    marginTop: 10,
  },
  iconImage: {
    width: 50,
    height: 50,
    marginRight: 8,
  },
  iconText: {
    fontSize: 14,
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    marginLeft: -7,
  },
  iconTextRight: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    marginLeft: 8,
  },
  Aboutimage: {
    marginTop: 20,
    marginBottom: 100,
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
    elevation: 5, // Untuk Android
    zIndex: 10, // Pastikan berada di layer paling depan
  },
});