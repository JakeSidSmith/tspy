import * as chalk from 'chalk';

const getMessage = (message: unknown): string => {
  if (typeof message === 'string' || typeof message === 'number') {
    return message.toString();
  }

  if (message instanceof Error) {
    return message.message || message.toString() || 'Unknown error';
  }

  try {
    return JSON.stringify(message);
  } catch {
    return 'Unknown error';
  }
};

const _log = (
  message: string | number | Error,
  color: 'white' | 'cyan' | 'red' | 'yellow'
) => {
  // tslint:disable-next-line:no-console
  console.error(getMessage(chalk[color](message)));
};

export const log = (message: string | number | Error) => {
  _log(message, 'white');
};

export const error = (message: string | number | Error, exit?: boolean) => {
  _log(message, 'red');

  if (exit) {
    process.exit(1);
  }
};
