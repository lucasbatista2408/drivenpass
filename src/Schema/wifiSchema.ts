import joi from 'joi'

export const wifiSchema = joi.object({
  network: joi.string().email().required(),
	password: joi.string().required(),
  title: joi.string().required(),
});