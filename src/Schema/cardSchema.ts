import joi from 'joi'

export const cardSchema = joi.object({
  number: joi.string().required(),
  cardholder: joi.string().required(),
  cvv: joi.number().required(),
  expiration: joi.string().required(),
  password: joi.string().required(),
  is_virtual: joi.boolean().required(),
  type: joi.string().required(),
  title: joi.string().required(),
});