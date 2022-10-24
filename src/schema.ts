const Joi = require("joi");

export const schema = Joi.object({
  env: Joi.array().includes([
    Joi.string(),
    Joi.object().pattern(/[A-Z0-9_]/, Joi.string()),
  ]),
  interpolate: Joi.object().pattern(/[A-Z0-9_]/, Joi.string()),
  endpoints: Joi.object().pattern(/^/, Joi.any()),
});
