import React, { useState, useEffect } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput as RNTextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator
} from 'react-native';
import Gap from '../../components/atoms/Gap';
import { Header3, MenuButton4 } from '../../components/molecules';
import { Button2 } from '../../components/atoms';
import { auth, db } from '../../config/Firebase'; // Impor Firebase config, storage tidak lagi diperlukan
import { onAuthStateChanged, User, updatePassword as firebaseUpdatePassword, AuthError } from 'firebase/auth';
import { ref as databaseRef, get, DataSnapshot, update as updateDatabase } from 'firebase/database';
import { launchImageLibrary, ImagePickerResponse, Asset } from 'react-native-image-picker';

const ProfileSaya = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isSavingChanges, setIsSavingChanges] = useState(false); // Mengganti 'loading' dan 'isSavingPhoto'
  const [error, setError] = useState<string | null>(null);
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);
  const [pendingPhotoUri, setPendingPhotoUri] = useState<string | null>(null); // Foto baru yang dipilih, belum disimpan
  // isSavingPhoto tidak lagi diperlukan secara terpisah jika digabung ke isSavingChanges

  // Efek untuk mengambil data pengguna saat komponen dimuat
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        setEmail(user.email || ''); // Ambil email langsung dari auth user

        // Ambil username dari Realtime Database
        try {
          const userDbRef = databaseRef(db, `users/${user.uid}`);
          const snapshot: DataSnapshot = await get(userDbRef);
          if (snapshot.exists()) {
            const userData = snapshot.val();
            if (userData.username) {
              setUsername(userData.username);
            } else {
              setUsername('Pengguna'); // Fallback untuk username
            }
            if (userData.profileImageUrl) {
              setProfileImageUrl(userData.profileImageUrl);
            } else {
              setProfileImageUrl(null); // Eksplisit null jika tidak ada URL gambar profil
            }
          } else {
            // Node pengguna tidak ada di DB
            setUsername('Pengguna');
            setProfileImageUrl(null);
          }
        } catch (dbError) {
          console.error("Error fetching username from DB:", dbError);
          setUsername('Pengguna'); // Fallback
          setProfileImageUrl(null); // Fallback untuk URL gambar profil jika terjadi error
        }
      } else {
        // Tidak ada pengguna, mungkin arahkan ke login atau tampilkan pesan
        setCurrentUser(null);
        setUsername('');
        setEmail('');
        setProfileImageUrl(null);
      }
    });
    return () => unsubscribe(); // Cleanup listener
  }, []);

  const handleChoosePhoto = () => {
    if (isSavingChanges) return; // Jangan lakukan apa-apa jika sedang proses simpan

    launchImageLibrary(
      { 
        mediaType: 'photo', 
        quality: 0.3, // Kurangi kualitas untuk base64 agar tidak terlalu besar
        maxWidth: 500, // Batasi ukuran gambar
        maxHeight: 500,
        includeBase64: true // Minta data base64
      }, 
      async (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
        Alert.alert('Error', 'Could not select image: ' + response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const selectedAsset: Asset = response.assets[0];
        if (selectedAsset.base64 && selectedAsset.type && currentUser) {
          const base64DataUri = `data:${selectedAsset.type};base64,${selectedAsset.base64}`;
          setPendingPhotoUri(base64DataUri); // Simpan ke state sementara untuk preview
        }
      }
    }
    );
  };

  const handleSaveChanges = async () => {
    if (!currentUser) {
      Alert.alert('Error', 'No user is currently logged in.');
      return;
    }

    // Cek apakah ada perubahan yang akan disimpan
    if (!newPassword.trim() && !pendingPhotoUri) {
      Alert.alert('Info', 'No changes to save.');
      return;
    }

    setIsSavingChanges(true);
    setError(null);
    let passwordUpdateSuccess = true;
    let photoUpdateSuccess = true;

    // 1. Update Password jika ada
    if (newPassword.trim()) {
      if (newPassword.length < 6) {
        Alert.alert('Input Error', 'Password should be at least 6 characters long.');
        setIsSavingChanges(false);
        return;
      }
      try {
        await firebaseUpdatePassword(currentUser, newPassword);
        setNewPassword(''); // Kosongkan field password setelah berhasil
      } catch (updateError) {
        passwordUpdateSuccess = false;
        const authError = updateError as AuthError;
        console.error("Error updating password:", authError);
        let friendlyMessage = 'Failed to update password. Please try again.';
        if (authError.code === 'auth/requires-recent-login') {
          friendlyMessage = 'Password update requires recent login. Please log out and log back in.';
        } else if (authError.code === 'auth/weak-password') {
          friendlyMessage = 'The new password is too weak.';
        }
        setError(friendlyMessage); // Set error untuk ditampilkan di UI
        Alert.alert('Password Update Failed', friendlyMessage);
      }
    }

    // 2. Update Foto Profil jika ada foto baru yang dipilih
    if (pendingPhotoUri) {
      try {
        const userDbRef = databaseRef(db, `users/${currentUser.uid}`);
        await updateDatabase(userDbRef, { profileImageUrl: pendingPhotoUri });
        setProfileImageUrl(pendingPhotoUri); // Update foto yang ditampilkan dengan yang baru disimpan
        setPendingPhotoUri(null); // Kosongkan foto yang tertunda
      } catch (e: any) {
        photoUpdateSuccess = false;
        console.error("Error saving photo to DB:", e);
        // Tambahkan setError jika ingin menampilkan error foto di UI juga
        Alert.alert('Photo Update Failed', 'Could not save new profile photo: ' + e.message);
      }
    }

    setIsSavingChanges(false);

    if (passwordUpdateSuccess && photoUpdateSuccess) {
      if (newPassword.trim() || pendingPhotoUri) { // Hanya tampilkan jika ada perubahan yang diproses
        Alert.alert('Success', 'Changes saved successfully!');
      }
    }
  };

  // Tentukan URI gambar yang akan ditampilkan: prioritaskan pending, lalu yang tersimpan, lalu null
  const displayImageUri = pendingPhotoUri || profileImageUrl;

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingWrapper}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled" // Agar keyboard bisa ditutup dengan tap di luar input
        showsVerticalScrollIndicator={false} // Opsional: sembunyikan scrollbar vertikal
      >
        <Header3 title="Profil Saya" />
        <Gap height={24} />
        <View style={styles.contentWrapper}>
          <View style={styles.profileContainer}>
            <TouchableOpacity 
              style={styles.avatarContainer} 
              activeOpacity={0.7}
              onPress={handleChoosePhoto}
              disabled={isSavingChanges || !currentUser} // Nonaktifkan jika sedang menyimpan atau tidak ada user
            >
              {isSavingChanges && pendingPhotoUri ? ( // Tampilkan loading di avatar hanya jika foto sedang diproses
                <ActivityIndicator size="large" color="#F87D3A" style={styles.avatarImage} />
              ) : displayImageUri ? ( // Gunakan displayImageUri di sini
                <Image key={displayImageUri} source={{ uri: displayImageUri }} style={styles.avatarImage} />
              ) : (
                <View style={styles.avatarPlaceholder}>
                  <Text style={styles.addPhotoLabel}>Add Photo</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
          <Gap height={26} />
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username</Text>
            <RNTextInput
              style={styles.input}
              value={username}
              editable={false} // Username biasanya tidak diubah dari sini
            />
          </View>
          <Gap height={16} />
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <RNTextInput
              style={styles.input}
              value={email}
              editable={false} // Email biasanya tidak diubah dari sini
            />
          </View>
          <Gap height={16} />
          <View style={styles.inputContainer}>
            <Text style={styles.label}>New Password</Text>
            <RNTextInput
              style={styles.input}
              placeholder="Enter new password"
              secureTextEntry
              value={newPassword}
              onChangeText={setNewPassword}
              editable={!isSavingChanges}
            />
          </View>
          {error && <Text style={styles.errorText}>{error}</Text>}
          <Gap height={24} />
          <Button2
            label={isSavingChanges ? "Saving..." : "Simpan Perubahan"}
            textColor='white'
            color='#F87D3A'
            style={styles.saveButton}
            onPress={handleSaveChanges}
            disabled={isSavingChanges}
          />
        </View>
      </ScrollView>
      <MenuButton4 />
    </KeyboardAvoidingView>
  );
};

export default ProfileSaya;

const styles = StyleSheet.create({
  container: {
    // Style ini mungkin tidak lagi menjadi container utama,
    // karena KeyboardAvoidingView mengambil alih.
    // Namun, kita bisa memindahkannya ke keyboardAvoidingWrapper.
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 60, // Sesuaikan dengan tinggi MenuButton
  },
  keyboardAvoidingWrapper: { // Style untuk KeyboardAvoidingView
    flex: 1,
    backgroundColor: '#F6F6F6', // Sama seperti container asli
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
  avatarImage: { // Style untuk gambar avatar yang sudah diupload
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#E0E0E0', // Warna latar belakang sementara gambar dimuat
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
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
});
