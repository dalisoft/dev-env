const nanoexpress = require('nanoexpress');

const app = nanoexpress();

app.use(async (req, res, next) => {
  res.writeHeader('Access-Control-Allow-Origin', 'http://localhost');
  res.writeHeader('Access-Control-Allow-Headers', 'Content-Type, Origin');
  res.writeHeader('Access-Control-Request-Method', '*');
  res.writeHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
});

app.options('/*', (req, res) => {
  res.writeStatus('200 OK');
  res.end('OK');
});
app.get('/', (req, res) => {
  res.send({ type: 'get', page: 'index' });
});
app.get('/time', (req, res) => {
  res.send({ time: new Date().toUTCString() });
});

app.listen(process.env.PORT || 3000);
