import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../../Header';
import MenuButton from '../../MenuButton'; // Pastikan komponen ini sudah ada

const TentangKami = () => {
  return (
    <View style={styles.container}>
      <Header title="Tentang Kami" />
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.contentText}>
          Ā L’AISE adalah ruang di mana kehangatan keramahan bertemu dengan cita rasa terbaik. 
          Terinspirasi dari ketenangan dan keindahan danau, kami menghadirkan pengalaman bersantap 
          yang menenangkan namun berkelas, dengan sentuhan estetika pottery yang khas. Setiap hidangan 
          kami disiapkan dengan perhatian dan cinta, untuk menciptakan momen yang membuat Anda merasa 
          benar-benar 'at ease' – nyaman, rileks, dan bahagia.
        </Text>
      </ScrollView>

      <View style={styles.divider} />

      <MenuButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    paddingHorizontal: 32,
    paddingTop: 32,
    paddingBottom: 80, // Memberi ruang untuk bottom navigation
  },
  contentText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    lineHeight: 22, // Memberi jarak antar baris
    textAlign: 'justify', // Rata kiri-kanan
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginVertical: 16,
  },
});

export default TentangKami;