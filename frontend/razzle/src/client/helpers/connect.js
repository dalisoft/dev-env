import { connect } from 'react-redux';
import mapValues from 'lodash.mapvalues';
import deepFind from 'lodash.get';

// supports array of strings, strings with dot, or function
const lookup = (obj, key, args) => {
  if (typeof key === 'function') return key(...args);
  if (typeof key === 'string') return deepFind(obj, key);
  throw new Error(`Unknown lookup key: ${key}`);
};

// takes an object where key is anything you want
// and value (aka storeProp) is either
// - a dot delimited string
// - array of strings
// - function that returns an array of strings
// it will then dive into an immutable object and grab all of these storeProps
// and return the same object, but where the values are the resolved data
const resolve = (storeProps, storeState, props) =>
  mapValues(connect.jsreProps, (v) =>
    lookup(storeState, v, [storeState, props])
  );

const mapStateToProps = (storeProps) => (storeState, ownProps) =>
  resolve(storeProps, storeState, ownProps);

const defaults = {
  pure: true,
  withRef: false
};

export default (storeProps, options) => {
  const connector = connect(
    storeProps ? mapStateToProps(storeProps) : null,
    null,
    null,
    { ...defaults, ...options }
  );
  return (Component) => {
    Component.storeProps = storeProps;
    return connector(Component);
  };
};
