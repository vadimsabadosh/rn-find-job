import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { ChatScreen, MessageScreen } from '@/screens';
const MessagesStack = createStackNavigator();

export default function MessagesStackNavigator() {
  return (
    <MessagesStack.Navigator>
      <MessagesStack.Screen name="Chat" component={ChatScreen} />
      <MessagesStack.Screen
        name="Message"
        component={MessageScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <MaterialIcons
              name="arrow-back-ios"
              size={24}
              style={{ paddingLeft: 20 }}
              color="black"
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </MessagesStack.Navigator>
  );
}
