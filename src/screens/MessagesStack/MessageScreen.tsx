import { useRef } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import MessageInput from '@/components/MessageInput';
import MessageItem from '@/components/MessageItem';
import { messageList } from '@/data';

type MessageScreenProps = {
  id: string;
};
export default function MessageScreen(props: MessageScreenProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={messageList}
        renderItem={({ item }) => <MessageItem {...item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: 20,
        }}
      />
      <MessageInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
});
