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

## Properties

| Props | type | Description |
| ---------| ------- | ------------- |
| `style` | ViewStyle | It's a prop for arranging and styling button layouts. | 
| `SelfView` | ReactElement | It allows you to create a custom appearance for the sliding button's thumb view. |
| `selfStyle` | ViewStyle | It's a prop employed to customize the appearance of the thumb view; otherwise, the default style will be applied. |
| `startTitle` | String | Specify a `text` to appear on the left side when sliding the thumb to the right. |
| `endTitle` | String | Specify a `text` to appear on the right side when sliding the thumb to the left. |
| `startStyle` | TextStyle | Apply a style to the `startTitle`. |
| `endStyle` | TextStyle | Apply a style to the `endTitle`. |
| `isReset` | Boolean | Setting to `true` resets the thumb when sliding to the end of the button. |

## Methods

| Name | Description |
| --------- | ------------- |
| `reset` | Invoke method to reset thumb appearance, returning to default state. |



## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)