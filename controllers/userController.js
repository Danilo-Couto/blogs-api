const jwtGenerator = require('../helpers/jwtGenerator');
const { Users } = require('../models');

const createUserController = async (req, res) => {
    try {
        const { displayName, email, password, image } = req.body;

        const alreadyExists = await Users.findOne({ where: { email } });
        
        if (alreadyExists) {         
        return res.status(409).json({ message: 'User already registered' });
        /*
        const error = new Error('User already registered');
        error.statusCode = 409;    
        return next(error); */
        }
        const newUser = await Users.create({ displayName, email, password, image });

        const token = jwtGenerator({ id: newUser.id, displayName });

        res.status(201).json({ token });
    } catch (error) {
        console.log(error);
        res
        .status(500)
        .json({ message: 'Erro ao salvar o usuário no banco', error: error.message });
        /*
        const err = new Error('Erro ao salvar o usuário no banco');
        err.statusCode = 500;    
        return next(err); */
    }
};

module.exports = {
    createUserController,
};
