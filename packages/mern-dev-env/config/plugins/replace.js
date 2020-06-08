import replace from 'rollup-plugin-replace';

export default replace({
  'process.env.NODE_ENV': JSON.stringify(
    process.env.NODE_ENV || 'production'
  )
});
