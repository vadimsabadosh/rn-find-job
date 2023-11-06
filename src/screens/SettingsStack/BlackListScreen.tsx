import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import AppLoader from '@/components/AppLoader/AppLoader';
import AddItem from '@/modules/AddItem';
import Colors from '@/constants/Colors';
import ItemList from '@/modules/ItemList';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { loadBlackListItems } from '@/store/blackList/slice';

export default function MainScreen() {
  const { list, loading } = useAppSelector((state) => state.blackList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!list.length) {
      dispatch(loadBlackListItems());
    }
  }, []);

  if (loading) {
    return <AppLoader />;
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <AddItem />
      <ItemList list={list} />
      {!list.length && (
        <View style={styles.imageWrapper}>
          <Text style={styles.text}>Black list empty...</Text>
          <Image style={styles.img} source={require('../../assets/images/no-results.png')} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 30,
  },
  error: {
    fontSize: 20,
    color: Colors.danger,
    marginBottom: 20,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
