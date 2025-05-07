import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Profil as DefaultProfileIcon } from '../../../assets/icon'; // Impor placeholder default

interface ProfileCardProps {
  name: string;
  photoUri?: string | null; // Jadikan opsional dan bisa null
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, photoUri }) => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        {photoUri ? (
          <Image source={{ uri: photoUri }} style={styles.avatar} />
        ) : (
          // Jika Anda ingin menggunakan icon 'Profil' dari assets/icon/index.tsx sebagai default
          <Image source={DefaultProfileIcon} style={styles.avatar} />
          // Atau jika Anda tetap ingin menggunakan path require langsung:
          // <Image source={require('../../../assets/icon/profile.png')} style={styles.avatar} />
        )}
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
};


export default ProfileCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 0,
    padding: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    position: 'absolute', // tambah ini
    top: 140, // atur supaya berada tepat di bawah header
    left: 24,
    right: 24,
    zIndex: 10, // supaya dia di atas header
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E0E0E0', // Latar belakang jika gambar transparan atau sedang dimuat
    marginRight: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#020202',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
