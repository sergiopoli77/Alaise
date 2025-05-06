import { StyleSheet, View } from 'react-native'; // Hapus Text jika tidak digunakan lagi
import React from 'react';
import Gap from '../../components/atoms/Gap'; // Aktifkan impor Gap
import MenuProfile from '../../components/molecules/MenuProfile'; // Default import
import ProfileCard from '../../components/molecules/ProfileCards'; // Default import
import { MenuButton4 as Menu4, HeaderProfile } from '../../components/molecules'; // Aktifkan impor Menu4 dan HeaderProfile

const Profile = () => {
  return (
    <View style={styles.container}>
      <HeaderProfile />
      <ProfileCard name="Brevv" />
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