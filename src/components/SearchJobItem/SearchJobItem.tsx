import { StyleSheet, View, Image, Text, Pressable } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import FavButton from '../FavButton';

export type TSearchJobItem = {
  id: string;
  companyName: string;
  companyIcon: string;
  position: string;
  city: string;
  country: string;
  salary: string;
  onPress: () => void;
};

export default function SearchJobItem({
  companyIcon,
  companyName,
  position,
  salary,
  country,
  city,
  onPress,
}: TSearchJobItem) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <View>
          <Image source={{ uri: companyIcon }} style={styles.icon} />
        </View>
        <View>
          <Text style={styles.subtitle}>{companyName}</Text>
          <Text style={styles.position}>{position}</Text>
          <View style={styles.salaryBlock}>
            <Text style={styles.salary}>${salary}/m</Text>
            <Text style={styles.subtitle}>
              {city}, {country}
            </Text>
          </View>
        </View>
        <View style={styles.right}>
          <FavButton />
          <Text style={styles.posted}>12h</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 42,
    height: 42,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 16,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    shadowColor: '#D9DADF',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    marginBottom: 20,
  },
  subtitle: {
    color: Colors.darkGrey,
  },
  position: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  salaryBlock: {
    flexDirection: 'row',
  },
  salary: {
    color: Colors.darkGrey,
    marginRight: 10,
  },
  right: {
    marginRight: 0,
    marginLeft: 'auto',
    alignItems: 'center',
  },
  posted: {
    marginTop: 10,
    color: Colors.darkGrey,
  },
});
