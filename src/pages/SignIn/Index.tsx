import {StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation
import {TextInput1} from '../../components/molecules/';
import {Gap} from '../../components/atoms/';
import { auth } from '../../config/Firebase'; // Impor auth dari Firebase config
import { signInWithEmailAndPassword, AuthError, UserCredential } from 'firebase/auth';

const SignIn = () => {
  const navigation = useNavigation(); // Dapatkan objek navigasi
  const [email, setEmail] = useState(''); // State untuk email
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password.');
      Alert.alert('Input Error', 'Please enter both email and password.');
      return;
    }
    setError(null);
    setLoading(true);

    try {
      // Langsung gunakan email dan password untuk sign in
      const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email.trim(), password);
      
      console.log('User signed in:', userCredential.user.uid);
      navigation.replace('Home'); // Gunakan replace agar tidak bisa kembali ke SignIn

    } catch (err) {
      const authError = err as AuthError;
      console.error('Error signing in:', authError);
      let friendlyMessage = 'Failed to sign in. Please check your credentials.';
      if (authError.code === 'auth/user-not-found' || 
          authError.code === 'auth/wrong-password' || 
          authError.code === 'auth/invalid-credential') {
        friendlyMessage = 'Invalid email or password. Please try again';
      } else if (authError.code === 'auth/invalid-email') {
        friendlyMessage = 'The email address is not valid';
      } else if (authError.code === 'auth/user-disabled') {
        friendlyMessage = 'This user account has been disabled';
      }
      // Tambahkan penanganan error lain jika perlu
      setError(friendlyMessage);
      Alert.alert("Sign In Failed", friendlyMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    // Ganti View dengan ScrollView agar konten bisa di-scroll jika tidak muat di layar kecil
    <ScrollView 
      contentContainerStyle={styles.scrollContainer} 
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
     <View style={styles.pageContainer}>
      {/* Tambahkan Logo */}
      <Image
        source={require('../../assets/Logo.png')} // Pastikan jalur logo benar
        style={styles.logo}
        resizeMode="contain"
      />
      <Gap height={1} />
      <Text style={styles.header}>À L’AISE</Text>
      {/* <Gap height={107} /> Dihapus agar lebih dinamis */}

      <View style={styles.contentContainer}>
        <Text style={styles.signInPageTitle}>Sign In</Text>
        {error && <Text style={styles.errorText}>{error}</Text>}
        {/* <Gap height={26} /> Dihapus agar lebih dinamis */}
        <Gap height={20} /> 
        <TextInput1 
          label="Email" // Kembali menggunakan Email
          placeholder="Enter your email" 
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
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
          onPress={handleSignIn} // Panggil handleSignIn
          activeOpacity={0.7}
          disabled={loading}
        >
          <Text style={styles.actionButtonText}>{loading ? 'Signing In...' : 'Sign In'}</Text>
        </TouchableOpacity>
        <Gap height={12} />
        <TouchableOpacity onPress={() => !loading && navigation.navigate('SignUp')}>
          <Text style={styles.linkText}>Don't have an account? <Text style={styles.linkHighlight}>Sign Up</Text></Text>
        </TouchableOpacity>
        <Gap height={30} />
      </View>
    </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    // Hapus width dan height tetap agar responsif
    // width: 412,
    // height: 917,
    paddingBottom: 20, // Tambahkan padding bawah agar tidak terpotong
  },
  scrollContainer: {
    flexGrow: 1, // Memastikan ScrollView mengisi ruang jika konten pendek
    justifyContent: 'center', // Pusatkan konten jika lebih pendek dari layar
  },
  logo: {
    width: 79, // Atur ukuran logo
    height: 106,
    alignSelf: 'center', // Posisikan logo di tengah
    marginTop: 34, // Tambahkan jarak dari atas
  },
  header: {
    fontFamily: 'Poppins-Bold',
    fontSize: 36,
    color: '#C25733', 
    textAlign: 'center', // Posisikan teks di tengah
    marginTop: 16,
  },
  signInPageTitle: { // Style untuk judul "Sign In" di halaman
    fontFamily: 'Poppins-Medium',
    fontSize: 30,
    color: '#C25733',
    textAlign: 'left',
    marginBottom: 10, // Jarak ke elemen berikutnya
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 30, // Beri jarak lebih dari header
    flex: 1,
    paddingHorizontal: 24,
  },
  actionButton: { // Ganti nama style agar konsisten dengan SignUp
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
  actionButtonText: { // Ganti nama style agar konsisten
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
  linkText: { // Style untuk teks "Don't have an account?"
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginTop: 15,
    fontSize: 14,
  },
  linkHighlight: { // Style untuk bagian "Sign Up" yang di-highlight
    fontFamily: 'Poppins-Bold',
    color: '#BB5F09',
    fontSize: 14,
  }
});
