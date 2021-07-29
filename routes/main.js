const { Router } = require('express');
const router = Router();

router.get('/', (req,res,nex) => {
    res.render('./main/index.ejs');
});

router.get('/blog', (req,res,nex) => {
    res.status(200).json({
        messge: '200 - Handling GET request to /blog' 
    });
});

module.exports = router;