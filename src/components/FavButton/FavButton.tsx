import { StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

export default function FavButton() {
  const [fav, setFav] = useState(false);
  const onChangeFavorite = () => {
    setFav((prev) => !prev);
  };
  const icon = fav ? 'favorite' : 'favorite-outline';
  const color = fav ? Colors.orange : Colors.black;
  return (
    <Pressable onPress={onChangeFavorite} style={styles.button}>
      <MaterialIcons name={icon} size={22} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FAFAFA',
    padding: 4,
    borderRadius: 30,
    width: 30,
    height: 30,
  },
});
