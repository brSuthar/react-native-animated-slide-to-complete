import React, {
  type FC,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  type PanGestureHandlerGestureEvent as GestureTypes,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { type LayoutChangeEvent } from 'react-native';

import { type IContext, type ISlideToCompleteButton } from './types';
import { styles } from './styles';
import SelfThumb from './self-custom-view';

const SlideToCompleteButton: FC<ISlideToCompleteButton> = forwardRef(
  (props: ISlideToCompleteButton, ref: any) => {
    const {
      SelfView,
      startTitle,
      endTitle,
      startStyle,
      endStyle,
      style,
      isReset,
      selfStyle,
    } = props;

    const transX = useSharedValue(0);
    const completeOpacity = useSharedValue(0);
    const pendingOpacity = useSharedValue(1);

    const [width, setWidth] = useState(0);
    const [self, setSelf] = useState({ width: 0, height: 0 });

    const length = useMemo(() => {
      return width - self.width;
    }, [width, self.width]);

    const minLength = useMemo(() => {
      return (width / 100) * 60;
    }, [width]);

    useImperativeHandle(ref, () => {
      return {
        resetSlide: resetSlide,
      };
    });

    const onViewLayout = (evt: LayoutChangeEvent) => {
      width === 0 && setWidth(evt.nativeEvent.layout.width);
    };

    const onSelfLayout = (evt: LayoutChangeEvent) => {
      const { width: value, height } = evt.nativeEvent.layout;
      setSelf({ width: value, height });
    };

    const resetSlide = () => {
      transX.value = withTiming(0, { duration: 700 });
      completeOpacity.value = withTiming(0, { duration: 800 });
    };

    function onReachedEnd() {
      'worklet';
      if (isReset) {
        transX.value = withDelay(2000, withTiming(0));
        completeOpacity.value = withDelay(2000, withTiming(0));
      }
    }

    const gestureHanlder = useAnimatedGestureHandler<GestureTypes, IContext>({
      onStart: (event, context) => {
        context.activity = event.x < self.width;
      },
      onActive: (event, context) => {
        const { translationX } = event;
        if (translationX > 0 && translationX < width && context.activity) {
          transX.value = translationX > length ? length : translationX;
          if (translationX <= minLength) {
            completeOpacity.value = translationX / minLength;
          }
        }
      },
      onFinish: (event, context) => {
        if (event.translationX > minLength) {
          transX.value = withTiming(length, {}, () => {
            queueMicrotask(onReachedEnd);
          });
          completeOpacity.value = withTiming(1);
        } else {
          if (context.activity) {
            transX.value = withTiming(0);
            completeOpacity.value = withTiming(0);
          }
        }
      },
    });

    const viewStyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateX: transX.value }],
      };
    });

    const preStyle = useAnimatedStyle(() => {
      return {
        opacity: completeOpacity.value,
        color: 'white',
      };
    });

    const postStyle = useAnimatedStyle(() => {
      return {
        opacity: pendingOpacity.value - completeOpacity.value,
        color: 'white',
      };
    });

    return (
      <GestureHandlerRootView>
        <PanGestureHandler
          shouldCancelWhenOutside
          onGestureEvent={gestureHanlder}
        >
          <Animated.View onLayout={onViewLayout} style={[styles.view, style]}>
            <Animated.View
              onLayout={onSelfLayout}
              style={[styles.self, selfStyle, viewStyle]}
            >
              {SelfView}
            </Animated.View>
            <Animated.Text style={[styles.complete, startStyle, preStyle]}>
              {startTitle}
            </Animated.Text>
            <Animated.Text style={[styles.pending, endStyle, postStyle]}>
              {endTitle}
            </Animated.Text>
          </Animated.View>
        </PanGestureHandler>
      </GestureHandlerRootView>
    );
  }
);

SlideToCompleteButton.defaultProps = {
  SelfView: <SelfThumb />,
  startTitle: 'COMPLETED',
  endTitle: 'SLIDE TO COMPLETE',
  startStyle: styles.complete,
  endStyle: styles.pending,
  isReset: false,
};

export default SlideToCompleteButton;
