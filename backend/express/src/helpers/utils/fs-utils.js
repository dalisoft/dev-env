import path from 'path';
import { promises as fs } from 'fs';
import { assetsPath } from '../../constants.js';

export const createFolder = (name) => {
  const filepath = path.resolve(name);
  return fs.readdir(filepath).catch(() => fs.mkdir(name));
};
export const resolveDocsPath = (name) => {
  const filepath = path.join(assetsPath, 'docs', name);
  return filepath;
};
export const removeFile = (filepath) => fs.unlink(filepath);

export { assetsPath };
