/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          HomeStack: {
            screens: {
              HomeScreen: 'home',
              JobScreen: 'job',
              SearchScreen: 'search',
            },
          },
          MessagesStack: {
            screens: {
              MessageScreen: 'messages',
              ChatScreen: 'chat',
            },
          },
          AccountStack: {
            screens: {
              AccountScreen: 'account',
              LoginScreen: 'login',
              RegisterScreen: 'register',
            },
          },
          SettingsStack: {
            screens: {
              SettingsScreen: 'settings',
              BlackListScreenScreen: 'black-list',
            },
          },
        },
      },
    },
  },
};

export default linking;
