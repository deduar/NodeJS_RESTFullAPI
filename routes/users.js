const { Router } = require('express');
const userController = require('../controlles/user');
const router = Router();

router.post('/signUP', userController.signUp);
router.post('/login', userController.login);

module.exports = router;