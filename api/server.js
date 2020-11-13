require('dotenv').config();
require('./utils/database');

const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const server = Hapi.server({
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'localhost',
  routes: { cors: true }
});

const startServer = async () => {
  try {
    routes.forEach((route) => {
      server.route(route);
    });
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
  } catch (err) {
    console.error(err);
  }
};
startServer();
module.exports = server;