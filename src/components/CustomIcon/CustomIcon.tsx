import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import { FC } from 'react';

type ICustomIcon = FC<{
  name: string;
  size?: number;
  color?: string;
  onPress?: () => void;
}>;

const Icon = createIconSetFromIcoMoon(require('./selection.json'), 'icomoon', 'icomoon.ttf');

const CustomIcon: ICustomIcon = ({ name, size = 24, color, onPress }) => {
  return <Icon name={name} size={size} color={color} onPress={onPress} />;
};

export default CustomIcon;
