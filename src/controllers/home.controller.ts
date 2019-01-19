import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('REST server is working.')
});

export const HomeController = router;