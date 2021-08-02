const jwt = require('jsonwebtoken');

function checkAuth(req,res,next){
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToke = jwt.verify(token,process.env.JWT_KEY);
        req.userData = decodedToke;
        next();
    } catch (e) {
        return res.status(401).json({
            'message': "Invalid or expired token provided!",
            'error': e
        });
    }
}

module.exports = {
    checkAuth: checkAuth
}