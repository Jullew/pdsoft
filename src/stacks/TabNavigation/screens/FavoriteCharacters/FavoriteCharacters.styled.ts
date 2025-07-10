import {StyleSheet} from 'react-native';
import {sH} from '../../../../styles/responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  favsList: {
    flex: 1,
    alignItems: 'center',
  },
  flatList: {
    gap: sH(50),
    width: '100%',
    paddingBottom: sH(50),
  },
});
