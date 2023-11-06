import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Keyboard, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Button from '@/components/Button';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { addItemToBlackList } from '@/store/blackList/slice';

const AddItem = () => {
  const [value, setValue] = useState<string>('');

  const dispatch = useAppDispatch();

  const onAddItem = () => {
    if (value.trim()) {
      dispatch(addItemToBlackList(value));
      setValue('');
      Keyboard.dismiss();
    } else {
      Alert.alert('The field cannot be empty');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <TextInput
          placeholder="Enter company name..."
          placeholderTextColor="#201c2b"
          style={styles.textInput}
          value={value}
          onChangeText={setValue}
        />
        <Button onPress={onAddItem} color="primary" style={styles.btn}>
          <Text style={styles.btnText}>Add item</Text>
          <AntDesign name="pluscircleo" size={20} color="white" />
        </Button>
      </View>
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingBottom: 30,
  },
  inner: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    height: 44,
    color: 'black',
    width: '60%',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 15,
    shadowColor: '#D9DADF',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  btn: {
    height: 44,
    marginLeft: 20,
    borderRadius: 12,
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
    marginRight: 5,
  },
});
