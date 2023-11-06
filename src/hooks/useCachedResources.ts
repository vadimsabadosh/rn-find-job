import { FontAwesome, MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DB } from '@/database/db';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState<boolean | null>(null);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          ...MaterialIcons.font,
          ...AntDesign.font,
          ...Ionicons.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
          icomoon: require('../assets/fonts/icomoon.ttf'),
        });
        await DB.init();
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        await SplashScreen.hideAsync();
      }
    }

    const func = async () => {
      const appData = await AsyncStorage.getItem('isAppFirstLaunched');
      if (appData == null) {
        setIsAppFirstLaunched(true);
        AsyncStorage.setItem('isAppFirstLaunched', 'false');
      } else {
        setIsAppFirstLaunched(false);
      }
    };

    func();
    // AsyncStorage.removeItem('isAppFirstLaunched');

    loadResourcesAndDataAsync().catch(console.log);
  }, []);

  return { isLoadingComplete, isAppFirstLaunched } as {
    isLoadingComplete: boolean;
    isAppFirstLaunched: boolean;
  };
}
