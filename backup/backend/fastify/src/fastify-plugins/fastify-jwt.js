import fastifyJWT from 'fastify-jwt';
import { jwtSign } from '../config.js';

export default async (fastify) => fastify.register(fastifyJWT, jwtSign);
