const jwt = require('jsonwebtoken');

const authen = async (req, res, next) => {
    try {
        if (req.headers.auhtorization){
            const token = req.headers.auhtorization.split(' ')[1];
            const data = jwt.verify(token, 'shhhhh' );
            req.user = data.user;
            next();   
        }
           res.status(401).json({ error: 'Bạn chưa có chứng thực!!!' }); 
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
};

module.exports = authen;