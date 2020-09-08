const { Router } = require('express');
const { peopleGet } = require('../controllers/swapi.controller');

const router = Router();

router.get('/people', peopleGet);

module.exports = router;