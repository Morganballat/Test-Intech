
const { Router } = require('express');

const router = Router();

const mainController = require('./controllers/mainController');

router.get('/', mainController.home);
router.get('/create-question-form', mainController.form);

module.exports = router;