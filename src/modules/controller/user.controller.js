import messageModel from "../../../dbConnection/models/message.js";

const userController = (req, res) => {
  res.render("user", {
    isLoggedIn: req.session.isLoggedIn,
    userId: req.params.id,
    userName: req.session.userName,
  });
};
const handleMessage = async (req, res) => {
  console.log(req.body);

  await messageModel.insertMany(req.body);

  let userId = req.body.senderId;

  res.redirect(`/user/${userId}`);
};

export { userController, handleMessage };
