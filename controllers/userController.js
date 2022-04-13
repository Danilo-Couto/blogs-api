const jwtGenerator = require('../helpers/jwtGenerator');
const { User } = require('../models');

const createUserController = async (req, res) => {
    console.log('createUserController');
    try {
        const { displayName, email, password, image } = req.body;

        const alreadyExists = await User.findOne({ where: { email } });
        
        if (alreadyExists) {         
        return res.status(409).json({ message: 'User already registered' });
        /*
        const error = new Error('User already registered');
        error.statusCode = 409;    
        return next(error); */
        }
        const newUser = await User.create({ displayName, email, password, image });

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

const getAllUsers = async (req, res) => {
    console.log('getAllUsers');
    try {
        const userList = await User.findAll();
        console.log({ userList });
        return res.status(200).json(userList);
    } catch (error) {
        console.log({ error });
        res
        .status(500)
        .json({ message: 'Erro ao buscar usuários no banco', error: error.message });        
    }
};

module.exports = {
    createUserController,
    getAllUsers,
};
