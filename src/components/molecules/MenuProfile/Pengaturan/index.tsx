import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Pengaturan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>{'<'} Kembali</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Pengaturan</Text>
      {/* Konten desain menyusul */}
    </View>
  );
};

export default Pengaturan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    padding: 20,
  },
  backButton: {
    fontSize: 16,
    color: '#FF6200',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
