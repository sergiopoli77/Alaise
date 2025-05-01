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
    height: 265, // Tinggi gambar
    backgroundColor: '#FFFFFF',
    resizeMode: 'cover',
    borderBottomLeftRadius: 27, // Border radius untuk sudut kiri bawah
    borderBottomRightRadius: 27, // Border radius untuk sudut kanan bawah
  },
  pagination: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignSelf: 'flex-end', // Pindahkan ke kanan
    
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 4,
    opacity: 0.5,
    marginRight: 20,
    marginBottom: 20
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