import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import TypeWriterEffect from '../index';

jest.useFakeTimers();

describe('TypeWriterEffect', () => {
  it('should type out the content over time', async () => {
    const content = 'Hello, world!';
    const { getByText } = render(<TypeWriterEffect content={content} />);
    await waitFor(() => expect(getByText('H')).toBeDefined());
    await waitFor(() => expect(getByText('He')).toBeDefined());
    await waitFor(() => expect(getByText('Hel')).toBeDefined());
    await waitFor(() => expect(getByText('Hell')).toBeDefined());
    await waitFor(() => expect(getByText('Hello')).toBeDefined());
    await waitFor(() => expect(getByText('Hello,')).toBeDefined());
    await waitFor(() => expect(getByText('Hello, ')).toBeDefined());
    await waitFor(() => expect(getByText('Hello, w')).toBeDefined());
    await waitFor(() => expect(getByText('Hello, wo')).toBeDefined());
    await waitFor(() => expect(getByText('Hello, wor')).toBeDefined());
    await waitFor(() => expect(getByText('Hello, worl')).toBeDefined());
    await waitFor(() => expect(getByText('Hello, world')).toBeDefined());
    await waitFor(() => expect(getByText('Hello, world!')).toBeDefined());
  });

  it('should erase the content over time', async () => {
    const content = 'Hello, world!';
    const { getByText } = render(
      <TypeWriterEffect content={content} backspaceEffect />
    );
    await waitFor(() => expect(getByText('Hello, world!')).toBeDefined());
    await waitFor(() => expect(getByText('Hello, world')).toBeDefined());
    await waitFor(() => expect(getByText('Hello, worl')).toBeDefined());
    await waitFor(() => expect(getByText('Hello, wor')).toBeDefined());
    await waitFor(() => expect(getByText('Hello, wo')).toBeDefined());
    await waitFor(() => expect(getByText('Hello, w')).toBeDefined());
    await waitFor(() => expect(getByText('Hello, ')).toBeDefined());
    await waitFor(() => expect(getByText('Hello,')).toBeDefined());
    await waitFor(() => expect(getByText('Hello')).toBeDefined());
    await waitFor(() => expect(getByText('Hell')).toBeDefined());
    await waitFor(() => expect(getByText('Hel')).toBeDefined());
    await waitFor(() => expect(getByText('He')).toBeDefined());
    await waitFor(() => expect(getByText('H')).toBeDefined());
  });

  it('should call onTyped when each character is typed', async () => {
    const content = 'Hello, world!';
    const onTyped = jest.fn();
    render(<TypeWriterEffect content={content} onTyped={onTyped} />);
    await waitFor(() => expect(onTyped).toHaveBeenCalledTimes(content.length), {
      timeout: 3000,
    });
  });

  it('should call onTypingEnd when typing is complete', async () => {
    const content = 'Hello, world!';
    const onTypingEnd = jest.fn();
    render(<TypeWriterEffect content={content} onTypingEnd={onTypingEnd} />);
    await waitFor(() => expect(onTypingEnd).toHaveBeenCalledTimes(1), {
      timeout: 3000,
    });
  });
});
