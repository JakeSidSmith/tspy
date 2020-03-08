declare module 'io' {
  export class RawIOBase {
    read(size?: number): Optional<string>;
    close(): void;
  }
}
