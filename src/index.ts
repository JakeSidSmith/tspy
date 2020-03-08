import { collect, Help, Program } from 'jargs';

import { PROGRAM } from './constants';

const message = 'Hello, World!';

const run = (argv: string[]) => {
  return collect(
    Help(
      'help',
      { alias: 'h' },
      Program(PROGRAM, {
        description: 'TypeScript to Python compiler',
        callback: () => {
          // tslint:disable-next-line:no-console
          console.log(message);
        },
      })
    ),
    argv
  );
};

export default run;
