import { Server } from '@dalisoft/ws-events-sync';
import { getFromHeaders } from '@dalisoft/cookie';
import { dev } from '../config';

export default (callback, wss, allowedOrigins, onlineClientsMap) => {
  return (client, req) => {
    const { origin } = req.headers;
    client.clients = wss.clients;

    if (!req.cookies) {
      req.cookies = getFromHeaders(req.headers);
    }
    if (dev || allowedOrigins.indexOf(origin) !== -1) {
      return callback(new Server(client, onlineClientsMap), req);
    }
    client.send(
      JSON.stringify({ error: true, message: 'Not allowed by CORS' })
    );
    client.close();
  };
};
