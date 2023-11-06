import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Title from '../Title';
import Colors from '@/constants/Colors';

type TListTitle = {
  title: string;
  onPress?: () => void;
  style?: object;
};
export default function ListTitle({ title, onPress, style }: TListTitle) {
  return (
    <View style={[styles.titles, style]}>
      <Title>{title}</Title>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.showAll}>Show all</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  titles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  showAll: {
    color: Colors.darkGrey,
  },
});
