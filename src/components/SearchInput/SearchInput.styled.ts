import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/theme';
import {sW, sH, sF} from '../../styles/responsive';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: sW(1),
    borderColor: COLORS.darkGreen,
    borderRadius: sW(50),
    paddingHorizontal: sW(12),
    backgroundColor: '#ffffff',
    height: sH(40),
  },
  closeContainer: {
    borderRadius: sW(4),
  },
  pressedCloseContainer: {
    backgroundColor: COLORS.greyshGreen,
  },
  input: {
    flex: 1,
    fontSize: sF(16),
    color: COLORS.darkGreen,
    paddingVertical: 0,
    height: sH(40),
  },
  icon: {
    width: sW(20),
    height: sW(20),
    marginRight: sW(8.5),
  },
  clearIcon: {
    marginLeft: sW(8.5),
    width: sW(20),
    height: sW(20),
  },
});
