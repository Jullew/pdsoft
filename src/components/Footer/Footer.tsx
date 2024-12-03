import {useWindowDimensions, View} from 'react-native';
import React from 'react';
import Logo from '../../assets/images/logo.svg';
import {styles} from './Footer.styled';
import {sH} from '../../styles/responsive';

const Footer = () => {
  const {width, height} = useWindowDimensions();
  const isLandscape = width > height;

  if (isLandscape) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Logo height={sH(92)} />
    </View>
  );
};

export default Footer;
