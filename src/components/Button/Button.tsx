import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
type Button = {
  onPress: () => void;
  style?: object;
  color: 'primary' | 'outlined';
};
const Button: React.FC<Button> = ({ children, onPress, style, color }) => {
  const btnStyle: any = {
    primary: styles.primary,
    outlined: styles.outlined,
  };
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.style, btnStyle[color], style]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  style: {
    padding: 5,
  },
  primary: {
    height: 60,
    borderRadius: 5,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  outlined: {
    height: 60,
    borderRadius: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderColor: Colors.primary,
    borderWidth: 1,
    backgroundColor: '#fff',
  },
});
export default Button;
