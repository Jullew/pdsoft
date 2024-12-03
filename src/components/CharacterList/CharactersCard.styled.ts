import {sH, sW} from '../../styles/responsive';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    padding: sW(12),
    width: sW(358),
    backgroundColor: COLORS.lightGreen,
    borderRadius: sW(24),
    borderColor: COLORS.primaryGreen,
    borderWidth: 1,
    zIndex: 2,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  detail: {
    flex: 1,
    flexDirection: 'column',
    padding: sW(8),
    gap: sH(4),
  },
  imageContainer: {
    position: 'relative',
    flex: 0,
  },
  image: {
    height: sH(200),
    width: sW(200),
    borderWidth: 1,
    borderColor: COLORS.darkGreen,
    borderRadius: sW(24),
  },
  button: {
    position: 'absolute',
    bottom: sH(8),
    right: sW(8),
  },
  shadowContainer: {
    position: 'relative',
    width: sW(362),
  },
  shadowLayer: {
    position: 'absolute',
    top: sH(4),
    left: sW(4),
    height: '100%',
    width: sW(358),
    backgroundColor: COLORS.darkGreen,
    borderRadius: sW(24),
    zIndex: 1,
  },
});
