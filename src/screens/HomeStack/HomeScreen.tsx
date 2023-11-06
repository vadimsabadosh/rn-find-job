import {
  Animated,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
} from 'react-native';
import HotJobList from '@/modules/HotJobList/HotJobList';
import SearchBar from '@/modules/SearchBar';
import Colors from '../../constants/Colors';
import { HomeStackScreenProps } from '../../../types';
import { useRef, useState } from 'react';
import DATA from '../../data';
import ListTitle from '@/components/ListTitle';
import JobItem from '@/components/JobItem';
import Layout from '@/constants/Layout';
import FilterBar from '@/modules/FilterBar';

export default function HomeScreen(props: HomeStackScreenProps<'Home'>) {
  const [isShowSearchBar, setToggleSearchBar] = useState(true);
  const [isToggleFilter, setToggleFilter] = useState(false);
  const searchBarAnim = useRef(new Animated.Value(-90)).current;
  const modalAnim = useRef(new Animated.Value(0)).current;

  const toggleFilterBar = () => {
    setToggleFilter(!isToggleFilter);
  };

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (e.nativeEvent.contentOffset.y < -30) {
      setToggleSearchBar(true);
    } else if (e.nativeEvent.contentOffset.y > 30) {
      setToggleSearchBar(false);
    }
  };

  return (
    <Animated.View style={[styles.wrapper, { transform: [{ translateY: searchBarAnim }] }]}>
      <FilterBar
        modalAnim={modalAnim}
        toggleFilterBar={toggleFilterBar}
        isToggleFilter={isToggleFilter}
      />
      <SearchBar
        {...props}
        toggleFilterBar={toggleFilterBar}
        isShowSearchBar={isShowSearchBar}
        searchBarAnim={searchBarAnim}
      />
      <HotJobList {...props} />
      <ListTitle
        title="Recent Post"
        style={styles.list}
        onPress={() => props.navigation.navigate('Search')}
      />
      <FlatList
        keyExtractor={(item) => item.id}
        data={DATA}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        onScroll={onScroll}
        renderItem={({ item }) => <JobItem job={item} type="recent-job" />}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 20,
    backgroundColor: Colors.background,
    height: '102%',
  },
  list: {
    paddingHorizontal: Layout.horizontalPadding,
  },
});
