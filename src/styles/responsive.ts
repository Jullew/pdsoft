import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const BASE_WIDTH = 390;
const BASE_HEIGHT = 844;

export const sW = (px: number): number => wp((px / BASE_WIDTH) * 100);
export const sH = (px: number): number => hp((px / BASE_HEIGHT) * 100);
export const sF = (size: number): number => {
  const scale = BASE_WIDTH / BASE_HEIGHT > 1 ? sW(size) : sH(size);
  return Math.round(scale);
};
