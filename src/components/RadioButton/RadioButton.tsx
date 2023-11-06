import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

type RadionButtonProps = {
  data: Array<{ value: string; id: string; title: string }>;
  onSelect?: (val: string) => void;
};

export default function RadioButton({ data, onSelect }: RadionButtonProps) {
  const [userOption, setUserOption] = useState<null | string>(null);

  const selectHandler = (value: string) => {
    if (onSelect) {
      onSelect(value);
    }
    setUserOption(value);
  };

  return (
    <View style={styles.container}>
      {data.map((item) => {
        return (
          <Pressable
            key={item.id}
            onPress={() => selectHandler(item.value)}
            style={[styles.unselected, item.value === userOption && styles.selected]}
          >
            <Text style={[styles.option, item.value === userOption && styles.selectedOption]}>
              {item.value}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    marginTop: 10,
  },
  option: {
    fontSize: 17,
    color: Colors.primary,
    textAlign: 'center',
  },
  unselected: {
    backgroundColor: Colors.secondary,
    borderRadius: 3,
    display: 'flex',
    marginRight: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    backgroundColor: Colors.primary,
  },
  selectedOption: { color: '#fff' },
});
