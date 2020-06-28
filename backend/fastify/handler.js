import awsLambdaFastify from 'aws-lambda-fastify';
import app from './src/instance';

const proxy = awsLambdaFastify(app());

export default proxy;
