import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
export default function BurgerMenu() {
  return (
    <View style={styles.burger}>
      <Ionicons name="ios-menu" size={28} color="#ffff" />
    </View>
  );
}

const styles = StyleSheet.create({
  burger: {
    height: 38,
    width: 38,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 10,
    marginLeft: 20,
  },
});
