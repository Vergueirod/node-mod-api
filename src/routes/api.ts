import { Router } from 'express';

import * as apiController from '../controllers/apiController';

const router = Router();

// Endpoint ping pong -> Endpoint de teste.

router.get('/ping', apiController.ping);
router.get('/random', apiController.random);
router.get('/name', apiController.name);
router.get('/nome/:nome', apiController.nome);


router.post('/frases', apiController.createPhrase);
router.get('/frases', apiController.listPhrases);
router.get('/frases/:id', apiController.getPhrases);
router.put('/frases/:id', apiController.updatePhrases);
router.delete('/frases/:id', apiController.deletePhrases);







export default router;