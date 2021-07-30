const { Router } = require('express');
const postController = require('../controlles/post');
const checkAuthMiddelware = require('../middleware/check-auth');
const router = Router();

router.get('/', checkAuthMiddelware.checkAuth, postController.index);
router.get('/:id', postController.show);
router.post('/', postController.save);
router.patch('/:id', checkAuthMiddelware.checkAuth, postController.update);
router.delete('/:id', checkAuthMiddelware.checkAuth, postController.destroy);

module.exports = router;