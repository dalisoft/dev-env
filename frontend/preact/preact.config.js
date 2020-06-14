export default (config, env, helpers) => {
	delete config.entry.polyfills;
	config.output.filename = '[name].js';

	if (env.production) {
		config.output.libraryTarget = 'umd';
		config.devtool = false; // disable sourcemaps
	}
};
