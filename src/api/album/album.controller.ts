import { Album } from './album.model'
import { generateControllers } from '../../modules/crudController.factory'

export const AlbumController = generateControllers(Album);