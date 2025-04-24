import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Illustration from '../../assets/illustration.png'; // Pastikan path ini benar

const Start = () => {
  return (
    <View style={styles.container}>
      {/* Bagian Ilustrasi */}
      <Image source={Illustration} style={styles.illustration} />
      

      {/* Bagian Konten */}
      <View style={styles.content}>
          {/* Indikator Halaman */}
          <View style={styles.pagination}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
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
  illustration: {
    width: '100%',
    height: '55%',
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: -30,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#C25733',
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 20,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#C4C4C4',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#C25733',
  },
  nextButton: {
    marginTop: 10,
  },
  nextText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#C25733',
  },
});