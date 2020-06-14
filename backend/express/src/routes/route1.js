import { Router } from 'express';
import { Controller1 } from '../controllers';

const app = Router({ mergeParams: true });
app.get('/', (req, res) => res.send('hello'));

app.get('/hello', async (req, res) =>
  res.json(await new Controller1(req).Hello())
);

app.get('/get/:id', (req, res) =>
  res.json({
    message: 'get called on /get/' + req.params.id
  })
);

app.get('/post/profile', (req, res) =>
  res.json({
    message: 'get called on /post/profile'
  })
);
app.post('/post/profile/:id', (req, res) =>
  res.json({
    message: 'post on /post/profile/' + req.params.id
  })
);
app.put('/post/profile/:id/verify/:token', (req, res) =>
  res.json({
    message:
      'put on /post/profile/' + req.params.id + '/verify/' + req.params.token
  })
);
app.post('/post/profile/:id/verify', (req, res) =>
  res.json({
    message: 'post on /post/profile/' + req.params.id + '/verify'
  })
);
export default app;
