import {View} from 'react-native';
import React from 'react';
import Logo from '../../assets/images/logo.svg';
import {styles} from './Header.styled';
import {sH, sW} from '../../styles/responsive';

const Header = () => {
  return (
    <View style={styles.container}>
      <Logo height={sH(32)} width={sW(105)} />
    </View>
  );
};

export default Header;
