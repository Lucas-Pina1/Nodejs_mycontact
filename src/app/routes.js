const { Router } = require('express');

const Contactcontroller = require('./controllers/ContactController');
const Categorycontroller = require('./controllers/CategoryController');

const router = Router();

router.get('/contacts', Contactcontroller.index);
router.get('/contacts/:id', Contactcontroller.show);
router.delete('/contacts/:id', Contactcontroller.delete);
router.post('/contacts', Contactcontroller.store);
router.put('/contact/:id', Contactcontroller.update);

router.get('/categories', Categorycontroller.index);
router.post('/categories', Categorycontroller.store);

module.exports = router;
