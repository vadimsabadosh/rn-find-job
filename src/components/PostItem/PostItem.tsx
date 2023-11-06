import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../constants/Colors';

export type TPostItem = {
  position: string;
  time: string;
  salary: string;
  companyIcon: string;
  onPress: () => void;
};

const PostItem: React.FC<TPostItem> = ({ position, time, salary, companyIcon, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: companyIcon,
          }}
        />
        <View>
          <Text style={styles.title}>{position}</Text>
          <Text style={styles.subtitle}>{time}</Text>
        </View>
        <Text style={styles.salary}>${salary}/m</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingVertical: 15,
    paddingHorizontal: 16,
    shadowColor: '#D9DADF',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },
  image: {
    borderRadius: 10,
    width: 40,
    height: 40,
    resizeMode: 'cover',
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 5,
  },
  subtitle: {
    color: Colors.darkGrey,
  },
  salary: {
    marginRight: 0,
    marginLeft: 'auto',
    color: Colors.darkGrey,
  },
});
