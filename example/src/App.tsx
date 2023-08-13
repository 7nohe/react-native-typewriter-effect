import * as React from 'react';

import { Button, StyleSheet, TextInput, View } from 'react-native';
import TypeWriterEffect from 'react-native-typewriter-effect';

export default function App() {
  const [text, setText] = React.useState('');
  const [content, setContent] = React.useState('Hello World!');
  return (
    <View style={styles.container}>
      <View style={styles.textField}>
        <TextInput
          value={text}
          placeholder="Type something here..."
          style={styles.textInput}
          onChange={(e) => {
            setText(e.nativeEvent.text);
          }}
        />
        <Button
          title="Start"
          onPress={() => {
            setContent(text);
          }}
        />
      </View>
      <TypeWriterEffect
        style={styles.typeWriterEffect}
        content={content}
        onTyped={(char, index) => {
          console.log(`Typed "${char}" at index ${index}`);
        }}
        onTypingEnd={() => {
          console.log('Typing ended.');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textField: {
    flexDirection: 'row',
    gap: 20,
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  textInput: {
    width: 180,
  },
  typeWriterEffect: {
    fontSize: 24,
    padding: 20,
  },
});
