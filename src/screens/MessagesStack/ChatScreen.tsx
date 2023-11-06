import { FlatList, StyleSheet, View } from 'react-native';
import ChatItem from '@/components/ChatItem';
import { chatList } from '@/data';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={chatList}
        renderItem={({ item, index }) => <ChatItem item={item} isFirst={index === 0} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 80,
  },
});
