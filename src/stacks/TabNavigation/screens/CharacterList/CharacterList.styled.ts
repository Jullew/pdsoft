import {StyleSheet} from 'react-native';
import {sH, sW} from '../../../../styles/responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  charactersList: {
    flex: 1,
    gap: sW(8),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    width: '100%',
  },
  flatListContainer: {
    alignItems: 'center',
    gap: sW(50),
    paddingBottom: sH(50),
  },
});
