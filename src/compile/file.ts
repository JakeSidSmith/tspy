import * as ts from 'typescript';

import * as logger from '../logger';
import { ProgramInfo } from '../types';

const traverseNode = (node: ts.Node, programInfo: ProgramInfo) => {
  logger.log(`${ts.SyntaxKind[node.kind]}: ${node.getText()}`);

  node.forEachChild(child => {
    traverseNode(child, programInfo);
  });
};

const compileFile = (file: ts.SourceFile, programInfo: ProgramInfo) => {
  file.forEachChild(node => {
    traverseNode(node, programInfo);
  });
};

export default compileFile;
