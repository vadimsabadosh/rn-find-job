/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { THotJobItem } from '@/components/HotJobItem/HotJobItem';
declare global {
  namespace ReactNavigation {
    // @ts-ignore
    type RootParamList = RootStackParamList;
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<BottomTabParamList> | undefined;
  OnboardingScreen: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type BottomTabParamList = {
  MessagesStack: NavigatorScreenParams<MessagesStackParamList> | undefined;
  HomeStack: NavigatorScreenParams<HomeStackParamList> | undefined;
  AccountStack: NavigatorScreenParams<AccountStackParamList> | undefined;
  SettingsStack: NavigatorScreenParams<SettingsStackParamList> | undefined;
};

export type AccountStackParamList = {
  Account: undefined;
  Login: undefined;
  Register: undefined;
};
export type SettingsStackParamList = {
  Settings: undefined;
  'Black List': undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  Search: undefined;
  Job: THotJobItem;
};
export type MessagesStackParamList = {
  Chat: undefined;
  Message: { id: string };
};

export type BottomTabsScreenProps<Screen extends keyof BottomTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type AccountStackScreenProps<Screen extends keyof AccountStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<AccountStackParamList, Screen>,
    NativeStackScreenProps<BottomTabParamList>
  >;

export type HomeStackScreenProps<Screen extends keyof HomeStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<HomeStackParamList, Screen>,
  NativeStackScreenProps<BottomTabParamList>
>;

export type MessagesStackScreenProps<Screen extends keyof MessagesStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MessagesStackParamList, Screen>,
    NativeStackScreenProps<BottomTabParamList>
  >;

export type OnBoardScreenProps = NativeStackScreenProps<RootStackParamList, 'OnboardingScreen'>;

export interface IMessageItem {
  id: string;
  name: string;
  last_msg: string;
  date: string;
  delivered: boolean;
  read: boolean;
}

export interface IBlackListItem {
  id: string;
  title: string;
  date: string;
}
