import React from 'react';
import { Image, StyleSheet } from 'react-native';
import RightArrow from '../images/arrow-right.png';

const SelfCustomView = () => {
  return (
    <Image resizeMode={'contain'} style={styles.selfImg} source={RightArrow} />
  );
};

const styles = StyleSheet.create({
  selfImg: {
    height: 22,
    width: 22,
    tintColor: 'white',
  },
});

export default SelfCustomView;
