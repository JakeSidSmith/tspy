import * as globule from 'globule';
import { Tree } from 'jargs';
import * as path from 'path';

import { createProgram } from './create-program';
import * as logger from './logger';

const compile = (tree: Tree) => {
  const cwd = process.cwd();
  const { program, projectDir, globs } = createProgram(tree);

  const sourceFiles = program.getSourceFiles();
  // const checker = program.getTypeChecker();

  if (!sourceFiles.length) {
    throw new Error('Could not find any source files');
  }

  sourceFiles.forEach(file => {
    const relativePath = path.relative(cwd, file.fileName);
    const absolutePath = path.resolve(projectDir, file.fileName);

    if (globule.isMatch(globs, absolutePath)) {
      logger.log(relativePath);
    }
  });
};

export default compile;
