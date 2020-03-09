import * as globule from 'globule';
import { Tree } from 'jargs';
import * as path from 'path';

import { createProgramInfo } from '../create-program-info';
import * as logger from '../logger';
import compileFile from './file';

const compile = (tree: Tree) => {
  try {
    const programInfo = createProgramInfo(tree);

    programInfo.sourceFiles.forEach(file => {
      const absolutePath = path.resolve(programInfo.projectDir, file.fileName);

      if (globule.isMatch(programInfo.globs, absolutePath)) {
        compileFile(file, programInfo);
      }
    });
  } catch (error) {
    logger.error(error);
  }
};

export default compile;
