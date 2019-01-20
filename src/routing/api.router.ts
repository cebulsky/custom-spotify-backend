import { Router, Request, Response } from 'express';
import { AlbumRouter } from '../api/album/album.router';

const router = Router();

router.use('/album', AlbumRouter)

export const ApiRouter = router;