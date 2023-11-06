import { createStackNavigator } from '@react-navigation/stack';
import LogoTitle from '@/components/LogoTitle';
import { AccountScreen, LoginScreen, RegisterScreen } from '@/screens';
import { MaterialIcons } from '@expo/vector-icons';
import { AccountStackParamList } from '@/../types';
import Colors from '@/constants/Colors';

const AccountStack = createStackNavigator<AccountStackParamList>();

export default function AccountStackNavigator() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <AccountStack.Screen
        name="Register"
        component={RegisterScreen}
        options={({ navigation }) => ({
          headerTitle: (props) => <LogoTitle {...props} />,
          headerLeft: () => (
            <MaterialIcons
              name="arrow-back-ios"
              size={24}
              style={{ paddingLeft: 20 }}
              color="black"
              onPress={() => navigation.goBack()}
            />
          ),
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerShadowVisible: false,
        })}
      />
      <AccountStack.Screen
        name="Account"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
    </AccountStack.Navigator>
  );
}
