import Joi from "joi";
import userModel from "../../../dbConnection/models/user.js";

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required().email(),
  password: Joi.string().required(),
});

const registerController = (req, res) => {
  res.render("register", {
    isLoggedIn: req.session.isLoggedIn || false,
    error: [],
  });
};

const handleRegister = async (req, res) => {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.render("register", {
      isLoggedIn: req.session.isLoggedIn || false,
      error: error.details,
    });
  }

  await userModel.create(req.body);

  res.redirect("/login");
};
export { registerController, handleRegister };
