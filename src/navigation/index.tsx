import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { RootStackParamList, BottomTabParamList } from '../../types';
import LinkingConfiguration from './LinkingConfiguration';
import CustomIcon from '../components/CustomIcon/CustomIcon';
import OnBoardingScreen from '@/screens/OnBoardingScreen';
import React from 'react';
import AccountStackNavigator from './AccountStack';
import HomeStackNavigator from './HomeStack';
import MessagesStackNavigator from './MessagesStack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import SettingsStackNavigator from './SettingsStack';

const navTheme = DefaultTheme;
navTheme.colors.background = Colors.background;

export default function Navigation({ isAppFirstLaunched }: { isAppFirstLaunched: boolean }) {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={navTheme}>
      <RootNavigator isAppFirstLaunched={isAppFirstLaunched} />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator({ isAppFirstLaunched }: { isAppFirstLaunched: boolean }) {
  return (
    <Stack.Navigator>
      {isAppFirstLaunched && (
        <Stack.Screen
          name="OnboardingScreen"
          component={OnBoardingScreen}
          options={{ headerShown: false }}
        />
      )}
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: Colors.tabIconSelected,
        tabBarInactiveTintColor: Colors.tabIconDefault,
        tabBarShowLabel: false,
        tabBarStyle: style.tabBar,
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => <CustomIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="MessagesStack"
        component={MessagesStackNavigator}
        options={({ route }) => {
          const focusedRouteName = getFocusedRouteNameFromRoute(route);
          if (focusedRouteName === 'Message') {
            return {
              tabBarIcon: ({ color }) => <CustomIcon name="chat" color={color} />,
              tabBarStyle: { display: 'none' },
            };
          }
          return { tabBarIcon: ({ color }) => <CustomIcon name="chat" color={color} /> };
        }}
      />
      <BottomTab.Screen
        name="AccountStack"
        component={AccountStackNavigator}
        options={{
          tabBarIcon: ({ color }) => <CustomIcon name="user" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="SettingsStack"
        component={SettingsStackNavigator}
        options={{
          tabBarIcon: ({ color }) => <CustomIcon name="settings" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

const style = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    borderRadius: 20,
    borderTopWidth: 0,
    borderTopColor: '#fff',
    position: 'absolute',
    shadowColor: '#D9DADF',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
