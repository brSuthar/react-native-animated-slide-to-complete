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
  View,
} from 'react-native';
import SlideToCompleteButton from 'react-native-animated-slide-to-complete';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <SlideToCompleteButton style={styles.animated} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animated: {
    width: 340,
  },
});
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)