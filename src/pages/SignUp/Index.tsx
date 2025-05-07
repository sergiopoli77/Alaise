import {StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker'; // Impor dari library baru
import {useNavigation} from '@react-navigation/native'; // Import useNavigation
import {TextInput1} from '../../components/molecules/';
import {Gap} from '../../components/atoms/'; // Button1 tidak digunakan di sini
// Impor instance auth dan db dari konfigurasi Firebase Anda
import { auth, db } from '../../config/Firebase'; // Pastikan path ini benar
import { createUserWithEmailAndPassword, AuthError, UserCredential } from 'firebase/auth';
import { ref, set } from 'firebase/database';

const SignUp = () => {
  const navigation = useNavigation(); // Dapatkan objek navigasi
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedGender, setSelectedGender] = useState(''); // State untuk gender
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!username.trim() || !email.trim() || !password.trim() || !selectedGender) {
      setError('Please fill in all fields.');
      Alert.alert('Input Error', 'Please fill in all fields.');
      return;
    }
    if (password.length < 6) {
      setError('Password should be at least 6 characters long.');
      Alert.alert('Input Error', 'Password should be at least 6 characters long.');
      return;
    }
    setError(null);
    setLoading(true);

    try {
      const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Simpan data tambahan ke Realtime Database
      await set(ref(db, 'users/' + user.uid), {
        username: username.trim(),
        email: user.email,
        gender: selectedGender,
        uid: user.uid, // Simpan UID juga untuk referensi mudah
        createdAt: new Date().toISOString(), // Opsional: timestamp pembuatan akun
      });

      console.log('User signed up and data saved:', user.uid);
      Alert.alert(
        "Account Created!",
        `Welcome, ${username}! Your account has been successfully created.`,
        [{ text: "OK", onPress: () => navigation.navigate('SignIn') }] // Arahkan ke SignIn setelah OK
      );
      // Kosongkan form
      setUsername('');
      setEmail('');
      setPassword('');
      setSelectedGender('');

    } catch (err) {
      const authError = err as AuthError;
      const errorMessage = authError.message || 'Failed to create account. Please try again.';
      setError(errorMessage);
      Alert.alert("Sign Up Failed", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    // Ganti View dengan ScrollView agar konten bisa di-scroll jika tidak muat di layar kecil
    <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
     <View style={styles.pageContainer}>
      {/* Tambahkan Logo */}
      <Image
        source={require('../../assets/Logo.png')} // Pastikan jalur logo benar
        style={styles.logo}
        resizeMode="contain"
      />
      <Gap height={1} />
      <Text style={styles.header}>À L’AISE</Text>

      <View style={styles.contentContainer}>
        <Text style={styles.createAccountText}>Create Account</Text>
        {error && <Text style={styles.errorText}>{error}</Text>}
        <Gap height={10} />
        <TextInput1 
          label="Username" 
          placeholder="Enter your username" 
          value={username}
          onChangeText={setUsername}
        />
        <Gap height={15} />
        <TextInput1 
          label="Email" 
          placeholder="Enter your Email" 
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Gap height={15} />

        {/* Dropdown untuk Gender */}
        <Text style={styles.label}>Gender</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedGender}
            onValueChange={itemValue => setSelectedGender(itemValue)}
            style={styles.picker}
            dropdownIconColor="#000000" // Opsional: warna ikon dropdown
            >
            <Picker.Item label="Select your Gender" value="" style={styles.pickerItem} />
            <Picker.Item label="Male" value="male" style={styles.pickerItem} />
            <Picker.Item label="Female" value="female" style={styles.pickerItem} />
          </Picker>
        </View>

        <Gap height={20} />
        <TextInput1 
          label="Password" 
          placeholder="Enter your password" 
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Gap height={24} />

        <TouchableOpacity
          style={[styles.actionButton, loading && styles.actionButtonDisabled]}
          onPress={handleSignUp}
          activeOpacity={0.7}
          disabled={loading}>
          <Text style={styles.actionButtonText}>{loading ? 'Creating Account...' : 'Create Account'}</Text>
        </TouchableOpacity>
        <Gap height={12} />
        <TouchableOpacity onPress={() => !loading && navigation.navigate('SignIn')}>
          <Text style={styles.loginText}>Already have an account? <Text style={styles.loginLink}>Sign In</Text></Text>
        </TouchableOpacity>
        <Gap height={30} /> 
      </View>
    </View>
    </ScrollView>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Memastikan ScrollView mengisi ruang jika konten pendek
    justifyContent: 'center', // Pusatkan konten jika lebih pendek dari layar
  },
  pageContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    // Hapus width dan height tetap agar responsif
    // width: 412, 
    // height: 917,
    paddingBottom: 20, // Tambahkan padding bawah agar tidak terpotong
  },

  logo: {
    width: 79,
    height: 106,
    alignSelf: 'center',
    marginTop: 34,
  },
  header: {
    fontFamily: 'Poppins-Bold',
    fontSize: 36,
    color: '#C25733',
    textAlign: 'center',
    marginTop: 16,
  },

  createAccountText: {
    fontFamily: 'Poppins-medium',
    fontSize: 30,
    color: '#C25733',
    textAlign: 'left',
  },

  contentContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
  },

  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#000000', // Warna label
    marginBottom: 6, // Jarak antara label dan elemen di bawahnya
  },

  pickerContainer: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'center', // Untuk Android agar teks picker di tengah vertikal
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: 'transparent', // Untuk iOS agar background container terlihat
  },
  pickerItem: { // Style untuk item picker jika diperlukan
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#020202',
  },

  actionButton: {
    backgroundColor: '#BB5F09', // Warna tombol
    paddingVertical: 14, // Padding atas dan bawah
    borderRadius: 8, // Radius sudut tombol
    alignItems: 'center', // Posisikan teks di tengah
    shadowColor: '#000', // Warna bayangan
    shadowOffset: {width: 0, height: 2}, // Offset bayangan
    shadowOpacity: 0.25, // Opasitas bayangan
    shadowRadius: 3.84, // Radius bayangan
    elevation: 5, // Tinggi bayangan (untuk Android)
  },
  actionButtonDisabled: {
    backgroundColor: '#D3D3D3', // Warna tombol saat disabled
  },
  actionButtonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#FFFFFF', // Warna teks
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  loginText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginTop: 15,
    fontSize: 14,
  },
  loginLink: {
    fontFamily: 'Poppins-Bold',
    color: '#BB5F09',
    fontSize: 14,
  }
});
