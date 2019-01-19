import { RestServer } from './rest-server'

const restServer = new RestServer();
const port = 8080;

restServer.startRestServer(port);