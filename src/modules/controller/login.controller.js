import Joi from "joi";
import userModel from "../../../dbConnection/models/user.js";

const schema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required(),
});
const loginController = (req, res) => {
  res.render("login", {
    isLoggedIn: req.session.isLoggedIn || false,
    error: [],
  });
};
const handleLLogin = async (req, res) => {
  const { email, password } = req.body;
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.render("login", {
      isLoggedIn: req.session.isLoggedIn || false,
      error: error.details,
    });
  }
  const user = await userModel.findOne({ email });
  if (user) {
    if (user.password === password) {
      req.session.userId = user._id;
      req.session.userName = user.name;
      req.session.isLoggedIn = true;
      var hour = 3600000;
      req.session.cookie.expires = new Date(Date.now() + hour);
      req.session.cookie.maxAge = hour;
      res.redirect("/message");
    } else {
      res.redirect("/login");
    }
  } else {
    res.redirect("/register");
  }
};
export { loginController, handleLLogin };
