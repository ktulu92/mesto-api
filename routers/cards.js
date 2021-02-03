const router = require('express').Router();

const controller = require('../controllers/cards');

router.get('/', controller.getCards);
// router.get('/:id',controller.getCard)

module.exports = router;
