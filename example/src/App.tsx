import * as React from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SlideToCompleteButton from 'react-native-animated-slide-to-complete';

export default function App() {
  const slideRef = React.useRef();

  const onResetClick = () => {
    slideRef.current.resetSlide();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <SlideToCompleteButton style={styles.animated} ref={slideRef} />

      <TouchableOpacity onPress={onResetClick} style={styles.resetBtn}>
        <Text style={styles.reset}>RESET</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#010B40',
  },
  gestureView: {
    flex: 1,
  },
  animated: {
    width: 340,
  },
  resetBtn: {
    width: '80%',
    height: 48,
    backgroundColor: '#1A73EB',
    marginTop: 30,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reset: {
    fontSize: 17,
    fontWeight: '700',
    color: '#FFF',
  },
});
