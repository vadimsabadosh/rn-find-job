import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FieldInput from '@/components/FormField/FormField';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Button from '@/components/Button/Button';
import Colors from '@/constants/Colors';
import form from './formData';

type Inputs = {
  email: string;
  firstName: string;
  lastName: string;
  password2: string;
  password: string;
};

export default function RegisterForm() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      password2: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  return (
    <View style={{ flex: 1 }}>
      {form.map((field) => (
        <Controller
          key={field.name}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <FieldInput onChange={onChange} value={value} onBlur={onBlur} {...field} />
          )}
          name={field.name}
          rules={{ required: true }}
        />
      ))}
      <View style={styles.btnWrap}>
        <Button onPress={handleSubmit(onSubmit)} color="primary">
          <Text style={styles.btnText}>Create an Account</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonRegister: {
    marginLeft: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
  btnTextRegister: {
    color: Colors.darkGrey,
    fontSize: 16,
  },
  btnWrap: {
    flexDirection: 'row',
  },
});
