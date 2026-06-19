import messageModel from "../../../dbConnection/models/message.js";

const messageController = async (req, res) => {
  console.log(req.session);
  const { userName } = req.session;
  var fullurl = req.protocol + "://" + req.get("host");
  if (req.session.isLoggedIn) {
    const messages = await messageModel.find({ senderId: req.session.userId });
    console.log("messages" + messages);
    res.render("message", {
      userName,
      isLoggedIn: req.session.isLoggedIn,
      fullurl,
      userId: req.session.userId,
      messages,
    });
  } else {
    res.redirect("/login");
  }
};

export { messageController };
