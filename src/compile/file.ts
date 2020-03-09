import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';

import { MATCHES_EXTENSION } from '../constants';
import * as logger from '../logger';
import { ProgramInfo } from '../types';

const traverseNode = (
  node: ts.Node,
  programInfo: ProgramInfo,
  outputLines: string[]
) => {
  logger.log(`${ts.SyntaxKind[node.kind]}: ${node.getText()}`);

  node.forEachChild(child => {
    traverseNode(child, programInfo, outputLines);
  });

  return outputLines;
};

const compileFile = (file: ts.SourceFile, programInfo: ProgramInfo) => {
  file.forEachChild(node => {
    const outputLines = traverseNode(node, programInfo, []);

    const outPath = path
      .resolve(programInfo.projectDir, file.fileName)
      .replace(MATCHES_EXTENSION, '.py');
    const contents = outputLines.join('\n');

    fs.writeFileSync(outPath, contents, 'utf8');
  });
};

export default compileFile;
