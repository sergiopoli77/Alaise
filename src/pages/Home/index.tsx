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
        {/* Content Section */}
        <View style={styles.content}>
          <View style={[styles.card, styles.firstCard]}>
            <Text style={styles.cardTitle}>Content 1 Profile</Text>
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
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
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