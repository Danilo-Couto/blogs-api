const jwtGenerator = require('../helpers/jwtGenerator');
const { Users } = require('../models');

const createLoginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        const alreadyExists = await Users.findOne({ where: { email } });
        
        if (alreadyExists) {         
        return res.status(400).json({ message: 'Invalid fields' });
        }

        const newLogin = await Users.create({ email, password });

        const token = jwtGenerator({ id: newLogin.id });

        res.status(201).json({ token });
        } catch (error) {
        console.log(error);
        res
        .status(500)
        .json({ message: 'Erro ao logar', error: error.message });
    }
};

module.exports = {
    createLoginController,
};