import React, { useState, useEffect } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput as RNTextInput,
  Alert
} from 'react-native';
import Gap from '../../components/atoms/Gap';
import { Header3, MenuButton4 } from '../../components/molecules';
import { Button2 } from '../../components/atoms';
import { auth, db } from '../../config/Firebase'; // Impor Firebase config
import { onAuthStateChanged, User, updatePassword as firebaseUpdatePassword, AuthError } from 'firebase/auth';
import { ref as databaseRef, get, DataSnapshot } from 'firebase/database';

const ProfileSaya = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
          if (snapshot.exists() && snapshot.val().username) {
            setUsername(snapshot.val().username);
          } else {
            setUsername('Pengguna'); // Fallback
          }
        } catch (dbError) {
          console.error("Error fetching username from DB:", dbError);
          setUsername('Pengguna'); // Fallback
        }
      } else {
        // Tidak ada pengguna, mungkin arahkan ke login atau tampilkan pesan
        setCurrentUser(null);
        setUsername('');
        setEmail('');
      }
    });
    return () => unsubscribe(); // Cleanup listener
  }, []);

  const handleUpdatePassword = async () => {
    if (!newPassword.trim()) {
      Alert.alert('Input Error', 'Please enter a new password.');
      return;
    }
    if (newPassword.length < 6) {
      Alert.alert('Input Error', 'Password should be at least 6 characters long.');
      return;
    }
    if (!currentUser) {
      Alert.alert('Error', 'No user is currently logged in.');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      await firebaseUpdatePassword(currentUser, newPassword);
      Alert.alert('Success', 'Password updated successfully!');
      setNewPassword(''); // Kosongkan field password
    } catch (updateError) {
      const authError = updateError as AuthError;
      console.error("Error updating password:", authError);
      let friendlyMessage = 'Failed to update password. Please try again.';
      if (authError.code === 'auth/requires-recent-login') {
        friendlyMessage = 'This operation is sensitive and requires recent authentication. Please log out and log back in to update your password.';
      } else if (authError.code === 'auth/weak-password') {
        friendlyMessage = 'The new password is too weak.';
      }
      setError(friendlyMessage);
      Alert.alert('Update Failed', friendlyMessage);
    } finally {
      setLoading(false);
    }
  };

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
              editable={!loading}
            />
          </View>
          {error && <Text style={styles.errorText}>{error}</Text>}
          <Gap height={24} />
          <Button2
            label={loading ? "Saving..." : "Simpan Perubahan"}
            textColor='white'
            color='#F87D3A'
            style={styles.saveButton}
            onPress={handleUpdatePassword}
            disabled={loading}
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
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
});
