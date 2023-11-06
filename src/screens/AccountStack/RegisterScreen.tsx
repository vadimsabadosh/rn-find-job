import { Keyboard, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import Layout from '@/constants/Layout';
import Colors from '@/constants/Colors';
import RegisterForm from '@/modules/RegisterForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function RegisterScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAwareScrollView contentContainerStyle={styles.container} extraScrollHeight={20}>
        <Text style={styles.title}>Register Account</Text>
        <Text style={styles.subtitle}>Fill your details or continue with social media</Text>
        <RegisterForm />
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: Layout.horizontalPadding,
    paddingBottom: 100,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  subtitle: {
    color: Colors.darkGrey,
    fontSize: 15,
    lineHeight: 20,
    maxWidth: '70%',
    marginBottom: 20,
  },
});
