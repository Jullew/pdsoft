import {Pressable, StyleProp, Text, ViewStyle} from 'react-native';
import React from 'react';
import {globalStyles} from '../../styles/globalStyles';
import Icon from '@react-native-vector-icons/material-icons';
import {sF} from '../../styles/responsive';

interface ButtonProps {
  text: string;
  textColor?: string;
  outline?: boolean;
  iconName?: any;
  iconColor?: string;
  iconSize?: number;
  styles?: StyleProp<ViewStyle>;
  iconSide?: 'left' | 'right';
  onPress?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  text,
  textColor = '#ffffff',
  outline,
  iconName,
  iconColor = '#ffffff',
  iconSize = sF(16),
  iconSide = 'left',
  styles,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        outline
          ? [
              globalStyles.outlineButton,
              pressed && globalStyles.outlinePressedButton,
            ]
          : [globalStyles.button, pressed && globalStyles.pressedButton],
        styles,
      ]}>
      {iconSide === 'left' ? (
        <>
          <Icon name={iconName} color={iconColor} size={iconSize} />
          <Text
            style={[globalStyles.buttonText, textColor && {color: textColor}]}>
            {text}
          </Text>
        </>
      ) : (
        <>
          <Text
            style={[globalStyles.buttonText, textColor && {color: textColor}]}>
            {text}
          </Text>
          <Icon name={iconName} color={iconColor} size={iconSize} />
        </>
      )}
    </Pressable>
  );
};

export default Button;
