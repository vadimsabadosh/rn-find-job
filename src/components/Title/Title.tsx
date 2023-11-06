import { StyleSheet, Text } from 'react-native';
import React from 'react';

export default function Title({ children, style }: { children: React.ReactNode; style?: object }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
