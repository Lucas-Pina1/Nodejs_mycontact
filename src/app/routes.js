const { Router } = require('express');

const Contactcontroller = require('./controllers/ContactController');

const router = Router();

router.get('/contacts', Contactcontroller.index);
router.get('/contacts/:id', Contactcontroller.show);
router.delete('/contacts/:id', Contactcontroller.delete);

module.exports = router;