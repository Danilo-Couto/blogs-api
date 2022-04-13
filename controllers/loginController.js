const jwtGenerator = require('../helpers/jwtGenerator');
const { Users } = require('../models');

const createLoginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await Users.findOne({ where: { email } });
        
        if (!existingUser) return res.status(400).json({ message: 'Invalid fields' });

        const correctPass = await existingUser.password === password;
        if (!correctPass) return res.status(404).json({ message: 'Password incorrect' }); 

        const token = jwtGenerator({ id: existingUser.id, email });

        res.status(200).json({ token });
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