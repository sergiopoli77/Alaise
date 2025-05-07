import { StyleSheet, View } from 'react-native'; // Hapus Text jika tidak digunakan lagi
import React, { useState, useEffect, useCallback } from 'react'; // Impor useCallback
import Gap from '../../components/atoms/Gap'; // Aktifkan impor Gap
import MenuProfile from '../../components/molecules/MenuProfile'; // Default import
import ProfileCard from '../../components/molecules/ProfileCards'; // Default import
import { MenuButton4 as Menu4, HeaderProfile } from '../../components/molecules'; // Aktifkan impor Menu4 dan HeaderProfile
import { auth, db } from '../../config/Firebase'; // Impor auth dan db
import { onAuthStateChanged, User } from 'firebase/auth';
import { ref as databaseRef, get, DataSnapshot } from 'firebase/database';
import { useFocusEffect } from '@react-navigation/native'; // Impor useFocusEffect

const Profile = () => {
  const [displayName, setDisplayName] = useState('Pelanggan'); // Default name
  const [profilePhotoUri, setProfilePhotoUri] = useState<string | null>(null); // State untuk URI foto profil

  const fetchUserData = useCallback(async (currentUser: User | null) => {
    console.log('Profile.tsx: Fetching user data. User:', currentUser ? currentUser.uid : 'null');
    if (currentUser) {
      try {
        const userRef = databaseRef(db, `users/${currentUser.uid}`);
        console.log('Profile.tsx: Fetching data from path:', `users/${currentUser.uid}`);
        const snapshot: DataSnapshot = await get(userRef);
        if (snapshot.exists()) {
          const userData = snapshot.val();
          console.log('Profile.tsx: User data from DB:', userData);
          if (userData && userData.username) {
            setDisplayName(userData.username);
            console.log('Profile.tsx: DisplayName set to:', userData.username);
          } else {
            setDisplayName('Pelanggan');
            console.log('Profile.tsx: DisplayName fallback to Pelanggan (no username in DB or userData is null)');
          }
          if (userData && userData.profileImageUrl) {
            setProfilePhotoUri(userData.profileImageUrl);
            console.log('Profile.tsx: ProfilePhotoUri set with a value (first 50 chars):', userData.profileImageUrl ? userData.profileImageUrl.substring(0, 50) : 'null');
          } else {
            setProfilePhotoUri(null);
            console.log('Profile.tsx: ProfilePhotoUri set to null (no profileImageUrl in DB or userData is null)');
          }
        } else {
          console.log('Profile.tsx: No data found for user in DB at path:', `users/${currentUser.uid}`);
          setDisplayName('Pelanggan');
          setProfilePhotoUri(null);
        }
      } catch (error) {
        console.error("Error fetching user data for Profile:", error);
        setDisplayName('Pelanggan');
        setProfilePhotoUri(null);
      }
    } else {
      console.log('Profile.tsx: No user logged in for fetchUserData.');
      setDisplayName('Pelanggan');
      setProfilePhotoUri(null);
    }
  }, []); // Dependencies: db

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user: User | null) => {
      // Panggil fetchUserData saat status auth berubah
      fetchUserData(user); 
    });

    // Cleanup listener saat komponen unmount
    return () => {
      console.log('Profile.tsx: useEffect cleanup, unsubscribing from auth state changes.');
      unsubscribe();
    };
  }, []);

  useFocusEffect(
    useCallback(() => {
      // Panggil fetchUserData saat layar mendapatkan fokus
      // Kita perlu mendapatkan user saat ini lagi karena onAuthStateChanged mungkin tidak langsung trigger
      const currentUser = auth.currentUser;
      fetchUserData(currentUser);
      return () => {}; // Fungsi cleanup opsional untuk useFocusEffect
    }, [fetchUserData]) // fetchUserData dimasukkan sebagai dependensi
  );

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