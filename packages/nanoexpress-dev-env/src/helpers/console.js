import consolemd from 'consolemd';

const csl = (type) => (...args) => {
  try {
    consolemd[type](...args);
  } catch (e) {
    args = args.map((arg) => {
      if (typeof arg === 'string') {
        arg = arg.replace(/([!#()*]|green|yellow|blue|cyan|magento)/g, '');
      }
      return arg;
    });
    console.error('Error occured with module ConsoleMD');
    console[type](...args);
  }
};

const log = csl('log');
const warning = csl('warning');
const debug = csl('debug');
const error = csl('error');

export { log, warning, debug, error };
