import { dev } from '../config';

export default (callback, wss, allowedOrigins) => {
  return (client, req) => {
    const { origin } = req.headers;
    client.clients = wss.clients;

    if (dev || allowedOrigins.indexOf(origin) !== -1) {
      return callback(client, req);
    }
    client.send(
      JSON.stringify({ error: true, message: 'Not allowed by CORS' })
    );
    client.close();
  };
};
