import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type MessagesItemProps = {
  userId: string;
  id: string;
  message: string;
  currentUserId: string;
  userEmail: string;
  name: string;
  date: string;
};

export default function MessageItem(props: MessagesItemProps) {
  return (
    <View
      style={[
        styles.inner,
        props.userId === props.currentUserId ? styles.inner_reverse : undefined,
      ]}
    >
      <View
        style={[
          styles.nameWrapper,
          props.userId === props.currentUserId ? styles.author_mine : undefined,
        ]}
      >
        <Text style={styles.author}>{props.name[0]}</Text>
      </View>
      <View
        style={[styles.info, props.userId === props.currentUserId ? styles.info_mine : undefined]}
      >
        <Text
          style={[
            styles.message,
            props.userId === props.currentUserId ? styles.info_mine_message : undefined,
          ]}
        >
          {props.message}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inner: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  inner_reverse: {
    flexDirection: 'row-reverse',
    alignSelf: 'flex-end',
  },
  message: {
    textAlign: 'left',
  },
  author: {
    color: '#fff',
    textTransform: 'uppercase',
  },
  author_mine: {
    backgroundColor: '#6e709a',
  },
  info: {
    minHeight: 25,
    maxWidth: 200,
    marginLeft: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingVertical: 5,
    marginBottom: 2,
    paddingHorizontal: 10,
  },
  info_mine: {
    marginLeft: 0,
    marginRight: 5,
    backgroundColor: 'rgb(150,115,230)',
  },
  userEmail: {
    marginLeft: 5,
    color: '#212121',
    opacity: 0.5,
    fontWeight: '300',
    fontSize: 12,
  },
  info_mine_userEmail: {
    marginLeft: 0,
    marginRight: 5,
  },
  info_mine_message: {
    color: '#fff',
    textAlign: 'right',
  },
  nameWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    aspectRatio: 1,
    minWidth: 30,
    backgroundColor: '#333333',
    borderRadius: 50,
  },
});
