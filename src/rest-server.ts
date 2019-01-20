import * as express from 'express'
import * as bodyParser from 'body-parser'
import { ApiRouter } from './routing/api.router';
import { HomeRouter } from './routing/home.router';
import { connectToMongoDb } from './mongoDb';
import * as cors from 'cors';

export class RestServer {

    private app: express.Application = express();

    constructor() {
        this.setupGlobalMiddleware();
        this.mountRoutes();
    }

    startRestServer(port: number) {

        connectToMongoDb();

        this.app.listen(port, function () {
            console.log(`REST server is working on localhost, port ${port}`)
        });
    }

    private setupGlobalMiddleware(): any {
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(bodyParser.json())
        this.app.use(cors());
    }
    private mountRoutes(): any {
        this.app.use('/', HomeRouter)
        this.app.use('/api', ApiRouter)
    }
}