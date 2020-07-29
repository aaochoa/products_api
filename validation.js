const Joi = require('@hapi/joi');

const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required(),
    password: Joi.string().min(6).required()
  });
  return schema.validate(data);
}

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required(),
    password: Joi.string().min(6).required()
  });
  return schema.validate(data);
}

const productValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(4).required(),
    telephone: Joi.string().min(7).required(),
    description: Joi.string().min(10).required()
  });
  return schema.validate(data);
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation
module.exports.productValidation = productValidation