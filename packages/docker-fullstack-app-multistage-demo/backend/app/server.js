const cluster = require('cluster');
const os = require('os');

const CLUSTER_THREAD = os.cpus().length;

if (CLUSTER_THREAD > 1 && cluster.isMaster) {
  let i = 1;
  while (i < CLUSTER_THREAD) {
    cluster.fork();
    i++;
  }

  cluster.on('exit', () => cluster.fork());
} else {
  require('./worker');
}
