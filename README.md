# react-native-animated-slide-to-complete

React native slide to complete component for `iOS` + `Android`. Component is developed with [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)  

## Installation

Launch a project Terminal and run:

```sh
yarn add react-native-animated-slide-to-complete

```
Or if you use npm:

```sh
npm install react-native-animated-slide-to-complete

```

But also we need to install [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/) and [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/)

## Usage

```js
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
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)