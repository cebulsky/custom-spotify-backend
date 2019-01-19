import * as express from 'express'
import { HomeController } from './controllers/home.controller';
import { AlbumController } from './controllers/album.controller';
import * as bodyParser from 'body-parser'

export class RestServer {

    private app: express.Application = express();

    constructor() {
        this.setupGlobalMiddleware();
        this.mountRoutes();
    }

    startRestServer(port: number) {
        this.app.listen(port, function () {
            console.log(`REST server is working on localhost, port ${port}`)
        });
    }

    private setupGlobalMiddleware(): any {
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(bodyParser.json())
    }
    private mountRoutes(): any {
        this.app.use('/', HomeController)
        this.app.use('/album', AlbumController)
    }
}