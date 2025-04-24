import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper'; // Import Swiper
import Illustration from '../../assets/illustration.png';
import Illustration2 from '../../assets/illustration2.png';
import Illustration3 from '../../assets/illustration3.png';

const Start = () => {
  return (
    <View style={styles.container}>
      {/* Swiper untuk Gambar */}
      <Swiper
        style={styles.swiper}
        autoplay
        autoplayTimeout={3}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        showsPagination={true} // Nonaktifkan pagination bawaan Swiper
      >
        <Image source={Illustration} style={styles.illustration} />
        <Image source={Illustration2} style={styles.illustration} />
        <Image source={Illustration3} style={styles.illustration} />
      </Swiper>


      {/* Bagian Konten */}
      <View style={styles.content}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>
          Halo, Pelanggan{'\n'}
          Kami senang bertemu{'\n'}
          Anda! Di À L’AISE
        </Text>

        {/* Tombol LOGIN dan SIGN UP */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  swiper: {
    height: '100%', // Tinggi swiper
  },
  illustration: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -80, // Jarak ke atas agar mendekati gambar
    marginBottom: 10, // Jarak ke bawah
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#C25733',
  },
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    color: '#C25733',
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 24,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '60%',
  },
  loginButton: {
    backgroundColor: '#C35834',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  signupButton: {
    backgroundColor: '#C35834',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});