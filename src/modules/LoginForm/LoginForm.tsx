import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import FieldInput from '@/components/FormField/FormField';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Button from '@/components/Button/Button';
import Colors from '@/constants/Colors';

type Inputs = {
  email: string;
  password: string;
};

export default function LoginForm({ navigation }: any) {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onPressRegister = () => {
    navigation.navigate('Register');
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  return (
    <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <FieldInput
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            placeholder="Enter Email address"
            label="Email Address"
          />
        )}
        name="email"
        rules={{ required: true }}
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <FieldInput
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            placeholder="Enter password"
            label="Password"
            isPassword
          />
        )}
        name="password"
        rules={{ required: true }}
      />
      <View style={styles.forgetBlock}>
        <TouchableOpacity>
          <Text style={styles.forgetText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnWrap}>
        <Button onPress={handleSubmit(onSubmit)} color="primary">
          <Text style={styles.btnText}>Login</Text>
        </Button>
        <Button onPress={onPressRegister} color="outlined" style={styles.buttonRegister}>
          <Text style={styles.btnTextRegister}>Create an Account</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  forgetBlock: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  forgetText: {
    color: Colors.darkGrey,
  },
  buttonRegister: {
    marginLeft: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
  btnTextRegister: {
    color: Colors.primary,
    fontSize: 16,
  },
  btnWrap: {
    flexDirection: 'row',
  },
});
