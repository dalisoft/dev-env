import nanoexpress from '@nanoexpress/pro-slim/cjs/nanoexpress';
import server from './server';

(async () => {
  const instance = nanoexpress();
  // eslint-disable-next-line no-unused-vars
  const app = await server(instance);
  const port = process.env.PORT || 3000;

  if (module.hot) {
    module.hot.accept('./server', async () => {
      console.log('🔁  HMR Reloading `./server`...');
      try {
        instance.close();
        await instance.listen(port);
      } catch (error) {
        console.error(error);
      }
    });
    module.hot.accept('./routes', async () => {
      console.log('🔁  HMR Reloading `./routes`...');
      try {
        instance.close();
        await instance.listen(port);
      } catch (error) {
        console.error(error);
      }
    });
    await app.listen(port);
    console.info('✅  Server-side HMR Enabled!');
  }
})();
