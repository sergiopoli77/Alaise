import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../../Header';
import MenuButton from '../../MenuButton';

const PengaturanBahasa = () => {
  return (
    <View style={styles.container}>
      <Header title="Pengaturan Bahasa" />
      
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Option Bahasa */}
        <TouchableOpacity style={styles.languageOption} activeOpacity={0.7}>
          <Text style={styles.languageText}>Bahasa Indonesia</Text>
          <View style={styles.radioSelected}>
            <View style={styles.radioInner} />
          </View>
        </TouchableOpacity>
      </ScrollView>

      <MenuButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 80, // Untuk bottom navigation
  },
  languageOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  languageText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#333333',
  },
  radioSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F87D3A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#F87D3A',

  },
  radioUnselected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
});

export default PengaturanBahasa;