import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput as RNTextInput
} from 'react-native';
import Button from '../../components/atoms/Button';
import Header from '../../components/molecules/Header';
import Gap from '../../components/atoms/Gap';
import MenuButton from '../../components/molecules/MenuButton'; // Pastikan path ini benar
import HeaderProfile from '../../components/molecules/HeaderProfile';

const Pesanan = () => {
  return (
    <View style={styles.container}>
      <HeaderProfile />
      <Text style={styles.text}>Pesanan</Text>
      <Gap height={20} />
        <View style={styles.contentWrapper}>
        </View>
      <MenuButton />
    </View>
  );
};

export default Pesanan;

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
    flexGrow: 1,
    paddingBottom: 60, // Sesuaikan dengan tinggi MenuButton
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
    elevation: 10, // untuk Android
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