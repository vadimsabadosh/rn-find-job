import { Image, StyleSheet, View } from 'react-native';

export default function UserAvatar() {
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={require('../../assets/images/avatar.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    marginRight: 20,
  },
  image: {
    width: 38,
    height: 38,
    borderRadius: 20,
  },
});
