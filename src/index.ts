import { collect, Help, KWArg, Program } from 'jargs';

import compile from './compile';
import { PROGRAM } from './constants';

const run = (argv: string[]) => {
  return collect(
    Help(
      'help',
      { alias: 'h' },
      Program(
        PROGRAM,
        {
          description: 'TypeScript to Python compiler',
          callback: compile,
        },
        KWArg('project', {
          alias: 'p',
          description: 'Path to tsconfig.json file',
        })
      )
    ),
    argv
  );
};

export default run;
