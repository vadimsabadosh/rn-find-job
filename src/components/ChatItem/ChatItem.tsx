import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { IMessageItem } from '@/../types';
import { useNavigation } from '@react-navigation/native';
import { MessagesStackParamList } from '@/../types';
import { StackNavigationProp } from '@react-navigation/stack';
type MessagesItemProps = {
  item: IMessageItem;
  isFirst: boolean;
};
export default function ChatItem({ item, isFirst }: MessagesItemProps) {
  const navigation = useNavigation<StackNavigationProp<MessagesStackParamList>>();

  const icon = item.read && item.delivered ? 'ios-checkmark-done-sharp' : 'ios-checkmark-sharp';

  const onPress = () => {
    navigation.navigate('Message', { id: item.id });
  };

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={[styles.message, isFirst ? styles.firstMsg : undefined]}>
        <View style={styles.message_icon}>
          <Image style={styles.message_image} source={require('../../assets/images/avatar.jpg')} />
        </View>
        <View style={styles.message_text}>
          <Text style={styles.message_name}>{item.name}</Text>
          <Text style={styles.message_lastmsg} numberOfLines={2}>
            {item.last_msg}
          </Text>
        </View>
        <View style={styles.message_info}>
          <Text style={styles.message_day}>{item.date}</Text>
          <Ionicons name={icon} size={20} color={Colors.darkGrey} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  firstMsg: {
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  message: {
    flexDirection: 'row',
    padding: 10,

    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  message_icon: {
    marginRight: 20,
  },
  message_image: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  message_info: {
    width: 40,
    marginLeft: 'auto',
    marginRight: 0,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  message_day: {
    color: Colors.darkGrey,
  },
  message_text: {
    flex: 1,
    paddingRight: 20,
  },
  message_name: {
    fontSize: 17,
    marginBottom: 10,
  },
  message_lastmsg: {
    color: Colors.darkGrey,
  },
});
