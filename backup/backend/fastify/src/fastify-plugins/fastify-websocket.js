import { corsWhitelist } from '../config.js';
import { wsWrap } from '../helpers/index.js';
import Server from 'ws/lib/websocket-server.js';
import fastifyPlugin from 'fastify-plugin';

export default fastifyPlugin((fastify, options, next) => {
  const onlineClientsMap = {};

  const clients = {};

  fastify.addHook('onRequest', (req, res, next) => {
    if (req.headers.cookie) {
      clients[req.headers.cookie] = req;
    }
    next();
  });

  function findClient(cookie, tries = 10) {
    let timerId;
    return new Promise(function findClientPromise(resolve, reject) {
      if (clients[cookie]) {
        clearTimeout(timerId);
        resolve(clients[cookie], cookie);
      } else if (tries === 0) {
        clearTimeout(timerId);
        reject(
          new Error(
            'Initial request to server is required ' +
              'to be WebSocket and it is verify mechanism'
          )
        );
      } else {
        timerId = setTimeout(findClient, tries-- * 100, resolve, reject);
      }
    });
  }

  fastify.ws = (path, fn) => {
    const wss = new Server({
      verifyClient(info, done) {
        findClient(info.req.headers.cookie)
          .then((request, key) => {
            Object.assign(info.req, request);
            done(corsWhitelist.includes(info.origin));
            delete clients[key];
          })
          .catch((code) => done(false, code, info.req.headers));
      },
      server: fastify.server,
      path
    });

    fastify.addHook('onClose', (fastify, done) => {
      wss.close(done);
    });
    wss.on('connection', wsWrap(fn, wss, corsWhitelist, onlineClientsMap));

    return wss;
  };

  next();
});
