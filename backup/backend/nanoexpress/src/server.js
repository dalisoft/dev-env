import nanoexpress from 'nanoexpress-pro';
import './env.js';
import appPlugins from './app-plugins/index.js';
import appHandler from './errors/index.js';
import swagger from '../docs-config.js';

import appRoutes from './routes/index.js';

const app = nanoexpress({ swagger });

app.define(appPlugins);
app.define(appHandler);
app.define(appRoutes);

const port = process.env.PORT || 3000;
app.listen(port);
