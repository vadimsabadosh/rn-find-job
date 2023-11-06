import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, JobScreen, SearchScreen } from '@/screens';
import { HomeStackParamList } from '@/../types';
import UserAvatar from '@/components/UserAvatar';
import BurgerMenu from '@/components/BurgerMenu';
import Colors from '@/constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import JobHeaderTitle from '@/components/JobHeaderTitle';

const HomeStack = createStackNavigator<HomeStackParamList>();

export default function AccountStackNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: () => <UserAvatar />,
          headerLeft: () => <BurgerMenu />,
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTitle: () => null,
          headerShadowVisible: false,
        }}
      />
      <HomeStack.Screen
        name="Job"
        component={JobScreen}
        options={({ navigation, route }) => ({
          headerTitle: () => <JobHeaderTitle title={route.params.companyName} />,
          headerLeft: () => (
            <MaterialIcons
              name="arrow-back-ios"
              size={24}
              style={{ paddingLeft: 20 }}
              color="black"
              onPress={() => navigation.goBack()}
            />
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerShadowVisible: false,
        })}
      />
      <HomeStack.Screen
        name="Search"
        component={SearchScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerLeft: () => (
            <MaterialIcons
              name="arrow-back-ios"
              size={24}
              style={{ paddingLeft: 20 }}
              color="black"
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitleStyle: {
            fontSize: 22,
          },
          headerRight: () => <UserAvatar />,
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerShadowVisible: false,
        })}
      />
    </HomeStack.Navigator>
  );
}
