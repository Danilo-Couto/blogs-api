const jwtGenerator = require('../helpers/jwtGenerator');
const { User } = require('../models');

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ where: { email } });    
        if (!existingUser) return res.status(400).json({ message: 'Invalid fields' });

        const correctPass = await existingUser.password === password;
        if (!correctPass) return res.status(404).json({ message: 'Password incorrect' }); 

        const token = jwtGenerator({ id: existingUser.id, email });

        res.status(200).json({ token });
        } catch (error) {
        /* error.message = 'Erro ao logar';
        error.statusCode = 500; */
        next(error); 
    }
};

module.exports = {
    login,
};