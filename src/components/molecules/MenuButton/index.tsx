import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {GapRow} from '../../atoms';
import {Account, Home, Note} from '../../../assets/icon';

const MenuButton = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Note')}>
        <View>
          <Image source={Note} />
        </View>
      </TouchableOpacity>
      <GapRow width={74} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <View>
          <Image source={Home} />
        </View>
      </TouchableOpacity>
      <GapRow width={74} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AccountPage')}>
        <View>
          <Image source={Account} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MenuButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292D32',
    borderTopStartRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  button: {
    width: 44,
    height: 44,
  },
});
