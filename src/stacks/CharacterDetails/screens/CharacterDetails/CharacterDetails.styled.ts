import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../styles/theme';
import {sH, sW} from '../../../../styles/responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: sW(16),
  },
  backContainer: {},
  back: {
    borderBottomColor: COLORS.mediumGreen,
    borderBottomWidth: 1,
    alignSelf: 'flex-start',
  },
  charContainer: {
    padding: sW(24),
    gap: sW(16),
    borderWidth: 1,
    borderColor: COLORS.primaryGreen,
    borderRadius: sW(24),
    backgroundColor: '#ffffff',
    zIndex: 2,
  },
  image: {
    width: sW(310),
    height: sH(310),
    borderRadius: sW(24),
    borderWidth: 1,
    borderColor: '#224229',
  },
  detailsContainer: {
    gap: sW(16),
  },
  name: {
    gap: sW(4),
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    gap: sW(16),
  },
  detail: {
    flex: 1,
    backgroundColor: '#F4F6F5',
    borderRadius: sW(10),
    padding: sW(8),
    gap: sW(4),
  },
  shadowContainer: {
    position: 'relative',
    marginVertical: sW(16),
    marginBottom: sH(32),
  },
  shadow: {
    position: 'absolute',
    top: sH(4),
    left: sW(4),
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.darkGreen,
    borderRadius: sW(24),
    width: '100%',
    height: '100%',
  },
});
