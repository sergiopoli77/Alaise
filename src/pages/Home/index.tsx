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
import {Qr} from '../../assets/icon';

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
              <Image source={Qr} style={styles.qrIcon} />
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>Content 2 Fitur</Text>
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
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    marginLeft: 10,
    marginTop: 10,
  },
  qrIcon: {
    width: 54,
    height: 54,
    marginRight: 30,
  },
  cardText: {
    fontSize: 14,
    color: '#666666',
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