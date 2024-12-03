import {Dimensions} from 'react-native';

export const isLandscape = () => {
  const {width, height} = Dimensions.get('window');
  return width > height;
};
