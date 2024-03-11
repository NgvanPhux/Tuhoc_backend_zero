
const express = require('express');
const { getHomepage, getabcd } = require('../controllers/homecontroller')
const router = express.Router();

//router.Method('/rounter', handler)

router.get('/', getHomepage);

router.get('/abcd', getabcd);

module.exports = router;