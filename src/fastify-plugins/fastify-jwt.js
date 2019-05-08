import fastifyJWT from 'fastify-jwt';
import { jwtSign } from '../config';

export default async (fastify) => fastify.register(fastifyJWT, jwtSign);
