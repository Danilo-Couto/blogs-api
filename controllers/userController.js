const jwtGenerator = require('../helpers/jwtGenerator');
const { User } = require('../models');

const createUserController = async (req, res, next) => {
    try {
        const { displayName, email, password, image } = req.body;

        const alreadyExists = await User.findOne({ where: { email } });
        
        if (alreadyExists) {         
        return res.status(409).json({ message: 'User already registered' });
        }
        const newUser = await User.create({ displayName, email, password, image });

        const token = jwtGenerator({ id: newUser.id, displayName });

        res.status(201).json({ token });
    } catch (error) {   
        next(error); 
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        const userList = await User.findAll();
        return res.status(200).json(userList);
    } catch (error) {
        next(error); 
    }
};

const getUser = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await User.findOne({ where: { id },
        });

        if (!user) return res.status(404).json({ message: 'User does not exist' }); 

        return res.status(200).json(user);
    } catch (error) {
        next(error); 
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const id = req.tokenData;
        await User.destroy({ where: id });
      
        return res.status(204).end();
    } catch (error) {
        next(error);      
    }
  };

module.exports = {
    createUserController,
    getAllUsers,
    getUser,
    deleteUser,
};
