import { Animated, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Colors from '@/constants/Colors';
import RadioButton from '@/components/RadioButton';
import data from './filterData';
import Button from '@/components/Button';
import { AntDesign } from '@expo/vector-icons';
type FilterBarProps = {
  modalAnim: any;
  isToggleFilter: boolean;
  toggleFilterBar: () => void;
};

export default function FilterBar({ modalAnim, isToggleFilter, toggleFilterBar }: FilterBarProps) {
  useEffect(() => {
    if (isToggleFilter) {
      Animated.timing(modalAnim, {
        toValue: 0,
        duration: 350,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(modalAnim, {
        toValue: 600,
        duration: 350,
        useNativeDriver: true,
      }).start();
    }
  }, [isToggleFilter]);
  return (
    <Animated.View style={[styles.modalWrapper, { transform: [{ translateX: modalAnim }] }]}>
      <View style={styles.modalView}>
        <Pressable style={styles.closeBtn} onPress={toggleFilterBar}>
          <AntDesign name="close" size={28} color={Colors.darkGrey} />
        </Pressable>
        <ScrollView>
          {data.map((item) => (
            <View key={item.title}>
              <Text style={styles.checkboxTitle}>{item.title}</Text>
              <RadioButton data={item.data} />
            </View>
          ))}
        </ScrollView>
        <Button style={styles.button} onPress={toggleFilterBar} color="primary">
          <Text style={styles.textStyle}>Submit</Text>
        </Button>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  modalWrapper: {
    position: 'absolute',
    top: 20,
    left: 0,
    zIndex: 100,
    right: 0,
    bottom: 0,
    alignItems: 'flex-end',
  },
  modalView: {
    backgroundColor: Colors.background,
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
  },
  button: {
    padding: 10,
    elevation: 2,
    backgroundColor: Colors.primary,
    position: 'absolute',
    bottom: 120,
    left: 20,
    right: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  closeBtn: {
    alignSelf: 'flex-end',
  },
  checkboxTitle: {
    fontSize: 17,
    color: Colors.black,
  },
});
