import { FlatList, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import JobItem from '@/components/JobItem';
import Layout from '@/constants/Layout';
import data from '../../data';
import ListTitle from '@/components/ListTitle';
import { HomeStackScreenProps } from '@/../types';

export default function HotJobList(props: HomeStackScreenProps<'Home'>) {
  return (
    <SafeAreaView style={styles.container}>
      <ListTitle
        title="Hot Job This Week"
        style={styles.list}
        onPress={() => props.navigation.navigate('Search')}
      />
      <FlatList
        contentContainerStyle={styles.list}
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item, index }) => <JobItem job={item} margin={index !== 0} type="hot-job" />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  list: {
    paddingHorizontal: Layout.horizontalPadding,
  },
});
