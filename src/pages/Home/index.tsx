import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {MenuButton} from '../../components/molecules';
import {Slider1} from '../../assets/images';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Slider Section */}
      <View>
        <Image source={Slider1} style={styles.sliderImage} />
        <View style={styles.sliderTextContainer}>
        </View>
        <View style={styles.pagination}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>

      <ScrollView>
        {/* Content Section */}
        <View style={styles.content}>
          <View style={styles.card}>
            <Text>Content 1 Profile</Text>
          </View>
          <View style={styles.card}>
            <Text>Content 2 Fitur</Text>
          </View>
          <View style={styles.card}>
            <Text>Content 3 about Alaise</Text>
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
    backgroundColor: '#FFFFFF',
  },
  sliderImage: {
    width: '100%', // Gambar memenuhi lebar layar
    height: 250, // Tinggi gambar
    resizeMode: 'cover',
  },
  sliderTextContainer: {
    position: 'absolute',
    top: 20, // Posisi teks di atas gambar
    alignItems: 'center',
    width: '100%', // Pastikan teks berada di tengah
  },
  sliderTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Tambahkan bayangan teks
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4,
  },
  sliderSubtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Tambahkan bayangan teks
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4,
  },
  pagination: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 4,
    opacity: 0.5,
  },
  activeDot: {
    opacity: 1,
  },
  content: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  bottomMenu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingBottom: 20,
  },
});