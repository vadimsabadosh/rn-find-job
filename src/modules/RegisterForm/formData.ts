type FormField = {
  placeholder: string;
  label: string;
  name: 'password2' | 'password' | 'lastName' | 'firstName' | 'email';
  isPassword?: boolean;
};

const array: FormField[] = [
  {
    placeholder: 'Type first name',
    label: 'First name',
    name: 'firstName',
  },
  {
    placeholder: 'Type last name',
    label: 'Last Name',
    name: 'lastName',
  },
  {
    placeholder: 'Type email address',
    label: 'Email Address',
    name: 'email',
  },
  {
    placeholder: 'Type password',
    label: 'Password',
    name: 'password',
    isPassword: true,
  },
  {
    placeholder: 'Type password again',
    label: 'Confirm password',
    name: 'password2',
    isPassword: true,
  },
];
export default array;
