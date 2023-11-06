import { Image, Keyboard, StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native';
import { AccountStackScreenProps } from '../../../types';
import Layout from '@/constants/Layout';
import Colors from '@/constants/Colors';
import LoginForm from '@/modules/LoginForm/LoginForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function LoginScreen({ navigation }: AccountStackScreenProps<'Login'>) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.imageWrap}>
          <Image source={require('../../assets/images/register.png')} style={styles.image} />
        </View>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Fill your details or continue with social media</Text>
        <LoginForm navigation={navigation} />
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    paddingHorizontal: Layout.horizontalPadding,
  },
  imageWrap: {
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  image: {
    width: 220,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 25,
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
