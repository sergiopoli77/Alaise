import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MenuItem = ({ image, title, description, price, onAddToCart }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <TouchableOpacity 
        style={styles.addButton}
        onPress={onAddToCart} // Panggil fungsi onAddToCart saat ditekan
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 120,
    borderRadius: 10,
    marginRight: 10,
    overflow: 'hidden', // Pastikan sudut gambar mengikuti borderRadius
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Poppins-regular',
    color: '#333333',
  },
  description: {
    fontSize: 10,
    color: '#DE8F5F',
    marginVertical: 5,
    fontFamily: 'Poppins-regular',
  },
  price: {
    fontSize: 14,
    fontFamily: 'Poppins-regular',
    color: '#000000',
  },
  addButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#DE8F5F',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MenuItem;