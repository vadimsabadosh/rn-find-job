import { useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
type Input = {
  isPassword?: boolean;
  placeholder?: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
};
const FieldInput: React.FC<Input> = ({
  isPassword,
  value,
  onChange,
  onBlur,
  placeholder,
  label,
}) => {
  const [isPass, setIsPass] = useState(false);
  const openPassword = () => {
    setIsPass((prev) => !prev);
  };
  const icon = isPass ? 'eye-off' : 'eye';
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.field}>
        <TextInput
          placeholder={placeholder}
          value={value}
          style={[styles.input, { width: isPassword ? '85%' : '100%' }]}
          onBlur={onBlur}
          onChangeText={onChange}
          secureTextEntry={isPass}
        />
        {isPassword && (
          <Ionicons name={icon} size={24} color={Colors.darkGrey} onPress={openPassword} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 12,
    fontSize: 15,
    color: Colors.black,
  },
  field: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 65,
    width: '100%',
    marginRight: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 15,
    shadowColor: '#D9DADF',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  input: {
    height: 65,
  },
});

export default FieldInput;
