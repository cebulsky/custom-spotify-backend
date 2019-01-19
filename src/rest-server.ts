import * as express from 'express'
import { HomeController } from './controllers/home.controller';
import { AlbumController } from './controllers/album.controller';

export class RestServer {
    private mountRoutes(): any {
        this.app.use('/', HomeController)
        this.app.use('/album', AlbumController)
    }
    private app: express.Application = express();

    constructor() {
        this.mountRoutes();
    }

    startRestServer(port: number) {
        this.app.listen(port, function () {
            console.log(`REST server is working on localhost, port ${port}`)
        });
    }
}