import {sH, sW} from '../../styles/responsive';
import {COLORS} from '../../styles/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: sH(140),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: sW(16),
    paddingVertical: sH(24),
    backgroundColor: COLORS.darkGreen,
  },
});
