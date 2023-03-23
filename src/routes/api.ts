import { Router } from 'express';

const router = Router();

// Endpoint ping pong -> Endpoint de teste.

router.get('/ping', (req, res) => {
    res.json({pong: true});
});


router.get('/random', (req, res) => {
    let nRand: number = Math.floor(Math.random() * 10);
    res.json({number: nRand});
});

router.get('/name', (req, res) => {
    let nome: string = 'Diego';
    res.json({nome : nome});
});

router.get('/nome/:nome', (req, res) => {
    let nome: string = req.params.nome;
    res.json({nome});
});


export default router;