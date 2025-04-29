import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';
import HeaderProfile from '../../components/molecules/HeaderProfile';
import ProfileCard from '../../components/molecules/ProfileCards';
import Gap from '../../components/atoms/Gap';
import MenuButton from '../../components/molecules/MenuButton';
import MenuProfile from '../../components/molecules/MenuProfile';
import Header from '../../components/molecules/Header';

const Profile = () => {
  return (
    <View style={styles.page}>
      <HeaderProfile />
      <ProfileCard name="Brevv" />
      <Gap height={130} />
      <MenuProfile />
      <Gap height={24} />
      <MenuButton />
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