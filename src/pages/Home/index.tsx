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
      <ScrollView>
        <View style={styles.sliderContainer}>
          
        </View>

        {/* Content Section */}
        <View style={styles.content}>
          <View style={styles.card}>
            <Text>Content 1</Text>
          </View>
          <View style={styles.card}>
            <Text>Content 2</Text>
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
    backgroundColor: '#F6F6F6',
    flex: 1,
  },
  slidercontainer: {
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 16,
  },
  bestSellerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Poppins-Bold',
  },
  bestSellerImage: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  dishName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#C67C4E',
    fontFamily: 'Poppins-Regular',
    marginTop: 8,
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