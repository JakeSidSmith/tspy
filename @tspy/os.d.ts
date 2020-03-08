declare module 'os' {
  export function getcwd(): string;

  export const path = {
    join: (...parts: string[]) => string,
    abspath: string => string,
  };
}

declare module 'os/path' {
  import * as os from 'os';
  export = os.path;
}
