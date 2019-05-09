const { dbHelper } = require('../../helpers');
const Models = require('../models');

const Controllers = {};

Object.keys(Models).forEach((name) => {
  Controllers[name] = new dbHelper(Models[name]);
});

export default Controllers;
