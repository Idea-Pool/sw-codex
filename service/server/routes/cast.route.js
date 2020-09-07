const { Router } = require('express');
const { castGet } = require('../controllers/cast.controller');

const router = Router();

router.get('/cast', castGet);

module.exports = router;