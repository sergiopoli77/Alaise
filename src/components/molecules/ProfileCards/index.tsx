import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const ProfileCard = ({ name }: { name: string }) => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Image
          source={require('../../../assets/icon/profile.png')}
          style={styles.avatar}
        />
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
};


export default ProfileCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 0,
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    position: 'absolute', // tambah ini
    top: 140, // atur supaya berada tepat di bawah header
    left: 24,
    right: 24,
    zIndex: 10, // supaya dia di atas header
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#020202',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
