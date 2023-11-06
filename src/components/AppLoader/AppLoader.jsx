import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';

export default function AppLoader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
