import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';
import HeaderProfile from '../../components/molecules/HeaderProfile';
import ProfileCard from '../../components/molecules/ProfileCards';
import Gap from '../../components/atoms/Gap';

const Profile = () => {
  return (
    <View style={styles.page}>
      <HeaderProfile />
      <ProfileCard name="Sergio Poli" />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  container: {
    flex: 1,
  },
});