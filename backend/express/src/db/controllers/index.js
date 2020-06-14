import { dbHelper } from '../../helpers';
import * as Models from '../models';

const Controllers = {};

Object.keys(Models).forEach((name) => {
  Controllers[name] = new dbHelper(Models[name]);
});

export default Controllers;
