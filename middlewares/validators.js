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

const loginValidation = (req, _res, next) => {
  const { email, password } = req.body;
  const schema = JOI.object({
    email: JOI.string().email().required(),
    password: JOI.string().required().min(6).messages({
      'string.min': '"password" length must be 6 characters long',
    }),
  });
  
  const { error } = schema.validate({ email, password });

  if (error) throw error;
  next();
};

const createCategoryValidation = (req, _res, next) => {
  console.log('createCategoryValidation');
  const { name } = req.body;
  const schema = JOI.object({
    name: JOI.string().required(),
  });
  
  const { error } = schema.validate({ name });

  if (error) throw error;
  next();
};

module.exports = {
  // idValidation,
  createUserValidation,
  loginValidation,
  createCategoryValidation,
};
