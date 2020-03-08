import run from '../src';

describe('index', () => {
  describe('run', () => {
    it('should log a message', () => {
      const logSpy = jest.spyOn(console, 'log').mockImplementation(jest.fn());

      run(['node', 'dist/cli.js']);

      expect(logSpy).toHaveBeenCalledTimes(1);
      expect(logSpy).toHaveBeenCalledWith('Hello, World!');
    });
  });
});
