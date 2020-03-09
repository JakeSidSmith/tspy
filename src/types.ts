import * as ts from 'typescript';

export interface ProgramInfo {
  projectPath: string;
  projectDir: string;
  projectJson: {
    config?: any;
    error?: ts.Diagnostic;
  };
  outDir: string;
  includes: string[];
  excludes: string[];
  globs: string[];
  sourceFileNames: string[];
  compilerOptions: ts.CompilerOptions;
  program: ts.Program;
  checker: ts.TypeChecker;
  sourceFiles: ReadonlyArray<ts.SourceFile>;
}
