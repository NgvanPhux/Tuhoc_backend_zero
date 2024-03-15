
const express = require('express');
const { getHomepage, getabcd, postCreateUser, getcreatepage, getupdatepage, postUpdateUser, postDeleteUser, postHandleremoveUser
} = require('../controllers/homecontroller')
const router = express.Router();

//router.Method('/rounter', handler)

router.get('/', getHomepage);

router.get('/abcd', getabcd);
router.get('/create', getcreatepage)
router.get('/update/:id', getupdatepage);

router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser);
router.post('/delete-user/:id', postDeleteUser);
router.post('/delete-user', postHandleremoveUser);

module.exports = router;