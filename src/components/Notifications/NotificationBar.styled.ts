import {StyleSheet} from 'react-native';
import {sW} from '../../styles/responsive';

export const styles = StyleSheet.create({
  notificationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sW(8),
    padding: sW(16),
    borderRadius: sW(24),
  },
});
