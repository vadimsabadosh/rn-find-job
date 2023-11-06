import { StyleSheet, Text, View } from 'react-native';

export default function LogoTitle(props: any) {
  return (
    <View style={styles.bg}>
      <Text style={styles.logo}>jobhub.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'transparent',
  },
  logo: {
    fontSize: 26,
    fontWeight: 'bold',
    lineHeight: 46,
  },
});
