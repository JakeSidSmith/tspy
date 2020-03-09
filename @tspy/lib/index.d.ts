interface Console {
  readonly error(message?: any, ...optionalParams: any[]): void;
  readonly info(message?: any, ...optionalParams: any[]): void;
  readonly log(message?: any, ...optionalParams: any[]): void;
  readonly warn(message?: any, ...optionalParams: any[]): void;
}

declare const console: Console;
