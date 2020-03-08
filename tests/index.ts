import * as index from '../src';

describe('index', () => {
  it('should export a message', () => {
    expect(index.message).toBe('Hello, World!');
  });
});
