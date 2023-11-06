import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import Colors from '@/constants/Colors';
import Modal from 'react-native-modal';

type EditModalProps = {
  value: string;
  visible: boolean;
  toggleModal: () => void;
  onSave: (title: string) => void;
};

export default function EditModal({ value, visible, toggleModal, onSave }: EditModalProps) {
  const [title, setTitle] = useState(value);

  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert('Error!', `Minimum length is 3 symbols. Now is ${title.trim().length} symbols`);
    } else {
      onSave(title);
    }
  };

  const cancelHandler = () => {
    setTitle(value);
    toggleModal();
  };
  return (
    <Modal isVisible={visible} onBackdropPress={cancelHandler}>
      <View style={styles.wrapper}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholder="Type company name..."
          placeholderTextColor={Colors.black}
        />
        <View style={styles.buttons}>
          <Button title="Cancel" onPress={cancelHandler} color={Colors.danger} />
          <Button title="Save" onPress={saveHandler} disabled={title === value} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  input: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#f1f1f1',
    width: '100%',
  },
  buttons: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
