import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const JobHeaderTitle = ({ title }: { title: string }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default JobHeaderTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
});
