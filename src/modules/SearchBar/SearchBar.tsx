import { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Pressable, Animated } from 'react-native';
import CustomIcon from '@/components/CustomIcon/CustomIcon';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';

import { HomeStackScreenProps } from '@/../types';

type NavigationProp = HomeStackScreenProps<'Home'> | HomeStackScreenProps<'Search'>;
interface SearchBarProps {
  toggleFilterBar: () => void;
  isShowSearchBar: boolean;
  searchBarAnim: any;
}

export default function SearchBar({
  navigation,
  toggleFilterBar,
  isShowSearchBar,
  searchBarAnim,
}: SearchBarProps & NavigationProp) {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (isShowSearchBar) {
      Animated.timing(searchBarAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(searchBarAnim, {
        toValue: -90,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isShowSearchBar]);

  const onSubmitEditing = () => {
    setValue('');
    navigation.navigate('Search');
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setValue}
        value={value}
        placeholder="Search here..."
        style={styles.input}
        onSubmitEditing={onSubmitEditing}
      />
      <Pressable style={styles.button} onPress={toggleFilterBar}>
        <CustomIcon name="filter" color="#fff" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    paddingHorizontal: Layout.horizontalPadding,
  },
  button: {
    backgroundColor: Colors.primary,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    shadowColor: '#D9DADF',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  input: {
    height: 50,
    flex: 1,
    marginRight: 20,
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
});
