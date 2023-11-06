import { StyleSheet, Text, View } from 'react-native';
import Layout from '@/constants/Layout';

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    paddingHorizontal: Layout.horizontalPadding,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
