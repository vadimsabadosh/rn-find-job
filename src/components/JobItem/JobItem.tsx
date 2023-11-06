import { View } from 'react-native';
import React from 'react';
import HotJobItem from '../HotJobItem';
import PostItem from '../PostItem';
import SearchJobItem from '../SearchJobItem';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '@/../types';

type TComponent = {
  'hot-job': JSX.Element;
  'recent-job': JSX.Element;
  'search-job': JSX.Element;
};
type TJobItem = {
  job: any;
  type: 'hot-job' | 'recent-job' | 'search-job';
  margin?: boolean;
};

const JobItem = ({ job, type, margin }: TJobItem) => {
  const { navigate } = useNavigation<StackNavigationProp<HomeStackParamList>>();

  const onPress = () => {
    navigate('Job', { ...job });
  };

  const Types: TComponent = {
    'hot-job': <HotJobItem {...job} margin={margin} onPress={onPress} />,
    'recent-job': <PostItem {...job} onPress={onPress} />,
    'search-job': <SearchJobItem {...job} onPress={onPress} />,
  };

  return <View>{Types[type]}</View>;
};

export default JobItem;
