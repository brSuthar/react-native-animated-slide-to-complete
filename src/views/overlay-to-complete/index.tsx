import React, { memo } from 'react';
import { View } from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import { styles } from './styles';
import { useAnimatedGestureHandler } from 'react-native-reanimated';

const OverlayToComplete = () => {
  const handler = useAnimatedGestureHandler({
    onStart: () => {},
    onActive: () => {},
    onFinish: () => {},
    onEnd: () => {},
    onFail: () => {},
  });

  return (
    <GestureHandlerRootView>
      <PanGestureHandler onGestureEvent={handler}>
        <View style={styles.container} />
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

export default memo(OverlayToComplete);
