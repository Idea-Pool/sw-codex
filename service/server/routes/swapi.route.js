const { Router } = require('express');
const { peopleGet, favoritePeoplePost, unfavoritePeopleDelete } = require('../controllers/swapi.controller');

const router = Router();

router.get('/people', peopleGet);
router.post('/people/favorite/:name', favoritePeoplePost);
router.delete('/people/favorite/:name', unfavoritePeopleDelete);

module.exports = router;