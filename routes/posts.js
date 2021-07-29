const { Router } = require('express');
const postController = require('../controlles/post');
const router = Router();

router.get('/', postController.index);
router.get('/:id', postController.show);
router.post('/', postController.save);
router.patch('/:id', postController.update);
router.delete('/:id', postController.destroy);

module.exports = router;