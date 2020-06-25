/* eslint-disable import/order */
import './load-env.js';
import { port } from './constants.js';

// Express and it's Middlewares list instance
import express from 'express';
import * as middlewares from './middlewares/index.js';

// Load routes list
import auth from './routes/auth/index.js';

// Create server instance
const server = express();

/*
 * Configuration
 */
// Disable unnecessary tags
server.disable('etag');
server.disable('x-powered-by');

// Set needed configuration at instance-level
server.set('json spaces', 2);

/*
 * Middlewares
 */

// CORS middleware
server.use(middlewares.cors);

// Cookie parse middleware
server.use(middlewares.cookie);

// Documentation middleware
server.use('/api_docs', middlewares.swagger.serve);
server.get('/api_docs', middlewares.swagger.documentation);

// Body JSON parse middleware
server.use(middlewares.bodyJson);
server.use(middlewares.bodyNullFix);

/*
 * Routes
 * Most of these routes are CRUD implementation
 */
// Health-check route
server.get('/', (_, res) => {
  res.send({ status: 'success', code: 200 });
});

// Auth route
server.use('/auth', middlewares.jwtToken, auth);

// All errors handling
server.use(middlewares.handleError);
server.use((req, res) => {
  res.status(404);
  res.send({
    status: 404,
    message: 'Страница не найден!',
  });
});

/*
 * Listening...
 */
server.listen(port, () => {
  console.log(`[Server]: Listening at :${port}`);
});
