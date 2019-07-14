import nanoexpress from 'nanoexpress';
import server from './server';

(async () => {
const instance = nanoexpress();
let app = await server(instance);
const port = process.env.PORT || 3000;

if (module.hot) {
  module.hot.accept('./server', async () => {
    console.log('🔁  HMR Reloading `./server`...');
    try {
      instance.close();
      app = await server(instance, port);
      await instance.listen(port);
    } catch (error) {
      console.error(error);
    }
  });
  module.hot.accept('./routes', async () => {
    console.log('🔁  HMR Reloading `./routes`...');
    try {
      instance.close();
      app = await server(instance, port);
      await instance.listen(port);
    } catch (error) {
      console.error(error);
    }
  });
  console.info('✅  Server-side HMR Enabled!');
}

})();
