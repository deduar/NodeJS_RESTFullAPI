const { Router } = require('express');
const imageController = require('../controlles/image');
const imageUploaer = require('../helpers/image-uploader');
const checkAuth = require('../middleware/check-auth');
const router = Router();

router.post('/upload',checkAuth.checkAuth,imageUploaer.upload.single('image'),imageController.upload);


module.exports = router;