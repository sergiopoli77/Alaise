import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {MenuButton} from '../../components/molecules';

const Signature = () => {
  return (
    <View style={styles.container}>
      {/* Bagian atas dengan ikon */}
      <View style={styles.topIcons}>
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>SIGNATURE</Text>
        </View>
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>FOOD</Text>
        </View>
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>DRINK</Text>
        </View>
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>PASTRIES</Text>
        </View>
      </View>

      {/* Menu Button */}
      <View style={styles.bottomMenu}>
        <MenuButton />
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
  topIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconPlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: '#E0E0E0', // Placeholder untuk ikon
    borderRadius: 25,
    marginBottom: 8,
  },
  iconText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000000',
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