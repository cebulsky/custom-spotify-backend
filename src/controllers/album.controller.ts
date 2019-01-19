import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({ title: 'Thriller', year: 1998 })
})

export const AlbumController = router;