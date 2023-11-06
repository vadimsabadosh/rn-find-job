import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { SettingsScreen } from '@/screens';
import BlackListScreen from '@/screens/SettingsStack/BlackListScreen';
const SettingsStack = createStackNavigator();

export default function SettingsStackNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen
        name="Black List"
        component={BlackListScreen}
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
    </SettingsStack.Navigator>
  );
}
