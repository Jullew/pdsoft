import {StyleSheet} from 'react-native';
import {sH, sW} from '../../styles/responsive';
import {COLORS} from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: sH(80),
    justifyContent: 'center',
    paddingHorizontal: sW(16),
    paddingVertical: sH(24),
    backgroundColor: COLORS.darkGreen,
  },
});
