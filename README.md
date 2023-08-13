# react-native-typewriter-effect

Typing animation library for React Native.

![Demo](./demo.gif)

## Installation

```sh
npm install react-native-typewriter-effect
```

## Usage

```tsx
import TypeWriterEffect from 'react-native-typewriter-effect';

export default function App() {
  return (
    <View>
      <TypeWriterEffect content="Hello World!" />
    </View>
  );
}
```

## Documentation

### content

type: `string`

Required. The text to be typed.

### maxDelay

type: `number`

The maximum delay between each character.

### minDelay

type: `number`

The minimum delay between each character.

### onTyped

type: `(char: string, index: number) => void`

Callback function that is called when a character is typed.

### onTypingEnd

type: `() => void`

Callback function that is called when the typing ends.

### style

type: `StyleProp<TextStyle>`

The style of the text.

### vibration

type: `boolean`

Android only. Whether to vibrate when a character is typed.

### backspaceEffect

type: `boolean`

Whether to use backspace effect.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
