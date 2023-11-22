import React from 'react';
import type { FC } from 'react';
import { View } from 'react-native';
import type { AnimatedSlideToCompleteProps } from './types';
import { styles } from './styles';

export const AnimatedSlideToCompleteView: FC<
  AnimatedSlideToCompleteProps
> = () => {
  return <View style={styles.container} />;
};
