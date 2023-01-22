import cors from '@fastify/cors';
import Fastify from 'fastify';
import { apppRoutes } from './routes';

const app = Fastify();

app.register(cors);

app.register(apppRoutes)

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP server running!')
})