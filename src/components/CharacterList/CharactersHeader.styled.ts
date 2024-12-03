import {sH, sW} from '../../styles/responsive';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    padding: sW(16),
    gap: sH(16),
  },
  shadowContainer: {
    position: 'relative',
  },
  shadowLayer: {
    position: 'absolute',
    top: sH(4),
    left: sW(4),
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.darkGreen,
    borderRadius: sW(24),
    width: '100%',
    height: sH(300),
    zIndex: 2,
  },
  filterContainer: {
    position: 'absolute',
    padding: sW(16),
    display: 'flex',
    flexDirection: 'column',
    borderColor: COLORS.mediumGreen,
    borderWidth: 1,
    backgroundColor: '#ffffff',
    top: 0,
    left: 0,
    right: 0,
    borderRadius: sW(24),
    gap: sW(24),
    zIndex: 2,
    maxHeight: sH(300),
    overflow: 'scroll',
  },
  groupContainer: {
    gap: sW(8),
  },
  buttonContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  filterButtonContainer: {
    alignSelf: 'flex-start',
  },
});
