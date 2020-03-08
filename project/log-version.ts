import * as json from 'json';
import * as os from 'os';

const run = () => {
  const absPath = os.path.abspath(os.path.join(os.getcwd(), 'package.json'));
  const file = open(absPath, 'r', 'utf-8');
  const contents = file.read();
  file.close();

  if (contents) {
    const parsed = json.loads(contents);

    print(parsed.version);
  }
};

run();
