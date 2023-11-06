import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SearchBar from '@/modules/SearchBar';
import Colors from '../../constants/Colors';
import { HomeStackScreenProps } from '../../../types';
import { useRef, useState } from 'react';
import DATA from '../../data';
import Layout from '@/constants/Layout';
import Button from '@/components/Button';
import JobItem from '@/components/JobItem';
import FilterBar from '@/modules/FilterBar';
export default function HomeScreen(props: HomeStackScreenProps<'Search'>) {
  const [isShowSearchBar, setToggleSearchBar] = useState(true);
  const [isToggleFilter, setToggleFilter] = useState(false);
  const searchBarAnim = useRef(new Animated.Value(-90)).current;
  const modalAnim = useRef(new Animated.Value(0)).current;

  const [recent, setRecent] = useState(false);

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

  const onPressRecent = () => {
    setRecent(true);
  };
  const onPressRelevant = () => {
    setRecent(false);
  };

  const inactiveTab = {
    backgroundColor: 'transparent',
    borderWidth: 0,
  };

  const activeTextColor = { color: '#fff' };

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
      <View style={styles.list}>
        <Text style={styles.title}>35 Job Opportunity</Text>
        <View style={styles.buttons}>
          <Button
            color="primary"
            onPress={onPressRelevant}
            style={[styles.btn, recent ? inactiveTab : undefined]}
          >
            <Text style={recent ? undefined : activeTextColor}>Most Relevant</Text>
          </Button>
          <Button
            color="primary"
            onPress={onPressRecent}
            style={[styles.rightBtn, styles.btn, recent ? null : inactiveTab]}
          >
            <Text style={recent ? activeTextColor : undefined}>Most Recent</Text>
          </Button>
        </View>
        <Animated.FlatList
          keyExtractor={(item) => item.id}
          data={DATA}
          showsVerticalScrollIndicator={false}
          onScroll={onScroll}
          renderItem={({ item }) => <JobItem job={item} type="search-job" />}
        />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 20,
    backgroundColor: Colors.background,
    height: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  list: {
    paddingHorizontal: Layout.horizontalPadding,
    height: '100%',
    paddingBottom: 50,
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  rightBtn: {
    marginLeft: 10,
  },
  btn: {
    borderRadius: 15,
  },
});
