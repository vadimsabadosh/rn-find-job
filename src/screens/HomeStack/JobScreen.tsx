import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import FavButton from '@/components/FavButton';

export type THotJobItem = {
  id: string;
  companyName: string;
  companyIcon: string;
  position: string;
  city: string;
  country: string;
  salary: string;
  margin: boolean;
};

const JobScreen = ({ route }: { route: { params: THotJobItem } }) => {
  const { companyIcon, companyName, position, salary, country, city } = route.params;
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={{ uri: companyIcon }} style={styles.icon} />
            <View>
              <Text style={styles.subtitle}>{companyName}</Text>
              <Text style={styles.salary}>${salary}/m</Text>
              <Text style={styles.subtitle}>
                {city}, {country}
              </Text>
            </View>
          </View>
          <FavButton />
        </View>
        <Text style={styles.position}>{position}</Text>
        <View>
          <Text>
            We are looking for a hands-on, Javascript developer, who will continue to design and
            develop state of the art front-end functionality.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default JobScreen;

const styles = StyleSheet.create({
  icon: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 6,
    marginRight: 20,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  subtitle: {
    color: Colors.darkGrey,
    fontSize: 20,
    marginBottom: 5,
  },
  position: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  salary: {
    fontWeight: 'bold',
    marginRight: 10,
    fontSize: 20,
    color: Colors.primary,
    marginBottom: 5,
  },
});
