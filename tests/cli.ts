process.argv = ['node', 'dist/cli.js'];
const logSpy = jest.spyOn(console, 'log').mockImplementation(jest.fn());

import { run } from '../src/cli';

describe('cli', () => {
  beforeEach(() => {
    logSpy.mockReset();
  });

  describe('run', () => {
    it('should log a message', () => {
      run(['node', 'dist/cli.js']);

      expect(logSpy).toHaveBeenCalledTimes(1);
      expect(logSpy).toHaveBeenCalledWith('Hello, World!');
    });
  });
});
