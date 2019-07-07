import nanoexpress from 'nanoexpress';
import './env';
import { dev } from './config';
import appPlugins from './app-plugins';
import appHandler from './errors';

import appRoutes from './routes';

const app = nanoexpress();

app.register(appPlugins);
app.register(appHandler);
app.register(appRoutes);

const port = process.env.PORT || 3000;
app.listen(port);
