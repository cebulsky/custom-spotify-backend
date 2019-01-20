import { Router } from 'express'
import { AlbumController } from './album.controller'

export const songRouter = Router()

songRouter.param('id', AlbumController.findByParam)

songRouter.route('/')
    .get(AlbumController.getAll)
    .post(AlbumController.createOne)

songRouter.route('/:id')
    .get(AlbumController.getOne)
    .put(AlbumController.updateOne)
    .delete(AlbumController.deleteOne)
