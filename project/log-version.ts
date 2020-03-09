import * as fs from 'fs';
import * as path from 'path';

const run = () => {
  const absPath = path.resolve(process.cwd(), 'package.json');
  const contents = fs.readFileSync(absPath, 'utf8');

  const parsed = JSON.parse(contents);

  // tslint:disable-next-line:no-console
  console.log(parsed.version);
};

run();
