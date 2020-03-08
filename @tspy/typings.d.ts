import * as io from 'io';

declare global {
  type None = null;
  type Optional<T> = T | None;

  type OpenMode = 'r';
  type Encoding = 'utf-8';

  function open(
    path: string,
    mode: OpenMode,
    encoding?: Encoding
  ): io.RawIOBase;

  function print(message: string): void;
}
