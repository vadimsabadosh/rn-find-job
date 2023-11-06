import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  Alert,
} from 'react-native';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { removeBlackListItem, updateBlackListItem } from '@/store/blackList/slice';
import { IBlackListItem } from '@/../types';
import { Feather } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import EditModal from '../EditModal';

const Item = ({ item }: { item: IBlackListItem }) => {
  const [modal, setModal] = useState(false);

  const dispatch = useAppDispatch();

  const onRemoveItem = () => {
    Alert.alert(
      'Remove item',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          onPress: () => {
            dispatch(removeBlackListItem(item.id));
          },
          style: 'destructive',
        },
      ],
      { cancelable: false },
    );
  };

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  const saveHandler = (title: string) => {
    dispatch(updateBlackListItem(item.id, title));
    setModal(false);
  };

  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.item}>
      <EditModal
        value={item.title}
        visible={modal}
        toggleModal={toggleModal}
        onSave={saveHandler}
      />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={{ marginRight: 15 }} onPress={toggleModal}>
          <Feather name="edit-3" size={28} color={Colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onRemoveItem}>
          <Ionicons name="remove-circle-outline" size={28} color={Colors.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const ItemList = ({ list }: { list: IBlackListItem[] }) => {
  const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - 40);

  useEffect(() => {
    const update = () => {
      const width = Dimensions.get('window').width - 40;
      setDeviceWidth(width);
    };
    const subscription = Dimensions.addEventListener('change', update);

    return () => subscription.remove();
  }, []);

  return (
    <View style={{ width: deviceWidth }}>
      <FlatList
        data={list}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 8,
    borderRadius: 4,
    backgroundColor: '#f1f1f1',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#000',
    lineHeight: 28,
  },
  date: {
    fontSize: 12,
    color: Colors.darkGrey,
  },
});
