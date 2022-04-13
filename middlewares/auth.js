const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        console.log({ token });
    
        if (!token) return res.status(401).json({ message: 'Token not found' });
    /* const error = new Error('Token not found');  
    error.statusCode = 401;
    return next(error); */
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log({ decoded });
    
    req.tokenData = decoded.data;

    next();
    } catch (error) {
        if (error.name.includes('Token')) {
        return res.status(401).json({ message: 'Expired or invalid token' });
        /* error.message = 'Expired or invalid token';
        error.statusCode = 401;
        return next(error); */
        }
    }
};