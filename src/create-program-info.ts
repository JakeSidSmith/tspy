import * as globule from 'globule';
import { Tree } from 'jargs';
import * as path from 'path';
import * as ts from 'typescript';

import { MATCHES_GLOB } from './constants';
import { ProgramInfo } from './types';

export const createProgramInfo = (tree: Tree): ProgramInfo => {
  const cwd = process.cwd();

  if (
    !(
      typeof tree.kwargs.project === 'string' ||
      typeof tree.kwargs.project === 'undefined'
    )
  ) {
    throw new Error(`Unexpected type of project ${tree.kwargs.project}`);
  }

  const projectPath = path.resolve(cwd, tree.kwargs.project || 'tsconfig.json');
  const projectDir = path.dirname(projectPath);
  const projectJson = ts.readConfigFile(projectPath, ts.sys.readFile);
  const outDir = path.resolve(cwd, projectJson.config.outDir || cwd);

  const extensions = projectJson.config?.allowJS
    ? '**/*.{ts,tsx,js,jsx}'
    : '**/*.{ts,tsx}';

  const includes = projectJson.config?.include?.length
    ? projectJson.config?.include?.map((pattern: string) =>
        path.resolve(
          projectDir,
          MATCHES_GLOB.test(pattern) ? pattern : path.join(pattern, extensions)
        )
      )
    : [];

  const excludes = projectJson.config?.exclude?.length
    ? projectJson.config?.exclude?.map(
        (pattern: string) => `!${path.resolve(projectDir, pattern)}`
      )
    : [];

  const globs = [...includes, ...excludes];

  const sourceFileNames = globule.find(globs);

  if (!sourceFileNames.length) {
    throw new Error(
      'Could not find any files matching tsconfig include/exclude settings'
    );
  }

  const compilerOptions = ts.parseJsonConfigFileContent(
    projectJson.config,
    ts.sys,
    cwd
  ).options;

  const program = ts.createProgram(sourceFileNames, compilerOptions);
  const checker = program.getTypeChecker();
  const sourceFiles = program.getSourceFiles();

  if (!sourceFiles.length) {
    throw new Error('Could not find any source files');
  }

  return {
    projectPath,
    projectDir,
    projectJson,
    outDir,
    includes,
    excludes,
    globs,
    sourceFileNames,
    compilerOptions,
    program,
    checker,
    sourceFiles,
  };
};
