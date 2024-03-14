
const express = require('express');
const { getHomepage, getabcd, postCreateUser, getcreatepage } = require('../controllers/homecontroller')
const router = express.Router();

//router.Method('/rounter', handler)

router.get('/', getHomepage);

router.get('/abcd', getabcd);
router.get('/create', getcreatepage)
router.post('/create-user', postCreateUser);

module.exports = router;