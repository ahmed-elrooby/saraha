const logoutController = (req, res) => {
  req.session.destroy();
  res.redirect("/login");
};
export default logoutController;
