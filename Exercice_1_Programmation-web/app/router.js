const { Router } = require('express');
const router = Router();

const mainController = require('./controllers/mainController');

router.get('/', mainController.home);
router.get('/formulaire-creation-question', mainController.form);
router.get('/exemple-question', mainController.question);
router.post('/create', mainController.nouvelleQuestion);

module.exports = router;