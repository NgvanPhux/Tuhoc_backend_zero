
const express = require('express');
const { getHomepage, getabcd, postCreateUser, getcreatepage, getupdatepage, postUpdateUser } = require('../controllers/homecontroller')
const router = express.Router();

//router.Method('/rounter', handler)

router.get('/', getHomepage);

router.get('/abcd', getabcd);
router.get('/create', getcreatepage)
router.get('/update/:id', getupdatepage)
router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser);

module.exports = router;