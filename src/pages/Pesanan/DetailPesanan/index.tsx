import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import Header from '../../../components/molecules/Header';
import Gap from '../../../components/atoms/Gap';
import MenuButton from '../../../components/molecules/MenuButton';

const DetailPesanan = () => {
  return (
    <View style={styles.container}>
      <Header title="Detail Pesanan" />
      <Gap height={60} />
      <Text style={styles.text}>Pesanan Saya</Text>
      <Gap height={20} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Kotak pertama */}
        <View style={styles.contentWrapper}></View>

        <Gap height={20} />

        {/* Kotak kedua */}
        <View style={styles.contentWrapper2}></View>
      </ScrollView>

      <MenuButton />
    </View>
  );
};

export default DetailPesanan;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: '#020202',
    marginLeft: 20,
    marginTop: 20,
  },
  scrollContainer: {
paddingBottom: 100,
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 200,
    marginHorizontal: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2, // untuk Android
  },  

  contentWrapper2: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 50,
    marginHorizontal: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2, // untuk Android
  },  

  profileContainer: {
    alignItems: 'center',
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatarPlaceholder: {
    backgroundColor: '#F0F0F0',
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhotoLabel: {
    fontFamily: 'Poppins-Light',
    fontSize: 12,
    color: '#8D92A3',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#020202',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 8,
    padding: 12,
    fontFamily: 'Poppins-medium',
    fontSize: 14,
  },
  saveButton: {
    borderRadius: 8,
    height: 45,
  },
});