import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useState } from 'react';
import { StyleSheet, Switch, Text, View, TouchableOpacity } from 'react-native';
import { SettingsStackParamList } from '@/../types';
import Colors from '@/constants/Colors';

export default function SettingsScreen() {
  const [isPush, setIsPush] = useState(false);
  const [isLocation, setIsLocation] = useState(false);
  const togglePush = () => setIsPush((previousState) => !previousState);
  const toggleLocation = () => setIsLocation((previousState) => !previousState);
  const { navigate } = useNavigation<StackNavigationProp<SettingsStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <Text style={styles.title}>Push Notifications</Text>
        <Switch
          trackColor={{ false: '#767577', true: Colors.primary }}
          thumbColor={Colors.background}
          ios_backgroundColor="#3e3e3e"
          onValueChange={togglePush}
          value={isPush}
        />
      </View>
      <View style={styles.line}>
        <Text style={styles.title}>Use Location</Text>
        <Switch
          trackColor={{ false: '#767577', true: Colors.primary }}
          thumbColor={Colors.background}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleLocation}
          value={isLocation}
        />
      </View>
      <TouchableOpacity style={styles.line} onPress={() => navigate('Black List')}>
        <Text style={styles.title}>Black list</Text>
        <MaterialIcons
          name="arrow-forward-ios"
          size={24}
          style={{ paddingLeft: 20 }}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
});
