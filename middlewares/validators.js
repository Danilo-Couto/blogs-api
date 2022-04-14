const JOI = require('joi');

// validar ID
const idValidation = (req, _res, next) => {
  const id = req.params;
  const { error } = JOI.object({
    id: JOI.number().integer().required(),
  }).validate(id);
  
  if (error) throw error;
  next();
};

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
  const { name } = req.body;
  const schema = JOI.object({
    name: JOI.string().required(),
  });
  
  const { error } = schema.validate({ name });

  if (error) throw error;
  next();
};

const createPostValidation = (req, _res, next) => {
  const { title, content, categoryIds } = req.body;
  const schema = JOI.object({
    title: JOI.string().required(),
    content: JOI.string().required(),
    categoryIds: JOI.array().required().items(JOI.number().integer()),
  });
  
  const { error } = schema.validate({ title, content, categoryIds });

  if (error) throw error;
  next();
};

module.exports = {
  idValidation,
  createUserValidation,
  loginValidation,
  createCategoryValidation,
  createPostValidation,
};
