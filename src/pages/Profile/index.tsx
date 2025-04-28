import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderProfile from '../../components/molecules/HeaderProfile';

const Profile = () => {
  return (
    <View style={styles.page}>
      <HeaderProfile />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  menuWrapper: {
    marginTop: 24,
    marginHorizontal: 24,
  },
});
