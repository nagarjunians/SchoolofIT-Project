const Joi = require("@hapi/joi");

module.exports = {
  registerValidation: data => {
    const schema = Joi.object({
      username: Joi.string()
        .min(5)
        .max(30)
        .required(),
      role: Joi.string().required().min(8),
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] }
        })
        .required(),

      password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9!@#$&()\\-`.+,/"]*$'))
        .required()
        .min(8)
        .max(25),

      confirmPassword: Joi.ref("password")
    });

    return schema.validate(data);
  }
};
