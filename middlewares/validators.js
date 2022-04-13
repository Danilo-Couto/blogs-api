const JOI = require('joi');

// validar ID
/* const idValidate = JOI.object({
  id: JOI.number().integer().required(),
});

const idValidation = (req, _res, next) => {
  const id = req.params;
  const { error } = idValidate.validate(id);
  if (error) throw error;
  next();
}; */

// validar createUSER
const scheme = JOI.object({
  displayName: JOI.string().min(8).not().empty(),
  email: JOI.string().email().required(),
  password: JOI.string().required().min(6).messages({
    'string.min': '"password" length must be 6 characters long',
  }),
  image: JOI.string().required(),
});

const createUserValidation = (req, _res, next) => {
  const { displayName, email, password, image } = req.body;
  const { error } = scheme.validate({ displayName, email, password, image });
  if (error) throw error;
  next();
};

const createLoginValidation = (req, _res, next) => {
  console.log('first');
  const { email, password } = req.body;
  const { error } = JOI.object({
    email: JOI.string().email().required(),
    password: JOI.string().required().min(6).messages({
      'string.min': '"password" length must be 6 characters long',
    })
  .validate({ email, password }),
  });

  if (error) throw error;
  next();
};

module.exports = {
  // idValidation,
  createUserValidation,
  createLoginValidation,
};
