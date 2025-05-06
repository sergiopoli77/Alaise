import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MenuButton2,Header } from '../../components/molecules';
import {mujairPepes, fishChips,chochoDouble,espressoAvocado} from '../../assets/images';

const Signature = () => {
  return (
    <View style={styles.container}>
      {/* Bagian atas dengan ikon */}
      <Header /> 

      {/* Menu Button */}
      <View style={styles.bottomMenu}>
        <MenuButton2 />
      </View>
    </View>
  );
};

export default Signature;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  bottomMenu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },
});