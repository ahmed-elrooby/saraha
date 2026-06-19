const homeController = (req, res) => {
  res.render("home", {
    isLoggedIn: req.session.isLoggedIn,
  });
};

export default homeController;
