import { StyleSheet, View } from 'react-native'; // Hapus Text jika tidak digunakan lagi
import React, { useState, useEffect } from 'react';
import Gap from '../../components/atoms/Gap'; // Aktifkan impor Gap
import MenuProfile from '../../components/molecules/MenuProfile'; // Default import
import ProfileCard from '../../components/molecules/ProfileCards'; // Default import
import { MenuButton4 as Menu4, HeaderProfile } from '../../components/molecules'; // Aktifkan impor Menu4 dan HeaderProfile
import { auth, db } from '../../config/Firebase'; // Impor auth dan db
import { onAuthStateChanged, User } from 'firebase/auth';
import { ref as databaseRef, get, DataSnapshot } from 'firebase/database';

const Profile = () => {
  const [displayName, setDisplayName] = useState('Pelanggan'); // Default name
  const [profilePhotoUri, setProfilePhotoUri] = useState<string | null>(null); // State untuk URI foto profil

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user: User | null) => {
      console.log('Profile.tsx: Auth state changed. User:', user ? user.uid : 'null');
      if (user) {
        // Pengguna login, coba ambil username dari Realtime Database
        try {
          const userRef = databaseRef(db, `users/${user.uid}`);
          console.log('Profile.tsx: Fetching data from path:', `users/${user.uid}`);
          const snapshot: DataSnapshot = await get(userRef);
          if (snapshot.exists()) {
            const userData = snapshot.val();
            console.log('Profile.tsx: User data from DB:', userData);
            if (userData.username) {
              setDisplayName(userData.username);
              console.log('Profile.tsx: DisplayName set to:', userData.username);
            } else {
              setDisplayName('Pelanggan'); // Fallback jika username tidak ada
              console.log('Profile.tsx: DisplayName fallback to Pelanggan (no username in DB)');
            }
            if (userData.profileImageUrl) {
              setProfilePhotoUri(userData.profileImageUrl); // Simpan URI foto profil
              // Jangan log seluruh base64 karena bisa sangat panjang
              console.log('Profile.tsx: ProfilePhotoUri set with a value (first 50 chars):', userData.profileImageUrl ? userData.profileImageUrl.substring(0, 50) : 'null');
            } else {
              setProfilePhotoUri(null); // Tidak ada foto profil
              console.log('Profile.tsx: ProfilePhotoUri set to null (no profileImageUrl in DB)');
            }
          } else {
            console.log('Profile.tsx: No data found for user in DB at path:', `users/${user.uid}`);
            setDisplayName('Pelanggan'); // Fallback jika username tidak ada
            setProfilePhotoUri(null); // Tidak ada data pengguna
          }
        } catch (error) {
          console.error("Error fetching user data for Profile:", error);
          setDisplayName('Pelanggan'); // Fallback jika ada error
          setProfilePhotoUri(null); // Juga reset foto profil jika ada error
        }
      } else {
        console.log('Profile.tsx: No user logged in.');
        // Tidak ada pengguna yang login
        setDisplayName('Pelanggan');
        setProfilePhotoUri(null);
      }
    });

    // Cleanup listener saat komponen unmount
    return () => {
      console.log('Profile.tsx: useEffect cleanup, unsubscribing from auth state changes.');
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      <HeaderProfile />
      <ProfileCard name={displayName} photoUri={profilePhotoUri} />
      <Gap height={185} />
      <MenuProfile />
      <Gap height={24} />
      <Menu4 />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
});