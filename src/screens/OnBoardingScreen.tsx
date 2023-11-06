import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';
import { AntDesign } from '@expo/vector-icons';
import { OnBoardScreenProps } from '@/../types';

export default function OnBoardingScreen({ navigation }: OnBoardScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>jobhub.</Text>
      <Image source={require('../assets/images/get-started.png')} style={styles.image} />
      <Text style={styles.title}>Everything you need in one app</Text>
      <Text style={styles.subtitle}>
        Finding your dream job is more easier and faster with jobhub.
      </Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.replace('Root')}>
        <Text style={styles.btnText}>Let's Get Started</Text>
        <AntDesign name="arrowright" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: Layout.horizontalPadding,
  },
  image: {
    maxWidth: '100%',
    resizeMode: 'cover',
    height: '50%',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 46,
    marginBottom: 30,
  },
  btn: {
    height: 50,
    borderRadius: 5,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  btnText: { fontWeight: 'bold', fontSize: 15, color: '#fff', marginRight: 15 },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    color: Colors.darkGrey,
  },
});
