import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './NotificationBar.styled';
import {globalStyles} from '../../styles/globalStyles';
import Icon from '@react-native-vector-icons/material-icons';

interface NotificationProps {
  text: string;
  iconName?: string;
  color?: string;
}

const NotificationBar: React.FC<NotificationProps> = ({
  text,
  iconName,
  color,
}) => {
  return (
    <View style={styles.notificationContainer}>
      <View
        style={[
          styles.notificationTextContainer,
          {backgroundColor: color + '10'},
        ]}>
        <Icon name={iconName as any} color={color} size={20} />
        <Text style={[globalStyles.bodyText, {color: color}]}>{text}</Text>
      </View>
    </View>
  );
};

export default NotificationBar;
