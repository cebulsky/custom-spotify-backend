import { Router } from 'express'
import { AlbumController } from './album.controller'

export const AlbumRouter = Router()

AlbumRouter.param('id', AlbumController.findByParam)

AlbumRouter.route('/')
    .get(AlbumController.getAll)
    .post(AlbumController.createOne)

AlbumRouter.route('/:id')
    .get(AlbumController.getOne)
    .put(AlbumController.updateOne)
    .delete(AlbumController.deleteOne)
