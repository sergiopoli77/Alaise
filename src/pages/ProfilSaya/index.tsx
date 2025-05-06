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
import Gap from '../../components/atoms/Gap';
import { Header3, MenuButton4 } from '../../components/molecules';
import { Button2 } from '../../components/atoms';

const ProfileSaya = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header3 title="Profil Saya" />
        <Gap height={24} />
        <View style={styles.contentWrapper}>
          <View style={styles.profileContainer}>
            <TouchableOpacity style={styles.avatarContainer} activeOpacity={0.7}>
              <View style={styles.avatarPlaceholder}>
                <Text style={styles.addPhotoLabel}>Add Photo</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Gap height={26} />
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username</Text>
            <RNTextInput 
              style={styles.input}
              value="Sergio Poli"
              editable={false}
            />
          </View>
          <Gap height={16} />
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <RNTextInput 
              style={styles.input}
              value="sergiopoli@gmail.com"
              editable={false}
            />
          </View>
          <Gap height={16} />
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <RNTextInput 
              style={styles.input}
              placeholder="Isi password Anda"
              secureTextEntry
            />
          </View>
          <Gap height={24} />
          <Button2 
            label="Simpan" 
            textColor='white' 
            color='#F87D3A'
            style={styles.saveButton}
          />
        </View>
      </ScrollView>
      <MenuButton4 />
    </View>
  );
};

export default ProfileSaya;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 60, // Sesuaikan dengan tinggi MenuButton
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 26,
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
    color: '#000000',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000',
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
