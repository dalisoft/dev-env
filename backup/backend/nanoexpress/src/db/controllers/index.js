import { dbHelper } from '../../helpers/index.js';
import * as Models from '../models/index.js';

const Controllers = {};

Object.keys(Models).forEach((name) => {
  Controllers[name] = new dbHelper(Models[name]);
});

export default Controllers;
